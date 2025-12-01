import { createClient } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const message = formData.get('message') as string;
  const email = formData.get('email') as string;

  const supabase = createClient();
  const { error } = await supabase
    .from('postcards')
    .insert({ name, message, email });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
