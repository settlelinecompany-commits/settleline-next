"use client";

import { useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase';
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
      
      const supabase = getSupabaseClient();
      const { data, error } = await supabase
        .from('consultations')
        .insert([{
          first_name: 'Test',
          last_name: 'User',
          email: 'test@example.com',
          phone: '+1234567890',
          country: 'US',
          service_type: 'rnor-planning',
          duration_minutes: 30
        }])
        .select()
        .single();

      if (error) {
        console.error('Error:', error);
        setResult(`Error: ${error.message}`);
      } else {
        console.log('Success:', data);
        setResult(`Success: ${JSON.stringify(data, null, 2)}`);
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
