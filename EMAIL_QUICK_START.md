# ⚡ Email Setup - Quick Start

## 📧 What You Have

Your website forms now send emails to your Microsoft 365 emails:
- **hello@stratigo.io** - Contact & quote forms
- **support@stratigo.io** - Ready to use
- **bookings@stratigo.io** - Ready to use

---

## 🚀 Setup in 3 Steps (5 Minutes)

### Step 1: Create `.env` File

1. **Copy** `.env.example` to `.env`
2. **Edit** `.env` and add your Microsoft 365 password:

```env
EMAIL_USER=hello@stratigo.io
EMAIL_PASSWORD=YOUR_ACTUAL_PASSWORD
```

**⚠️ Replace `YOUR_ACTUAL_PASSWORD` with your real Microsoft 365 password!**

---

### Step 2: Start the Backend Server

Open a **new terminal** and run:

```bash
npm run server
```

Look for this:
```
✅ Email server connection verified successfully
```

If you see ❌, check your password in `.env`

---

### Step 3: Test It!

1. Keep the server running
2. Go to your website contact form
3. Submit a test message
4. Check your **hello@stratigo.io** inbox!

You should receive:
- ✅ Email with the form submission
- ✅ Customer gets auto-reply confirmation

---

## 🎯 Running Everything

### Development (Two Terminals):

**Terminal 1** - Frontend:
```bash
npm run dev
```

**Terminal 2** - Backend:
```bash
npm run server
```

### Or Run Both Together:
```bash
npm run start:all
```

---

## 🔑 Getting App Password (Recommended)

For better security, use an app-specific password:

1. Go to: https://account.microsoft.com/security
2. Click **"App passwords"**
3. **Create new** app password
4. **Copy** the generated password
5. **Use this** in your `.env` file instead

---

## ✅ Quick Test Checklist

- [ ] Created `.env` file with password
- [ ] Backend server starts (no errors)
- [ ] Submitted contact form
- [ ] Received email at hello@stratigo.io
- [ ] Customer received auto-reply

---

## 🐛 Troubleshooting

**Backend won't start?**
- Check `.env` exists in root folder
- Verify password is correct
- No extra spaces in `.env` file

**No emails received?**
- Check server terminal for errors
- Verify email/password are correct
- Try logging into Outlook web to test credentials

**Forms not working?**
- Make sure backend server is running
- Check backend is on port 3001
- Look for errors in browser console

---

## 📚 Full Documentation

For complete guide, see: `EMAIL_SETUP_GUIDE.md`

---

**Ready? Create your `.env` file and start the server!** 🚀

