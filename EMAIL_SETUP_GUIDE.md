# 📧 Email Integration Setup Guide

## ✅ What's Been Created

Your website now has a **professional backend email system** that integrates with your Microsoft 365 Business Standard emails!

---

## 🎯 Email Addresses Configured

Your three Microsoft 365 email aliases are ready to use:
- **hello@stratigo.io** - Main contact and general inquiries
- **support@stratigo.io** - Technical support requests  
- **bookings@stratigo.io** - Appointment and booking requests

### Default Routing:
- **Contact Form** → `hello@stratigo.io`
- **Quote Form** → `hello@stratigo.io`
- All forms send **auto-reply** emails to customers

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create Your `.env` File

1. **Create a new file** in the root directory called `.env`
2. **Add this content** (replace with your actual credentials):

```env
# Environment
NODE_ENV=development

# Server Configuration
PORT=3001
FRONTEND_URL=http://localhost:5174

# Microsoft 365 Email Configuration
EMAIL_USER=hello@stratigo.io
EMAIL_PASSWORD=YOUR_ACTUAL_PASSWORD_HERE
```

**⚠️ IMPORTANT**: Replace `YOUR_ACTUAL_PASSWORD_HERE` with your actual Microsoft 365 password!

---

### Step 2: Get Your Microsoft 365 Password

You have two options:

#### Option A: Use Your Main Password (Quick, Less Secure)
- Use your regular Microsoft 365 account password
- **Not recommended for production**

#### Option B: Generate App Password (Recommended)
1. Go to: https://account.microsoft.com/security
2. Sign in with your Microsoft 365 account
3. Select **"App passwords"**
4. Click **"Create a new app password"**
5. Copy the generated password
6. Use this password in your `.env` file

---

### Step 3: Start the Backend Server

Open a **new terminal** and run:

```bash
npm run server
```

You should see:
```
==================================================
🚀 Stratigo Email API Server Running
📡 Port: 3001
🌍 Environment: development
✉️  Email: Configured ✅
==================================================
```

If you see **"Email: Not Configured ⚠️"**, check your `.env` file.

---

### Step 4: Test the Email System

#### Test 1: Health Check
Open your browser and go to:
```
http://localhost:3001/api/health
```

You should see:
```json
{
  "status": "ok",
  "message": "Stratigo Email API is running",
  "timestamp": "2025-10-14T..."
}
```

#### Test 2: Submit a Contact Form
1. Go to your website: http://localhost:5174
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your `hello@stratigo.io` inbox

You should receive:
- ✅ An email with the form submission details
- ✅ The customer receives an auto-reply confirmation

---

## 📁 What Was Created

### Backend Structure:
```
server/
├── config/
│   └── email.js                 ← Microsoft 365 SMTP configuration
├── routes/
│   ├── contact.js               ← Contact form API endpoint
│   └── quote.js                 ← Quote form API endpoint
├── middleware/
│   └── validation.js            ← Input validation & sanitization
├── utils/
│   └── emailTemplates.js        ← Beautiful HTML email templates
├── index.js                     ← Main server file
└── package.json                 ← Server configuration

Root Files:
├── .env.example                 ← Environment variables template
└── EMAIL_SETUP_GUIDE.md         ← This file
```

---

## 🎨 Email Templates

### Internal Emails (To You):
- Clean, professional HTML layout
- All form data organized in sections
- Click-to-call phone links
- Click-to-email address links
- Reply-to automatically set to customer's email

### Auto-Reply Emails (To Customers):
- Branded Stratigo template
- Confirms receipt of their message
- Sets expectations (24-hour response)
- Links to your services
- Professional signature

---

## 🔧 API Endpoints

### POST `/api/contact`
Handle contact form submissions
- **Sends to**: hello@stratigo.io
- **Auto-reply**: Yes
- **Rate limit**: 10 requests per 15 minutes per IP

### POST `/api/quote`
Handle quote request submissions
- **Sends to**: hello@stratigo.io
- **Auto-reply**: Yes
- **Rate limit**: 10 requests per 15 minutes per IP

### GET `/api/health`
Health check endpoint
- No rate limit
- Returns server status

---

## 🔐 Security Features

### ✅ Built-in Protection:
1. **Rate Limiting** - Prevents spam (10 requests per 15 min)
2. **Input Validation** - All inputs validated before processing
3. **Input Sanitization** - XSS protection, SQL injection prevention
4. **Helmet.js** - Security headers
5. **CORS Protection** - Only your frontend can access the API
6. **Email Validation** - RFC-compliant email checking
7. **Size Limits** - 10MB max payload

---

## 🌐 Running Frontend + Backend Together

### Option 1: Separate Terminals (Development)

**Terminal 1** - Frontend:
```bash
npm run dev
```

**Terminal 2** - Backend:
```bash
npm run server
```

### Option 2: Single Command (Easier)

```bash
npm run start:all
```

This runs both frontend and backend simultaneously!

### Option 3: With Auto-Restart (Best for Development)

```bash
npm run start:all:dev
```

This runs both with auto-restart when files change!

---

## 📧 Customizing Email Routing

Want different forms to go to different emails?

### Edit: `server/routes/contact.js`

