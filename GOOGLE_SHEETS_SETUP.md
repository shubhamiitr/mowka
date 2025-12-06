# Google Sheets Integration Setup Guide

## 🎯 Overview
Your contact form now submits directly to Google Sheets. Follow these steps to complete the setup.

---

## ✅ Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new sheet called "Mowka Leads" (or any name)
3. In **Sheet1**, add headers in Row 1:
   - **A1**: Timestamp
   - **B1**: Email
   - **C1**: Phone
4. **Copy the Sheet ID** from the URL:
   ```
   https://docs.google.com/spreadsheets/d/1IJSW0IpDdYz2zboxpDyr3zi2t5G7KX1bjiy-PzOAlJU/edit
   ```
   Save this ID - you'll need it later!

---

## ✅ Step 2: Create Google Service Account (FREE)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing):
   - Click dropdown at top → "New Project"
   - Name it "Mowka"
   - Click "Create"

3. **Enable Google Sheets API**:
   - In search bar, type "Google Sheets API"
   - Click on it → Click "Enable"

4. **Create Service Account**:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"
   - Name: `mowka-contact-form`
   - Click "Create and Continue"
   - Skip optional steps → Click "Done"

5. **Get Service Account Email**:
   - You'll see your service account listed
   - Copy the email (`mowka-contact-form@mowka-480418.iam.gserviceaccount.com`)
   - **IMPORTANT**: Go back to your Google Sheet and **Share** it with this email (Editor access)

6. **Create Private Key**:
   - Click on your service account name
   - Go to "Keys" tab
   - Click "Add Key" → "Create New Key"
   - Choose **JSON** format
   - Click "Create" - a JSON file will download
   - **Keep this file safe!**

---

## ✅ Step 3: Extract Credentials from JSON

Open the downloaded JSON file. You'll need two values:

1. **client_email**: Copy the entire email
2. **private_key**: Copy the entire key (including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`)

---

## ✅ Step 4: Add Environment Variables to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your **mowka** project
3. Go to **Settings** → **Environment Variables**
4. Add these 3 variables:

### Variable 1:
- **Name**: `GOOGLE_SHEET_ID`
- **Value**: Your Sheet ID from Step 1
- **Environment**: Production, Preview, Development (check all)

### Variable 2:
- **Name**: `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- **Value**: The `client_email` from your JSON file
- **Environment**: Production, Preview, Development (check all)

### Variable 3:
- **Name**: `GOOGLE_PRIVATE_KEY`
- **Value**: The entire `private_key` from your JSON file (paste as-is with newlines)
- **Environment**: Production, Preview, Development (check all)

---

## ✅ Step 5: Deploy to Vercel

```bash
# Commit the changes
git add .
git commit -m "feat: add Google Sheets contact form integration"
git push origin main
```

Vercel will automatically deploy. The contact form will now save submissions to your Google Sheet!

---

## 🧪 Testing

1. Visit your deployed site
2. Fill out the contact form
3. Check your Google Sheet - a new row should appear!

---

## 🔧 Troubleshooting

### "Submission failed"
- Check that you've **shared the Google Sheet** with the service account email
- Verify all 3 environment variables are set in Vercel
- Redeploy after adding environment variables

### "Permission denied"
- Make sure the service account email has **Editor** access to the sheet
- Check that Google Sheets API is enabled in your Google Cloud project

### Still not working?
- Check Vercel Function logs: Dashboard → Your Project → Deployments → Click latest → Functions
- Make sure the sheet name is "Sheet1" or update the range in `api/submit.js`

---

## 📊 Sheet Structure

Your Google Sheet will automatically populate like this:

| Timestamp | Email | Phone |
|-----------|-------|-------|
| 2025-01-07T10:30:00.000Z | john@company.com | +91 98765 43210 |
| 2025-01-07T11:15:00.000Z | jane@startup.io | +1 555-123-4567 |

---

## 🎉 Done!

You now have a fully automated contact form that saves directly to Google Sheets - completely free!

**Optional**: Set up email notifications in Google Sheets (Tools → Notification rules) to get alerted on new submissions.

