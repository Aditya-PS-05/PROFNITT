import fs from 'fs';
import path from 'path';
import { google } from 'googleapis';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, 'public', 'images');

const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);

const auth = new google.auth.GoogleAuth({
  keyFile: path.join(__dirname, 'credentials.json'),
  scopes: ['https://www.googleapis.com/auth/drive'],
});

const driveService = google.drive({ version: 'v3', auth });

async function uploadFiles() {
  try {
    const files = await readdirAsync(OUTPUT_DIR);

    for (const file of files) {
      const filePath = path.join(OUTPUT_DIR, file);
      const fileMetadata = { name: file };
      const media = { mimeType: 'image/jpeg', body: fs.createReadStream(filePath) };

      const response = await driveService.files.create({
        resource: fileMetadata,
        media,
        fields: 'id',
      });

      console.log(`Uploaded ${file} with ID: ${response.data.id}`);
    }
  } catch (error) {
    console.error('Error uploading files:', error);
  }
}

uploadFiles();
