# 🚀 How to Start the Backend Server

## Quick Start

**Open a NEW terminal window** and run:

```bash
npm run server
```

You should see:
```
🚀 Stratigo Email API Server Running
📡 Port: 3001
✉️  Email: Configured ✅
📬 Endpoints:
   POST http://localhost:3001/api/invoice
```

## Keep Server Running

**IMPORTANT:** Keep this terminal window open while testing the invoice request form!

## Alternative: Run Both Frontend + Backend Together

If you want to run both frontend and backend at the same time:

```bash
npm run start:all
```

This will start:
- Frontend (Vite) on port 5173 (or 5174)
- Backend (Express) on port 3001

## Troubleshooting

### Error: "Cannot connect to server"
- Make sure the server is running in a separate terminal
- Check that port 3001 is not already in use
- Verify you see the server startup message

### Error: "Email not configured"
- Make sure you have a `.env` file in the root directory
- Add your email credentials:
  ```
  EMAIL_USER=hello@stratigo.io
  EMAIL_PASSWORD=your_password_here
  ```

### Still having issues?
1. Stop the server (Ctrl+C)
2. Restart it: `npm run server`
3. Try the invoice request form again

