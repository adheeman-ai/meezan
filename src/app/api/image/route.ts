import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { getSignedUrl } from '@/lib/gcp';

export const runtime = 'nodejs';

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const path = searchParams.get('path');

        if (!path) {
            return NextResponse.json({ error: 'Missing path parameter' }, { status: 400 });
        }

        const baseFolder = path.split('/')[0];

        // Security: Registration docs are strictly for Super Admins
        if (baseFolder === 'registration-docs') {
            const session = await getSession();
            if (!session || session.role !== 'SUPER_ADMIN') {
                return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
            }
        }

        // For public images (campaign-posters, etc), anyone can view them.
        // We generate a short-lived Signed URL and redirect the browser to it.
        // This allows using <img src="/api/image?path=..."> smoothly.
        const signedUrl = await getSignedUrl(path, 60); // Valid for 60 mins

        return NextResponse.redirect(signedUrl);

    } catch (error: any) {
        console.error('Image proxy error:', error);
        return NextResponse.json({ error: 'Failed to retrieve image' }, { status: 500 });
    }
}
