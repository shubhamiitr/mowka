import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { email, phone } = await req.json();

    // Validate input
    if (!email || !phone) {
      return NextResponse.json(
        { error: 'Email and phone are required' },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.GOOGLE_SHEET_ID || !process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      console.error('Missing environment variables');
      return NextResponse.json(
        { error: 'Something went wrong on our end. Please email us at shubham@mowka.in' },
        { status: 500 }
      );
    }

    // Setup Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:C',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            email,
            phone,
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Submission successful',
    });

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);

    // More specific error messages
    if (error.code === 403) {
      return NextResponse.json(
        { error: 'Permission denied. Please ensure the sheet is shared with the service account.' },
        { status: 500 }
      );
    }

    if (error.code === 404) {
      return NextResponse.json(
        { error: 'Sheet not found. Please check the Sheet ID.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to submit. Please try again or contact shubham@mowka.in',
        details: error.message
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS if needed, though usually App Router handles simple CORS automatically or via middleware
export async function OPTIONS(request) {
  return NextResponse.json({}, { status: 200 });
}
