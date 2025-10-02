"use client";

import { useState } from 'react';
// Using API route instead of direct Supabase
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function TestConsultation() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string>('');

  const handleTest = async () => {
    setIsSubmitting(true);
    setResult('');

    try {
      console.log('Testing consultation insert...');
      
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          phone: '+1234567890',
          country: 'US',
          serviceType: 'rnor-planning',
          duration: '30'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Error:', result);
        setResult(`Error: ${result.details || result.error}`);
      } else {
        console.log('Success:', result.data);
        setResult(`Success: ${JSON.stringify(result.data, null, 2)}`);
      }
    } catch (err) {
      console.error('Exception:', err);
      setResult(`Exception: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Test Consultation Insert</h1>
      
      <Button onClick={handleTest} disabled={isSubmitting}>
        {isSubmitting ? 'Testing...' : 'Test Insert'}
      </Button>
      
      {result && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <pre className="text-sm">{result}</pre>
        </div>
      )}
    </div>
  );
}
