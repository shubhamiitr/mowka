import { google } from 'googleapis';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, phone } = req.body;

    // Validate input
    if (!email || !phone) {
      return res.status(400).json({ error: 'Email and phone are required' });
    }

    // Setup Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    // Append data to sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:C', // Adjust sheet name if needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(), // Timestamp
            email,
            phone,
          ],
        ],
      },
    });

    return res.status(200).json({ 
      success: true, 
      message: 'Submission successful',
      data: response.data 
    });

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return res.status(500).json({ 
      error: 'Failed to submit', 
      details: error.message 
    });
  }
}

