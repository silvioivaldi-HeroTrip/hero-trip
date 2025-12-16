import { NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function POST(req: Request) {
  const { email, password } = await req.json()

  const user = users.find(
    (u: any) => u.email === email && u.password === password
  )

  if (!user) {
    return NextResponse.json(
      { error: 'Credenziali non valide' },
      { status: 401 }
    )
  }

  const response = NextResponse.json({ ok: true })

  response.cookies.set('auth', 'true', {
    httpOnly: true,
    path: '/',
    sameSite: 'lax'
  })

  return response
}
