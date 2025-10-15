# 🎯 START HERE - Email Integration

## ✅ What's Done

Your website now has **complete email integration** with Microsoft 365!

---

## 🚀 DO THIS NOW (5 Minutes)

### Step 1: Create `.env` File

1. Create a file called `.env` in the **root folder** (same place as package.json)
2. Copy this content into it:

```env
NODE_ENV=development
PORT=3001
FRONTEND_URL=http://localhost:5174
EMAIL_USER=hello@stratigo.io
EMAIL_PASSWORD=PUT_YOUR_PASSWORD_HERE
```

3. **Replace** `PUT_YOUR_PASSWORD_HERE` with your Microsoft 365 password

### Step 2: Start Backend Server

Open a **new terminal** and run:

```bash
npm run server
```

Look for this:
```
✉️  Email: Configured ✅
```

### Step 3: Test It!

1. Go to your website: http://localhost:5174/contact
2. Fill out the contact form
3. Submit it
4. **Check your hello@stratigo.io inbox!**

---

## ✉️ What Emails You'll Receive

### Contact Form:
- **From**: User's email
- **To**: hello@stratigo.io
- **Contains**: Name, email, phone, message, all form details
- **Auto-reply**: User gets confirmation email

### Quote Form:
- **From**: User's email
- **To**: hello@stratigo.io
- **Contains**: Full project details, budget, timeline
- **Auto-reply**: User gets detailed next steps

---

## 📖 Need More Info?

| File | What's In It |
|------|-------------|
| **EMAIL_QUICK_START.md** | Quick 3-step guide |
| **EMAIL_INTEGRATION_COMPLETE.md** | Complete summary |
| **EMAIL_SETUP_GUIDE.md** | Detailed documentation |

---

## 🐛 Troubleshooting

**Backend won't start?**
- Check `.env` file exists
- Verify password is correct
- No extra spaces in `.env`

**No emails?**
- Check spam folder
- Verify credentials in `.env`
- Check server terminal for errors

---

## ✅ Checklist

- [ ] Created `.env` file
- [ ] Added Microsoft 365 password
- [ ] Started backend server (no errors)
- [ ] Submitted test form
- [ ] Received email at hello@stratigo.io
- [ ] User received auto-reply

---

**🎉 Once all checkboxes are ticked, your email integration is complete!**

Need help? Read **EMAIL_QUICK_START.md** for more details.

