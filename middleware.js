import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()

  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  )

  return response
}
