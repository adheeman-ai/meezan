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
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // 2. SUPER_ADMIN ONLY — reject anyone else at this door
        if (user.role !== 'SUPER_ADMIN') {
            return NextResponse.json({ error: 'Access denied. This portal is for administrators only.' }, { status: 403 });
        }

        // 3. Verify password
        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // 4. Create session
        await createSession({
            id: user.id,
            email: user.email,
            role: user.role,
            ngoId: null
        });

        return NextResponse.json({ success: true, redirect: '/admin/dashboard' });

    } catch (error) {
        console.error('Admin login error:', error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}
