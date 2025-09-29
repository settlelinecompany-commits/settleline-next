import { config } from 'dotenv'

// Load environment variables
config({ path: '.env.local' })

console.log('🔍 Testing Razorpay configuration...')
console.log('Key ID:', process.env.RAZORPAY_KEY_ID)
console.log('Key Secret (first 10 chars):', process.env.RAZORPAY_KEY_SECRET?.substring(0, 10) + '...')

// Test if we can import Razorpay
try {
  const Razorpay = require('razorpay')
  console.log('✅ Razorpay package imported successfully')
  
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  })
  
  console.log('✅ Razorpay client created successfully')
  
  // Test creating an order
  razorpay.orders.create({
    amount: 6000, // $60 in cents
    currency: 'USD',
    receipt: 'test_123'
  }).then((order: any) => {
    console.log('✅ Razorpay order created successfully:', order)
  }).catch((error: any) => {
    console.error('❌ Razorpay order creation failed:', error)
  })
  
} catch (error) {
  console.error('❌ Error importing Razorpay:', error)
}
