import { Storage } from '@google-cloud/storage';

const projectId = process.env.GCP_PROJECT_ID;
const clientEmail = process.env.GCP_CLIENT_EMAIL;
// Handle escaped newlines in the private key
const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');
const bucketName = process.env.GCP_BUCKET_NAME || 'meezan-stoarge';

if (!projectId || !clientEmail || !privateKey) {
    console.error("Missing GCP Credentials. File uploads will fail.");
}

export const storage = new Storage({
    projectId,
    credentials: {
        client_email: clientEmail,
        private_key: privateKey,
    },
});

export const bucket = storage.bucket(bucketName);

/**
 * Uploads a file buffer to the GCP bucket.
 * @param buffer - The file buffer to upload.
 * @param destinationFolder - The prefix/folder path (e.g. "campaign-posters/123").
 * @param filename - The original file name.
 * @param contentType - The MIME type of the file.
 * @returns The unique path within the bucket (gs://... or just the path string). 
 * We will store the path string in the database to generate Signed URLs later.
 */
export async function uploadFile(
    buffer: Buffer,
    destinationFolder: string,
    filename: string,
    contentType: string
): Promise<string> {
    const timestamp = Date.now();
    const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
    const destinationPath = `${destinationFolder}/${timestamp}_${sanitizedFilename}`;

    const file = bucket.file(destinationPath);

    await file.save(buffer, {
        metadata: {
            contentType: contentType,
        },
    });

    return destinationPath;
}

/**
 * Generates an expiring Signed URL to view/download a private file.
 * @param filePath - The path of the file in the bucket (e.g. "campaign-posters/123/image.png").
 * @param expiresInMinutes - How long the URL should be valid.
 * @returns The Signed URL string.
 */
export async function getSignedUrl(filePath: string, expiresInMinutes: number = 60): Promise<string> {
    if (!filePath) return '';

    const file = bucket.file(filePath);

    const [url] = await file.getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + expiresInMinutes * 60 * 1000,
    });

    return url;
}
