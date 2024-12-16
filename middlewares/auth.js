import { NextRequest, NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"


export async function authMiddleware(req) {
    const token = await getToken({ req: req })

    if (req.nextUrl.pathname === '/auth/signin' && token) {
        console.log('Redirecting from /auth/signin to /');
        return NextResponse.redirect(new URL('/', req.url));
    }
    return NextResponse.next(); // Allow other requests to continue
}

