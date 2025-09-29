import { createClient } from '@supabase/supabase-js'

// Function to get Supabase client (lazy initialization)
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  console.log('🔍 Supabase env check:', {
    url: supabaseUrl ? '✅ Present' : '❌ Missing',
    key: supabaseKey ? '✅ Present' : '❌ Missing',
    urlValue: supabaseUrl?.substring(0, 20) + '...',
    keyValue: supabaseKey?.substring(0, 20) + '...'
  })
  
  if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Missing Supabase environment variables:', {
      NEXT_PUBLIC_SUPABASE_URL: supabaseUrl,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: supabaseKey
    })
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseKey)
}

// For backward compatibility, export a getter function
export const supabase = {
  get client() {
    return getSupabaseClient()
  }
}

// Types for our database
export interface Consultation {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  state?: string;
  city?: string;
  service_type: string;
  duration_minutes: number;
  razorpay_order_id?: string;
  amount_paid?: number;
  payment_status: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  description?: string;
  base_price_per_minute: number;
  is_active: boolean;
  created_at: string;
}