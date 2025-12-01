import Countdown from '@/components/Countdown'
import { createClient } from '@/supabase/client'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' })

export default function Home() {
  async function createCheckout(formData: FormData) {
    'use server'
    const name = formData.get('name') as string
    const message = formData.get('message') as string
    const email = formData.get('email') as string
    const isFree = formData.get('free') === 'true'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: isFree ? [] : [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Postcard From 2035 (Physical Delivery)' },
          unit_amount: 2900,
        },
        quantity: 1,
      }],
      mode: isFree ? 'setup' : 'payment',
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
      metadata: { name, message, email, delivery_date: '2035-01-01' },
    })

    return { url: session.url }
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black text-white flex items-center justify-center p-6">
        <div className="max-w-2xl text-center">
          <h1 className="text-6xl font-bold mb-8">Postcard From 2035</h1>
          <p className="text-2xl mb-8">Write a letter today.<br />We mail it to you on January 1, 2035.</p>
          
          <div className="mb-12">
            <Countdown />
            <p className="text-xl mt-4">free physical postcards left (first 10,000)</p>
          </div>

          <form action={createCheckout} className="space-y-6 bg-white/10 p-8 rounded-2xl">
            <input name="name" placeholder="Your name" required className="w-full p-4 rounded text-black" />
            <textarea name="message" placeholder="Message to your future self (or the world) in 2035..." required rows={6} maxLength={1000} className="w-full p-4 rounded text-black" />
            <input name="email" type="email" placeholder="Email (for 2035 delivery)" required className="w-full p-4 rounded text-black" />
            <input type="hidden" name="free" value="true" />
            
            <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xl py-6 rounded-xl">
              Send My Free Postcard → 2035
            </button>
          </form>

          <p className="mt-8 text-sm opacity-70">
            First 10,000 are 100% free + physical mail.<br />
            Share with #PostcardFrom2035 to claim your spot.
          </p>
        </div>
      </div>
    </>
  )
}
