import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword, createSession } from '@/lib/auth';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        // 1. Find the user
        const user = await prisma.user.findUnique({
            where: { email },
            include: { ngo: true }
        });

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // 2. Verify password
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // 3. Block Super Admins from the NGO portal — return same generic error, never hint the account exists
        if (user.role === 'SUPER_ADMIN') {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // 4. For NGO Partners, check status
        if (user.role === 'NGO_PARTNER' && user.ngo) {
            if (user.ngo.status === 'REJECTED') {
                return NextResponse.json({ error: 'Your NGO account has been rejected. Please contact support.' }, { status: 403 });
            }
        }

        // 4. Create session
        await createSession({
            id: user.id,
            email: user.email,
            role: user.role,
            ngoId: user.ngoId
        });

        return NextResponse.json({
            success: true,
            role: user.role,
            redirect: '/ngo/dashboard'
        });

    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
