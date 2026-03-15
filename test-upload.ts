import { uploadFile } from './src/lib/gcp';
import * as dotenv from 'dotenv';
dotenv.config();

async function test() {
    try {
        const dummyBuffer = Buffer.from('hello public content');
        const publicUrl = await uploadFile(dummyBuffer, 'campaign-posters', 'test.txt', 'text/plain');
        console.log('Public URL:', publicUrl);

        const privateBuffer = Buffer.from('hello private content');
        const privatePath = await uploadFile(privateBuffer, 'campaign-docs', 'test.txt', 'text/plain');
        console.log('Private Path:', privatePath);
    } catch (err) {
        console.error('Error:', err);
    }
}

test();
