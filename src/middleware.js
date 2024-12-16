import { NextRequest, NextResponse } from 'next/server'
import { getToken} from "next-auth/jwt"
import { authMiddleware } from '../middlewares/auth';


export async function middleware(req) {
    const authMiddlewares = await authMiddleware(req)
    if (authMiddlewares) return authMiddlewares
   
    return NextResponse.next(); // Allow other requests to continue
}

