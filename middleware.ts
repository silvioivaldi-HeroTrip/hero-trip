import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // 🔓 Lasciamo passare tutto tranne /matches
  if (!pathname.startsWith('/matches')) {
    return NextResponse.next()
  }

  // 🔐 Protezione SOLO /matches
  const isLogged = req.cookies.get('auth')?.value === 'true'

  if (!isLogged) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/matches']
}
