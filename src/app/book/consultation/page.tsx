"use client";

import { useState, useEffect } from 'react';
import { getSupabaseClient } from '@/lib/supabase';
import { createRazorpayOrder, loadRazorpayScript, openRazorpayCheckout, verifyPayment, RazorpayPaymentResponse } from '@/lib/razorpay';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  serviceType: string;
  duration: string;
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    serviceType: '',
    duration: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [, setConsultationId] = useState<string | null>(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Load Razorpay script on component mount
  useEffect(() => {
    loadRazorpayScript().then((loaded) => {
      setRazorpayLoaded(loaded);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.country || !formData.serviceType || !formData.duration) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting form data:', formData);
      
      // Save to Supabase first
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('consultations')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          state: formData.state || null,
          city: formData.city || null,
          service_type: formData.serviceType,
          duration_minutes: parseInt(formData.duration)
        }])
        .select()
        .single();

      if (error) {
        console.error('Error saving consultation:', error);
        alert(`Error saving consultation: ${error.message}`);
        setIsSubmitting(false);
        return;
      }

      console.log('Consultation saved successfully:', data);
      setConsultationId(data.id);

      // Proceed to payment
      await handlePayment(data.id);

    } catch (err) {
      console.error('Error:', err);
      alert(`Error saving consultation: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setIsSubmitting(false);
    }
  };

  const handlePayment = async (consultationId: string) => {
    if (!razorpayLoaded) {
      alert('Payment system is loading. Please try again in a moment.');
      setIsSubmitting(false);
      return;
    }

    try {
      const amount = parseInt(formData.duration) * 2; // $2 per minute
      console.log('Creating Razorpay order for amount:', amount);
      
      // Create Razorpay order
      console.log('Calling createRazorpayOrder with:', {
        amount: amount * 83,
        currency: 'INR',
        receipt: `cons_${consultationId.substring(0, 8)}`,
        notes: {
          consultation_id: consultationId,
          service_type: formData.serviceType,
          duration: formData.duration,
          customer_name: `${formData.firstName} ${formData.lastName}`,
          customer_email: formData.email
        }
      });

      const order = await createRazorpayOrder({
        amount: amount * 83, // Convert USD to INR (approximate rate)
        currency: 'INR',
        receipt: `cons_${consultationId.substring(0, 8)}`, // Short receipt ID
        notes: {
          consultation_id: consultationId,
          service_type: formData.serviceType,
          duration: formData.duration,
          customer_name: `${formData.firstName} ${formData.lastName}`,
          customer_email: formData.email
        }
      });

      console.log('Razorpay order created successfully:', order);

      // Open Razorpay checkout
      await openRazorpayCheckout({
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: order.amount,
        currency: order.currency,
        name: 'Settleline',
        description: `${formData.serviceType} Consultation - ${formData.duration} minutes`,
        order_id: order.id,
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          consultation_id: consultationId
        },
        theme: {
          color: '#071a3c' // Your brand color
        },
        handler: async (response: RazorpayPaymentResponse) => {
          console.log('Payment response:', response);
          
          try {
            // Verify payment
            const verified = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });

            console.log('Payment verified:', verified);

            if (verified) {
              // Update consultation with payment details
              const supabase = getSupabaseClient();
              const { error: updateError } = await supabase
                .from('consultations')
                .update({
                  razorpay_order_id: response.razorpay_order_id,
                  amount_paid: amount * 100, // Store in cents
                  payment_status: 'completed'
                })
                .eq('id', consultationId);

              if (updateError) {
                console.error('Error updating consultation:', updateError);
                alert('Payment successful but failed to update consultation. Please contact support.');
              } else {
                console.log('Consultation updated with payment details');
                setSubmitted(true);
              }
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (verifyError) {
            console.error('Payment verification error:', verifyError);
            alert('Payment verification failed. Please contact support.');
          }
        },
        modal: {
          ondismiss: () => {
            console.log('Payment modal dismissed');
            setIsSubmitting(false);
          }
        }
      });

    } catch (error) {
      console.error('Payment error:', error);
      alert(`Payment failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Container className="py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">✅ Payment Successful!</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Your consultation has been booked and payment confirmed.
          </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    We&apos;ll contact you within 24 hours to schedule your {formData.duration}-minute {formData.serviceType} consultation.
                  </p>
          <div className="space-y-4">
            <Button asChild>
              <Link href="/">Return to Home</Link>
            </Button>
            <div>
              <Button variant="outline" asChild>
                <a href="mailto:hello@settleline.com">Contact Support</a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Book Your Consultation</h1>
          <p className="text-lg text-muted-foreground">
            Get personalized guidance for your return to India
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Singapore">Singapore</SelectItem>
                      <SelectItem value="UAE">UAE</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="serviceType">Service Type</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rnor-planning">RNOR & Residency Planning</SelectItem>
                      <SelectItem value="property-advisory">Property & Real Estate Advisory</SelectItem>
                      <SelectItem value="repatriation">Repatriation & Money Movement</SelectItem>
                      <SelectItem value="business-structures">Business & Hiring Structures</SelectItem>
                      <SelectItem value="wealth-planning">Wealth & Retirement Planning</SelectItem>
                      <SelectItem value="compliance">Compliance & Risk Assurance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Select value={formData.duration} onValueChange={(value) => setFormData({...formData, duration: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes - $30</SelectItem>
                      <SelectItem value="30">30 minutes - $60</SelectItem>
                      <SelectItem value="60">60 minutes - $120</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting || !razorpayLoaded}>
                  {isSubmitting ? 'Processing...' : razorpayLoaded ? 'Proceed to Payment' : 'Loading Payment...'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Order Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Service:</span>
                  <span>{formData.serviceType || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{formData.duration ? `${formData.duration} minutes` : 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span>
                    {formData.duration ? `$${parseInt(formData.duration) * 2}` : '$0'}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>
                    {formData.duration ? `$${parseInt(formData.duration) * 2}` : '$0'}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
