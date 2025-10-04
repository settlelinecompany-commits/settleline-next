import { createClient } from '@supabase/supabase-js'

// Function to get Supabase client (lazy initialization)
export function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  })
}

// Function to get Supabase client with service role key (for API routes)
export function getSupabaseServiceClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase service role environment variables')
  }
  
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
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

// Auth types
export interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at: string;
  updated_at: string;
  user_metadata?: {
    first_name?: string;
    last_name?: string;
  };
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}