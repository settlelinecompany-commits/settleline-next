'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/lib/auth'
import { getSupabaseClient, Consultation } from '@/lib/supabase'
import { Container } from '@/components/layout/container'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [loadingConsultations, setLoadingConsultations] = useState(true)

  useEffect(() => {
    if (user) {
      fetchConsultations()
    }
  }, [user])

  const fetchConsultations = async () => {
    try {
      const supabase = getSupabaseClient()
      
      const { data, error } = await supabase
        .from('consultations')
        .select('id, first_name, last_name, email, phone, country, service_type, duration_minutes, amount_paid, payment_status, status, created_at, updated_at, razorpay_order_id')
        .eq('email', user?.email)
        .order('created_at', { ascending: false })
        .limit(50) // Limit to 50 most recent consultations

      if (error) {
        console.error('Error fetching consultations:', error)
      } else {
        setConsultations(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoadingConsultations(false)
    }
  }

  const getStatusBadge = (status: string, paymentStatus: string) => {
    if (paymentStatus === 'paid') {
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>
    } else if (paymentStatus === 'pending') {
      return <Badge className="bg-yellow-100 text-yellow-800">Payment Pending</Badge>
    } else {
      return <Badge className="bg-gray-100 text-gray-800">Scheduled</Badge>
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount / 100) // Convert from cents
  }

  if (loading || loadingConsultations) {
    return (
      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading your dashboard...</p>
          </div>
        </div>
      </Container>
    )
  }

  if (!user) {
    return (
      <Container className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-8">Please sign in to view your dashboard.</p>
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </Container>
    )
  }

  return (
    <Container className="py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
          <p className="text-gray-600">
            Welcome back, {user.user_metadata?.first_name || user.email?.split('@')[0]}! 
            Here&apos;s your consultation history and payment status.
          </p>
        </div>

        {consultations.length === 0 ? (
          <Card className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-4">No Consultations Yet</h2>
            <p className="text-gray-600 mb-6">
              You haven&apos;t booked any consultations yet. Get started with our expert guidance.
            </p>
            <Button asChild>
              <Link href="/#services-grid">Book Your First Consultation</Link>
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Consultations</h2>
              <Button asChild variant="outline">
                <Link href="/#services-grid">Book Another Consultation</Link>
              </Button>
            </div>

            {consultations.map((consultation) => (
              <Card key={consultation.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      {consultation.service_type} Consultation
                    </h3>
                    <p className="text-gray-600">
                      {consultation.duration_minutes} minutes • {consultation.country}
                    </p>
                  </div>
                  {getStatusBadge(consultation.status, consultation.payment_status)}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Booked:</span>
                    <p className="text-gray-600">{formatDate(consultation.created_at)}</p>
                  </div>
                  
                  {consultation.amount_paid && (
                    <div>
                      <span className="font-medium">Amount:</span>
                      <p className="text-gray-600">{formatAmount(consultation.amount_paid)}</p>
                    </div>
                  )}
                  
                  <div>
                    <span className="font-medium">Contact:</span>
                    <p className="text-gray-600">{consultation.phone}</p>
                  </div>
                </div>

                {consultation.razorpay_order_id && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">
                      Order ID: {consultation.razorpay_order_id}
                    </span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you have questions about your consultations or payments, our support team is here to help.
          </p>
          <Button variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </Container>
  )
}
