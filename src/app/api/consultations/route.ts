import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('📝 Saving consultation:', body);
    
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('consultations')
      .insert([{
        first_name: body.firstName,
        last_name: body.lastName,
        email: body.email,
        phone: body.phone,
        country: body.country,
        state: body.state || null,
        city: body.city || null,
        service_type: body.serviceType,
        duration_minutes: parseInt(body.duration)
      }])
      .select()
      .single();

    if (error) {
      console.error('❌ Error saving consultation:', error);
      return NextResponse.json(
        { error: 'Failed to save consultation', details: error.message },
        { status: 500 }
      );
    }

    console.log('✅ Consultation saved successfully:', data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('💥 Exception saving consultation:', error);
    return NextResponse.json(
      { error: 'Failed to save consultation', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('🔄 Updating consultation:', body);
    
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from('consultations')
      .update({
        razorpay_order_id: body.razorpay_order_id,
        amount_paid: body.amount_paid,
        payment_status: body.payment_status
      })
      .eq('id', body.consultation_id);

    if (error) {
      console.error('❌ Error updating consultation:', error);
      return NextResponse.json(
        { error: 'Failed to update consultation', details: error.message },
        { status: 500 }
      );
    }

    console.log('✅ Consultation updated successfully');
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('💥 Exception updating consultation:', error);
    return NextResponse.json(
      { error: 'Failed to update consultation', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
