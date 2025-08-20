# Facebook Pixel Implementation Guide

## Overview
Your Facebook Pixel (ID: `2194049730935870`) has been successfully implemented sitewide with automatic event tracking.

## What's Been Implemented

### 1. Client-Side Pixel Tracking
- **Location**: `/docs/app/layout.tsx`
- **Features**: 
  - Automatic PageView tracking on all pages
  - Loads asynchronously for optimal performance
  - Includes noscript fallback for users with JavaScript disabled

### 2. Automatic Event Tracking
- **Location**: `/docs/app/_components/facebook-pixel.tsx`
- **Automatic Events**:
  - **PageView**: Tracked on every page navigation
  - **ViewContent**: Triggered when users scroll 25% down any page
  - **Lead**: Tracked on any form submission
  - **InitiateCheckout**: Triggered when users click buy/purchase/order buttons
  - **Contact**: Tracked on general button clicks
  - **Video Engagement**: Tracked when users play videos
  - **Time Engagement**: Tracked after 30 seconds on page

### 3. Manual Event Tracking Functions
Two utility functions are available for custom tracking:
```typescript
// Standard Facebook events
trackFacebookEvent('Purchase', { value: 29.99, currency: 'USD' })

// Custom events
trackCustomEvent('CourseCompleted', { course_name: 'Persuasion Basics' })
```

## Server-Side Events Setup (Recommended Next Step)

For enhanced tracking accuracy and to bypass ad blockers, implement the Facebook Conversions API:

### Option 1: Facebook Conversions API (Direct)
1. **Get Access Token**:
   - Go to Facebook Business Manager
   - Navigate to Events Manager → Your Pixel → Settings
   - Generate a Conversions API Access Token

2. **Create Server Endpoint**:
   ```typescript
   // /api/facebook-events/route.ts
   import { NextRequest, NextResponse } from 'next/server'

   export async function POST(request: NextRequest) {
     const { event_name, event_data } = await request.json()
     
     const response = await fetch(`https://graph.facebook.com/v18.0/2194049730935870/events`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         data: [{
           event_name,
           event_time: Math.floor(Date.now() / 1000),
           action_source: 'website',
           event_source_url: request.headers.get('referer'),
           user_data: {
             client_ip_address: request.ip,
             client_user_agent: request.headers.get('user-agent'),
           },
           custom_data: event_data,
         }],
         access_token: process.env.FACEBOOK_ACCESS_TOKEN,
       }),
     })
     
     return NextResponse.json({ success: true })
   }
   ```

### Option 2: Google Tag Manager Server-Side Container
1. **Set up GTM Server Container**
2. **Configure Facebook Conversions API Tag**
3. **Implement event deduplication with event_id**

## Environment Variables Needed

Add to your `.env.local`:
```
FACEBOOK_ACCESS_TOKEN=your_access_token_here
FACEBOOK_PIXEL_ID=2194049730935870
```

## Testing Your Implementation

1. **Facebook Events Manager**:
   - Go to Events Manager → Test Events
   - Enter your website URL
   - Verify events are being received

2. **Browser Developer Tools**:
   - Check Network tab for `fbevents.js` loading
   - Look for `fbq` function calls in Console

3. **Facebook Pixel Helper** (Chrome Extension):
   - Install the official Facebook Pixel Helper
   - Visit your site to see real-time pixel firing

## Event Deduplication (Important for Server-Side)

When implementing server-side events, use consistent `event_id` values:

```typescript
const eventId = `${Date.now()}-${Math.random()}`

// Client-side
window.fbq('track', 'Purchase', { value: 29.99 }, { eventID: eventId })

// Server-side (same event_id)
fetch('/api/facebook-events', {
  method: 'POST',
  body: JSON.stringify({
    event_name: 'Purchase',
    event_data: { value: 29.99 },
    event_id: eventId
  })
})
```

## Best Practices

1. **Privacy Compliance**: Ensure GDPR/CCPA compliance with proper consent management
2. **Data Quality**: Use consistent naming conventions for custom events
3. **Performance**: The current implementation loads asynchronously and won't block page rendering
4. **Monitoring**: Regularly check Events Manager for data quality issues

## Troubleshooting

- **Events not showing**: Check browser console for JavaScript errors
- **Duplicate events**: Implement proper event deduplication
- **Low match rates**: Consider implementing Conversions API for better data quality

## Future Enhancements

1. **Enhanced E-commerce Tracking**: Add product-specific events
2. **Custom Audiences**: Set up pixel-based custom audiences
3. **Conversion Optimization**: Use pixel data for campaign optimization
4. **A/B Testing**: Implement pixel-based conversion tracking for tests
