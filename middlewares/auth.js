import { NextRequest, NextResponse } from 'next/server'
import { getToken } from "next-auth/jwt"


export async function authMiddleware(req) {
    const token = await getToken({ req: req })

    if (token && !token?.user?.is_email_verified) {
        if (req.nextUrl.pathname !== '/auth/verify-email') { // prevent redirect loop
            return NextResponse.redirect(new URL('/auth/verify-email', req.url));
        }
    }


    

    if (req.nextUrl.pathname === '/auth/signin' && token) {
        console.log('Redirecting from /auth/signin to /');
        return NextResponse.redirect(new URL('/', req.url));
    }



    return NextResponse.next(); // Allow other requests to continue
}

