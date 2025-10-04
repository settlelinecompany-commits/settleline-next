"use client";

import { useState, useEffect } from 'react';
// Removed direct Supabase import - using API routes instead
import { createRazorpayOrder, loadRazorpayScript, openRazorpayCheckout, verifyPayment, RazorpayPaymentResponse } from '@/lib/razorpay';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/layout/container';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function ConsultationForm() {
  const { user } = useAuth();
  const searchParams = useSearchParams();
  const urlServiceType = searchParams.get('serviceType') || '';
  const urlDuration = searchParams.get('duration') || '';
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [, setConsultationId] = useState<string | null>(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  // Pre-fill form data if user is authenticated
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstName: user.user_metadata?.first_name || prev.firstName,
        lastName: user.user_metadata?.last_name || prev.lastName,
        email: user.email || prev.email,
      }));
    }
  }, [user]);

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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Submitting form data:', formData);
      
      // Save to database via API route
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Error saving consultation:', result);
        alert(`Error saving consultation: ${result.details || result.error}`);
        setIsSubmitting(false);
        return;
      }

      console.log('Consultation saved successfully:', result.data);
      setConsultationId(result.data.id);

      // Proceed to payment
      await handlePayment(result.data.id);

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
      const amount = parseInt(urlDuration) * 2; // $2 per minute
      console.log('Creating Razorpay order for amount:', amount);
      
      // Create Razorpay order
      console.log('Calling createRazorpayOrder with:', {
        amount: amount * 83,
        currency: 'INR',
        receipt: `cons_${consultationId.substring(0, 8)}`,
        notes: {
          consultation_id: consultationId,
          service_type: urlServiceType,
          duration: urlDuration,
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
          service_type: urlServiceType,
          duration: urlDuration,
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
        description: `${urlServiceType} Consultation - ${urlDuration} minutes`,
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
              // Update consultation with payment details via API route
              const updateResponse = await fetch('/api/consultations', {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  consultation_id: consultationId,
                  razorpay_order_id: response.razorpay_order_id,
                  amount_paid: amount * 100, // Store in cents
                  payment_status: 'completed'
                }),
              });

              const updateResult = await updateResponse.json();

              if (!updateResponse.ok) {
                console.error('Error updating consultation:', updateResult);
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
                    We&apos;ll contact you within 24 hours to schedule your {urlDuration}-minute {urlServiceType} consultation.
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

        {/* Auth Benefits Banner */}
        {!user && (
          <Card className="mb-6 bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-blue-900">Sign in for a better experience</h3>
                  <p className="text-sm text-blue-700">
                    Track your consultations, view payment history, and get personalized recommendations.
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  asChild
                  className="border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  <Link href="/auth">Sign In</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

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
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Include country code (e.g., +1 for US, +44 for UK)
                  </p>
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
                  <span>{urlServiceType || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{urlDuration ? `${urlDuration} minutes` : 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span>
                    {urlDuration ? `$${parseInt(urlDuration) * 2}` : '$0'}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>
                    {urlDuration ? `$${parseInt(urlDuration) * 2}` : '$0'}
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
