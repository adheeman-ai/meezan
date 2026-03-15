import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { uploadFile } from '@/lib/gcp';

export const runtime = 'nodejs';

export async function POST(request: Request) {
    try {
        const session = await getSession();
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const formData = await request.formData();
        const file = formData.get('file') as File;
        const folder = formData.get('folder') as string;

        if (!file || !folder) {
            return NextResponse.json({ error: 'Missing file or folder parameter' }, { status: 400 });
        }

        // Validate basic folders to prevent arbitrary uploads
        const allowedFolders = ['registration-docs', 'campaign-docs', 'campaign-posters', 'donation-screenshots'];
        const baseFolder = folder.split('/')[0];

        if (!allowedFolders.includes(baseFolder)) {
            return NextResponse.json({ error: 'Invalid upload folder destination' }, { status: 400 });
        }

        // Only Super Admins can upload registration docs
        if (baseFolder === 'registration-docs' && session.role !== 'SUPER_ADMIN') {
            return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());

        const gcpPath = await uploadFile(
            buffer,
            folder,
            file.name,
            file.type
        );

        return NextResponse.json({ success: true, path: gcpPath });

    } catch (error: any) {
        console.error('File upload error:', error);
        return NextResponse.json({ error: 'Upload Failed', details: error.message }, { status: 500 });
    }
}
