import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

const SESSION_COOKIE_NAME = 'ngo_session';
const SALT_ROUNDS = 10;

export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, SALT_ROUNDS);
}

export async function comparePassword(password: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(password, hashed);
}

export interface SessionData {
    userId: number;
    email: string;
    role: 'SUPER_ADMIN' | 'NGO_PARTNER';
    ngoId?: number;
}

export async function createSession(user: { id: number; email: string; role: any; ngoId?: number | null }) {
    const cookieStore = await cookies();
    const sessionData: SessionData = {
        userId: user.id,
        email: user.email,
        role: user.role,
        ngoId: user.ngoId || undefined
    };

    cookieStore.set(SESSION_COOKIE_NAME, JSON.stringify(sessionData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
    });
}

export async function getSession(): Promise<SessionData | undefined> {
    const cookieStore = await cookies();
    const session = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    if (!session) return undefined;
    try {
        return JSON.parse(session) as SessionData;
    } catch {
        return undefined;
    }
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);
}
