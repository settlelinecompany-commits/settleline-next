import { config } from 'dotenv'
import { createClient } from '@supabase/supabase-js'

// Load environment variables
config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

console.log('🔍 Testing Supabase connection...')
console.log('URL:', supabaseUrl)
console.log('Key (first 20 chars):', supabaseKey?.substring(0, 20) + '...')

const supabase = createClient(supabaseUrl, supabaseKey)

async function testConnection() {
  try {
    console.log('📡 Attempting to connect to Supabase...')
    
    // Test reading services
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('❌ Error:', error)
    } else {
      console.log('✅ Connection successful!')
      console.log('📊 Services data:', data)
    }
  } catch (err) {
    console.error('💥 Connection failed:', err)
  }
}

testConnection()