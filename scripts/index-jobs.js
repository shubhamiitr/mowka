// Google Indexing Quickstart: https://developers.google.com/search/apis/indexing-api/v3/quickstart
import { google } from 'googleapis';
import fs from 'fs/promises';
import path from 'path';

// Configuration
const KEY_FILE = process.env.GOOGLE_APPLICATION_CREDENTIALS || 'mowka-480418-2b30ea4764c7.json';
const SCOPES = ['https://www.googleapis.com/auth/indexing'];
const JOBS_FILE = 'src/data/jobs.json';
const BASE_URL = 'https://mowka.in/jobs';

async function indexJobs() {
    try {
        console.log('🚀 Starting Google Indexing Job...');

        // 1. Authenticate
        const keyFilePath = path.resolve(process.cwd(), KEY_FILE);
        console.log(`🔑 Authenticating using key file: ${KEY_FILE}`);

        const auth = new google.auth.GoogleAuth({
            keyFile: keyFilePath,
            scopes: SCOPES,
        });

        const indexing = google.indexing({
            version: 'v3',
            auth: auth
        });

        // 2. Load Jobs
        const jobsData = await fs.readFile(path.resolve(process.cwd(), JOBS_FILE), 'utf-8');
        const jobs = JSON.parse(jobsData);
        console.log(`📄 Found ${jobs.length} jobs in ${JOBS_FILE}`);

        // 3. Submit Updates
        for (const job of jobs) {
            const url = `${BASE_URL}/${job.slug}`;
            console.log(`\nProcessing: ${url}`);

            try {
                const res = await indexing.urlNotifications.publish({
                    requestBody: {
                        url: url,
                        type: 'URL_UPDATED'
                    }
                });

                if (res.status === 200) {
                    console.log(JSON.stringify(res.data, null, 2));
                } else {
                    console.log(`⚠️ Status: ${res.status}`);
                }

            } catch (error) {
                console.error(`❌ Failed to update ${url}:`, error.message);
            }
        }

        console.log('\n✨ Indexing complete!');

    } catch (error) {
        console.error('🔥 Fatal Error:', error.message);
        console.error('Make sure "mowka-480418-2b30ea4764c7.json" exists in the root directory.');
    }
}

indexJobs();
