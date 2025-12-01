# Postcard From 2035

**Write a letter today. We mail it to you on January 1, 2035.**

Live site: https://postcardfrom2035.com  
Twitter: https://x.com/FuturePostcard2035  
Hashtag: #PostcardFrom2035

## What it does
- Users write a short message + name + email  
- First 10,000 get a real physical postcard mailed to them in 2035 — 100% free  
- After that → paid tiers ($19–$49)  
- Built to go viral on emotion + FOMO

## Features (already working)
- Real-time countdown of free postcards left  
- Free tier skips payment (Stripe Setup mode)  
- Encrypted storage in Supabase  
- Ready for Lob.com auto-print + mail in 2035  
- Beautiful share card for Twitter / TikTok / Instagram  
- One-click deploy

## Tech stack
- Next.js 14 (App Router)  
- TypeScript  
- Tailwind CSS  
- Supabase (database + serverless functions)  
- Stripe  
- Lob (physical mail)  
- Deployed on Vercel

## Quick deploy (under 15 minutes)

1. Click **"Use this template"** or fork this repo  
2. Deploy instantly on Vercel →  
   https://vercel.com/new/clone?repository-url=https://github.com/itsmegho/postcard-from-2035-ready

3. Add these environment variables in Vercel:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
STRIPE_SECRET_KEY=sk_live_***
STRIPE_WEBHOOK_SECRET=whsec_***
LOB_API_KEY=test_*** (or live_***)
NEXT_PUBLIC_URL=https://your-domain.com
