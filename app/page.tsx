// TODO: In 2035, trigger printing via cron job or scheduled Vercel function
// import { Lob } from '@lob/lob-typescript-sdk'
// const lob = new Lob({ apiKey: process.env.LOB_API_KEY! })
//
// // Example: Create postcard (uncomment & fill address in 2035)
// const postcard = await lob.postcards.create({
//   to: {
//     name: name,
//     address_line1: '123 Future St',  // Pull from user profile or email
//     address_city: 'San Francisco',
//     address_state: 'CA',
//     address_zip: '94105',
//     address_country: 'US'
//   },
//   from: {  // Your business address
//     name: 'Postcard From 2035',
//     address_line1: '456 Time Capsule Ave',
//     // ... full from address
//   },
//   contents: message,  // Up to 1000 chars
//   size: '4x6',
//   front: 'Custom 2035 greeting design URL',  // Optional image
//   back: 'Your message here'
// })
//
// console.log(`Postcard ID: ${postcard.id} - Mailed to ${email}`)
