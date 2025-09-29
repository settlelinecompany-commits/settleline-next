// Razorpay utility functions for payment processing

export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
  receipt: string;
  status: string;
}

export interface PaymentData {
  amount: number;
  currency: string;
  receipt: string;
  notes?: Record<string, string | number | boolean>;
}

// Create Razorpay order (server-side)
export async function createRazorpayOrder(paymentData: PaymentData): Promise<RazorpayOrder> {
  const response = await fetch('/api/razorpay/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    throw new Error('Failed to create Razorpay order');
  }

  return response.json();
}

// Verify payment (server-side)
export async function verifyPayment(paymentData: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}): Promise<boolean> {
  const response = await fetch('/api/razorpay/verify-payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    return false;
  }

  const result = await response.json();
  return result.verified;
}

// Razorpay payment response interface
export interface RazorpayPaymentResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

// Client-side Razorpay options
export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpayPaymentResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  notes?: Record<string, string | number | boolean>;
  theme?: {
    color: string;
  };
  modal?: {
    ondismiss: () => void;
  };
}

// Load Razorpay script dynamically
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

// Open Razorpay checkout
export async function openRazorpayCheckout(options: RazorpayOptions): Promise<void> {
  const Razorpay = (window as { Razorpay?: new (options: RazorpayOptions) => { open: () => void } }).Razorpay;
  
  if (!Razorpay) {
    throw new Error('Razorpay script not loaded');
  }

  const razorpay = new Razorpay(options);
  razorpay.open();
}
