import { NextRequest, NextResponse } from 'next/server'
import { getToken} from "next-auth/jwt"
import { authMiddleware } from '../middlewares/auth';


export async function middleware(req) {
    const authMiddlewares = await authMiddleware(req)
    if (authMiddlewares) return authMiddlewares
   
    return NextResponse.next(); // Allow other requests to continue
}


export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}