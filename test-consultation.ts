import { config } from 'dotenv'
import { createClient } from '@supabase/supabase-js'

// Load environment variables
config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

console.log('🔍 Testing consultation insert...')
console.log('URL:', supabaseUrl)
console.log('Key (first 20 chars):', supabaseKey?.substring(0, 20) + '...')

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConsultationInsert() {
  try {
    console.log('📡 Attempting to insert test consultation...')
    
    const testData = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      country: 'US',
      state: 'California',
      city: 'San Francisco',
      service_type: 'rnor-planning',
      duration_minutes: 30
    }
    
    console.log('Test data:', testData)
    
    const { data, error } = await supabase
      .from('consultations')
      .insert([testData])
      .select()
      .single()
    
    if (error) {
      console.error('❌ Error:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
    } else {
      console.log('✅ Consultation inserted successfully!')
      console.log('📊 Inserted data:', data)
    }
  } catch (err) {
    console.error('💥 Exception:', err)
  }
}

testConsultationInsert()
