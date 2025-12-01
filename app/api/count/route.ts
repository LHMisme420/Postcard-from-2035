import { createClient } from '@/supabase/client'

export async function GET() {
  const supabase = createClient()
  const { count } = await supabase.from('postcards').select('*', { count: 'exact', head: true })
  const remaining = Math.max(10000 - (count || 0), 0)
  return Response.json({ remaining })
}