Change line ~19:
```javascript
// Current: Sends to hello@stratigo.io
to: emailAddresses.hello,

// Change to support:
to: emailAddresses.support,

// Change to bookings:
to: emailAddresses.bookings,

// Send to multiple:
to: [emailAddresses.hello, emailAddresses.support].join(','),
```

### Edit: `server/config/email.js`

Add more email addresses:
```javascript
const emailAddresses = {
  hello: 'hello@stratigo.io',
  support: 'support@stratigo.io',
  bookings: 'bookings@stratigo.io',
  sales: 'sales@stratigo.io',  // Add new aliases here
  info: 'info@stratigo.io'
};
```

---

## 🧪 Testing Emails

### Test Without Sending Real Emails

For development, you can use **Ethereal Email** (fake SMTP):

1. Go to: https://ethereal.email/create
2. Get temporary credentials
3. Update `.env`:
```env
EMAIL_USER=your-ethereal-user
EMAIL_PASSWORD=your-ethereal-password
```
4. Update `server/config/email.js`:
```javascript
host: 'smtp.ethereal.email',  // Change from smtp.office365.com
port: 587,
```

All emails will go to: https://ethereal.email/messages (no real sending)

---

## 🐛 Troubleshooting

### Problem: "Email: Not Configured ⚠️"

**Solutions**:
1. Check `.env` file exists in root directory
2. Verify `EMAIL_USER` and `EMAIL_PASSWORD` are set
3. Make sure no extra spaces in `.env` values
4. Restart the server after changing `.env`

---

### Problem: "Error: Invalid login"

**Solutions**:
1. Double-check email address and password
2. If using 2FA, must use app password
3. Verify Microsoft 365 account is active
4. Try logging into Outlook web to test credentials

---

### Problem: "ECONNREFUSED" or connection timeout

**Solutions**:
1. Check your internet connection
2. Verify Microsoft 365 SMTP is not blocked by firewall
3. Make sure port 587 is not blocked
4. Try using port 25 or 465 (update in `server/config/email.js`)

---

### Problem: Forms not submitting

**Solutions**:
1. Check if backend server is running (`npm run server`)
2. Verify backend is on port 3001
3. Check browser console for errors
4. Ensure frontend URL in `.env` matches your dev server

---

### Problem: Rate limit errors

**Solution**: Wait 15 minutes or reduce rate limit in `server/index.js`:
```javascript
max: 10, // Change to higher number like 50
```

---

## 📊 Email Logs

### Check Server Logs

The server logs all email activity:
```
✅ Email sent successfully: <message-id>
✅ Contact form processed: John Doe (john@example.com)
✅ Quote form processed: Acme Corp (jane@acme.com)
```

If errors occur:
```
❌ Email sending failed: [error details]
❌ Contact form error: [error message]
```

---

## 🌟 Production Deployment

### Environment Variables

For production, set these environment variables on your hosting platform:

```env
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://stratigo.io
EMAIL_USER=hello@stratigo.io
EMAIL_PASSWORD=your-app-password
```

### Recommended Hosting:
- **Vercel** - For frontend (Vite app)
- **Heroku / Railway / Render** - For backend (Express server)
- Or deploy both on same platform

### Security Checklist:
- ✅ Use app-specific password (not main password)
- ✅ Use environment variables (never hardcode passwords)
- ✅ Enable HTTPS for both frontend and backend
- ✅ Update CORS to allow only your production domain
- ✅ Consider adding authentication for admin endpoints
- ✅ Set up monitoring and alerts
- ✅ Regularly update dependencies

---

## 📞 Support

### Need Help?

1. **Check logs** - Server terminal shows detailed error messages
2. **Test health endpoint** - http://localhost:3001/api/health
3. **Verify credentials** - Try logging into Outlook web
4. **Check this guide** - Re-read troubleshooting section

### Common Questions:

**Q: Do I need to pay for email sending?**
A: No! Microsoft 365 Business Standard includes SMTP sending.

**Q: How many emails can I send?**
A: Microsoft 365 has limits (~10,000 per day), more than enough for a business website.

**Q: Can I change the email templates?**
A: Yes! Edit `server/utils/emailTemplates.js`

**Q: Can I add file attachments?**
A: Yes, the infrastructure supports it. Forms need file upload enabled.

**Q: Is this secure?**
A: Yes! Includes rate limiting, validation, sanitization, and security headers.

---

## ✅ Quick Checklist

Before going live, verify:

- [ ] `.env` file created with real credentials
- [ ] Backend server starts without errors
- [ ] Health endpoint responds
- [ ] Contact form sends email to hello@stratigo.io
- [ ] Customer receives auto-reply
- [ ] Quote form sends email to hello@stratigo.io
- [ ] Customer receives quote confirmation
- [ ] Email templates look good
- [ ] Rate limiting works (test with multiple submissions)
- [ ] All validation works (test invalid inputs)

---

## 🎉 You're All Set!

Your email integration is complete! Forms will now send professional emails to your Microsoft 365 inbox.

### Next Steps:
1. Create your `.env` file with real credentials
2. Start the backend server
3. Test by submitting a contact form
4. Check your hello@stratigo.io inbox
5. Customize email templates if desired

---

**Need help? Check the troubleshooting section or review the server logs for detailed error messages!**

*Last Updated: October 14, 2025*

