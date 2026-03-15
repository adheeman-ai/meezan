import { Storage } from '@google-cloud/storage';

const projectId = process.env.GCP_PROJECT_ID;
const clientEmail = process.env.GCP_CLIENT_EMAIL;
// Handle escaped newlines in the private key
const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n');
const bucketName = process.env.GCP_BUCKET_NAME || 'meezan-stoarge';
const publicBucketName = process.env.GCP_PUBLIC_BUCKET_NAME || 'meezan-public';

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
export const publicBucket = storage.bucket(publicBucketName);

// Define which folders are considered public
const PUBLIC_FOLDERS = ['campaign-posters'];

/**
 * Uploads a file buffer to the GCP bucket.
 * @param buffer - The file buffer to upload.
 * @param destinationFolder - The prefix/folder path (e.g. "campaign-posters/123").
 * @param filename - The original file name.
 * @param contentType - The MIME type of the file.
 * @returns The unique path within the bucket (gs://... or just the path string). 
 * Or the absolute public URL if it's a public folder.
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

    const isPublic = PUBLIC_FOLDERS.some(folder => destinationFolder.startsWith(folder));
    const targetBucket = isPublic ? publicBucket : bucket;

    const file = targetBucket.file(destinationPath);

    await file.save(buffer, {
        metadata: {
            contentType: contentType,
        },
    });

    if (isPublic) {
        // Return the direct public URL
        return `https://storage.googleapis.com/${publicBucketName}/${destinationPath}`;
    }

    // For private files, return the path to be used with Signed URLs later
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

    // If it's already a full HTTP URL (e.g. from the public bucket), just return it
    if (filePath.startsWith('http')) {
        return filePath;
    }

    const isPublic = PUBLIC_FOLDERS.some(folder => filePath.startsWith(folder));
    const targetBucket = isPublic ? publicBucket : bucket;

    const file = targetBucket.file(filePath);

    // If it's public but stored just as a path, we can still generate a signed URL or just return the public URL
    if (isPublic) {
        return `https://storage.googleapis.com/${publicBucketName}/${filePath}`;
    }

    const [url] = await file.getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: Date.now() + expiresInMinutes * 60 * 1000,
    });

    return url;
}
