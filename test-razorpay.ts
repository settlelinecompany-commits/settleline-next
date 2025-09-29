import { config } from 'dotenv'

// Load environment variables
config({ path: '.env.local' })

const razorpayKeyId = process.env.RAZORPAY_KEY_ID
const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET

console.log('🔍 Testing Razorpay configuration...')
console.log('Key ID:', razorpayKeyId)
console.log('Key Secret (first 10 chars):', razorpayKeySecret?.substring(0, 10) + '...')

async function testRazorpayAPI() {
  try {
    console.log('📡 Testing Razorpay API call...')
    
    const response = await fetch('http://localhost:3000/api/razorpay/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 60, // $60 for 30-minute consultation
        currency: 'USD',
        receipt: 'test_consultation_123',
        notes: {
          test: true,
          consultation_id: 'test-123'
        }
      })
    })

    const result = await response.json()
    
    if (response.ok) {
      console.log('✅ Razorpay API working!')
      console.log('Order created:', result)
    } else {
      console.error('❌ Razorpay API error:', result)
    }
  } catch (error) {
    console.error('💥 Exception:', error)
  }
}

testRazorpayAPI()
