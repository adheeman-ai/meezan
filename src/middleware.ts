import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Get Session
    const sessionCookie = request.cookies.get('ngo_session')?.value;
    let sessionData: any = null;

    if (sessionCookie) {
        try {
            sessionData = JSON.parse(decodeURIComponent(sessionCookie));
        } catch (e) {
            console.error('Failed to parse session cookie', e);
        }
    }

    // 2. Protect Admin Routes
    if (pathname.startsWith('/admin')) {
        if (!sessionData || sessionData.role !== 'SUPER_ADMIN') {
            return NextResponse.redirect(new URL('/ngo/login', request.url));
        }
    }

    // 3. Protect NGO Dashboard
    if (pathname.startsWith('/ngo/dashboard')) {
        if (!sessionData || (sessionData.role !== 'NGO_PARTNER' && sessionData.role !== 'SUPER_ADMIN')) {
            return NextResponse.redirect(new URL('/ngo/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/ngo/dashboard/:path*', '/admin/:path*'],
};
