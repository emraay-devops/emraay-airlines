import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { method, nextUrl } = request
  const path = nextUrl.pathname

  // Log every request to stdout (visible in docker logs)
  console.log(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      method,
      path,
      userAgent: request.headers.get('user-agent')?.slice(0, 50)
    })
  )

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images).*)']
}
