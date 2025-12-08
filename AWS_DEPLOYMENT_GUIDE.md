# 🚀 AWS CloudFront + EC2 Deployment Guide

## Architecture Overview

```
User → CloudFront (CDN) → S3 (Frontend Static Files)
                    ↓
              EC2 Instance (Backend API on Port 3001)
```

## 📋 Deployment Architecture

### Frontend (CloudFront + S3)
- **CloudFront**: CDN distribution serving your React app
- **S3 Bucket**: Stores built static files from Vite
- **Port**: 80/443 (HTTPS via CloudFront)

### Backend (EC2)
- **EC2 Instance**: Runs Node.js Express server
- **Port**: 3001 (internal) or 80/443 (via Nginx reverse proxy)
- **Security Group**: Allow HTTP/HTTPS from CloudFront

---

## 🔧 Step 1: Update Configuration for Production

### 1.1 Update Server CORS Configuration

The server already supports environment variables. Update your EC2 `.env`:

```env
NODE_ENV=production
PORT=3001
FRONTEND_URL=https://stratigo.io
EMAIL_USER=hello@stratigo.io
EMAIL_PASSWORD=your_app_password_here
```

### 1.2 Update Frontend API URL

The frontend will need to know the backend URL. Update `Checkout.jsx` and other API calls.

---

## 🏗️ Step 2: EC2 Backend Setup

### 2.1 Launch EC2 Instance

1. **AMI**: Amazon Linux 2023 or Ubuntu 22.04
2. **Instance Type**: t2.micro or t3.small (minimum)
3. **Security Group**: 
   - Allow SSH (port 22) from your IP
   - Allow HTTP (port 80) from CloudFront
   - Allow HTTPS (port 443) from CloudFront
   - Allow port 3001 from CloudFront (if direct access)

### 2.2 Install Node.js on EC2

```bash
# SSH into EC2
ssh -i your-key.pem ec2-user@your-ec2-ip

# Install Node.js (Amazon Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20

# Or for Ubuntu
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2.3 Deploy Backend Code

```bash
# Clone your repository
git clone https://github.com/yourusername/stratigo.git
cd stratigo

# Install dependencies
cd server
npm install --production

# Create .env file
nano .env
# Add production environment variables (see above)

# Install PM2 for process management
npm install -g pm2

# Start server with PM2
pm2 start index.js --name stratigo-api
pm2 save
pm2 startup  # Follow instructions to enable auto-start
```

### 2.4 Set Up Nginx Reverse Proxy (Recommended)

```bash
# Install Nginx
sudo yum install nginx  # Amazon Linux
# or
sudo apt-get install nginx  # Ubuntu

# Create Nginx config
sudo nano /etc/nginx/conf.d/stratigo-api.conf
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name api.stratigo.io;  # Or your EC2 public IP

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Test and restart Nginx
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

---

## 🌐 Step 3: Frontend Deployment (S3 + CloudFront)

### 3.1 Build Frontend

```bash
# On your local machine
npm run build
# This creates a 'dist' folder with static files
```

### 3.2 Upload to S3

```bash
# Install AWS CLI
aws configure  # Add your AWS credentials

# Create S3 bucket
aws s3 mb s3://stratigo-frontend

# Upload build files
aws s3 sync dist/ s3://stratigo-frontend --delete

# Enable static website hosting (optional, CloudFront will serve)
aws s3 website s3://stratigo-frontend --index-document index.html
```

### 3.3 Create CloudFront Distribution

1. Go to **CloudFront Console** → **Create Distribution**
2. **Origin Domain**: Select your S3 bucket
3. **Viewer Protocol Policy**: Redirect HTTP to HTTPS
4. **Default Root Object**: `index.html`
5. **Error Pages**: 
   - 404 → `/index.html` (for React Router)
   - 403 → `/index.html`
6. **Create Distribution**

### 3.4 Update Frontend API URL

Before building, update the API URL in your frontend code to point to your EC2 backend.

---

## 🔗 Step 4: Connect Frontend to Backend

### Option A: Direct EC2 IP/Domain

Update `src/pages/Checkout.jsx` and other API calls:

```javascript
// Production API URL
const API_URL = import.meta.env.PROD 
  ? 'https://api.stratigo.io/api'  // Your EC2 domain or IP
  : '/api';  // Development proxy

const response = await fetch(`${API_URL}/invoice`, {
  // ...
});
```

### Option B: CloudFront Origin for API

Add EC2 as a CloudFront origin:
1. **CloudFront** → Your Distribution → **Origins**
2. **Add Origin**:
   - Domain: `api.stratigo.io` or EC2 IP
   - Path: `/api/*`
3. **Behaviors**: Create behavior for `/api/*` → EC2 origin

Then frontend can use: `https://stratigo.io/api/invoice`

---

## 🔐 Step 5: Security Configuration

### 5.1 Update CORS on EC2

Your server already supports this via `FRONTEND_URL` environment variable:

```env
FRONTEND_URL=https://stratigo.io
```

### 5.2 SSL Certificate (HTTPS)

**Option 1: CloudFront + ACM (Recommended)**
- Request certificate in **AWS Certificate Manager (ACM)**
- Use in CloudFront distribution
- Free SSL certificate

**Option 2: EC2 with Let's Encrypt**
```bash
sudo certbot --nginx -d api.stratigo.io
```

### 5.3 Security Group Rules

**EC2 Security Group:**
- Port 22 (SSH): Only from your IP
- Port 80/443: Only from CloudFront (or specific IPs)
- Port 3001: Only from localhost (if using Nginx)

---

## 📝 Step 6: Environment Variables

### EC2 `.env` File (Production)

```env
# Environment
NODE_ENV=production

# Server Configuration
PORT=3001
FRONTEND_URL=https://stratigo.io

# Microsoft 365 Email Configuration
EMAIL_USER=hello@stratigo.io
EMAIL_PASSWORD=your_app_password_here

# Optional: Stripe (when ready)
STRIPE_SECRET_KEY=sk_live_your_key
STRIPE_WEBHOOK_SECRET=whsec_your_secret
```

### Frontend Environment Variables

Create `.env.production`:
```env
VITE_API_URL=https://api.stratigo.io/api
```

---

## 🚀 Step 7: Update Frontend Code for Production

Update API calls to use environment variable:

```javascript
// src/config/api.js (create this file)
export const API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.PROD ? 'https://api.stratigo.io/api' : '/api');
```

Then use in `Checkout.jsx`:
```javascript
import { API_URL } from '../config/api';

const response = await fetch(`${API_URL}/invoice`, {
  // ...
});
```

---

## ✅ Deployment Checklist

- [ ] EC2 instance launched and configured
- [ ] Node.js installed on EC2
- [ ] Backend code deployed to EC2
- [ ] `.env` file created on EC2 with production values
- [ ] PM2 installed and server running
- [ ] Nginx configured (optional but recommended)
- [ ] Security groups configured
- [ ] Frontend built (`npm run build`)
- [ ] S3 bucket created and files uploaded
- [ ] CloudFront distribution created
- [ ] CORS updated for production domain
- [ ] SSL certificate configured
- [ ] API URLs updated in frontend code
- [ ] Test invoice request form
- [ ] Test email delivery

---

## 🔄 Continuous Deployment

### Option 1: GitHub Actions

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build
        run: npm run build
      - name: Deploy to S3
        run: aws s3 sync dist/ s3://stratigo-frontend --delete
      - name: Invalidate CloudFront
        run: aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to EC2
        run: |
          ssh ec2-user@your-ec2-ip "cd stratigo && git pull && cd server && npm install && pm2 restart stratigo-api"
```

### Option 2: Manual Deployment Script

Create `deploy.sh`:
```bash
#!/bin/bash
# Build frontend
npm run build

# Upload to S3
aws s3 sync dist/ s3://stratigo-frontend --delete

# Invalidate CloudFront
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"

# Deploy backend (SSH into EC2)
ssh ec2-user@your-ec2-ip << 'EOF'
cd stratigo
git pull
cd server
npm install
pm2 restart stratigo-api
EOF
```

---

## 🐛 Troubleshooting

### Backend not accessible
- Check Security Group allows CloudFront IPs
- Verify PM2 is running: `pm2 status`
- Check logs: `pm2 logs stratigo-api`
- Test locally on EC2: `curl http://localhost:3001/api/health`

### CORS errors
- Verify `FRONTEND_URL` in EC2 `.env` matches your domain
- Check CloudFront origin configuration
- Verify CORS headers in server response

### Email not sending
- Verify `.env` has correct email credentials
- Check PM2 logs for email errors
- Test SMTP connection: `node -e "require('./server/config/email').verifyEmailConfig()"`

---

## 📊 Monitoring

### PM2 Monitoring
```bash
pm2 monit  # Real-time monitoring
pm2 logs   # View logs
pm2 status # Check status
```

### CloudWatch (Optional)
- Set up CloudWatch logs for EC2
- Monitor API response times
- Set up alerts for errors

---

## 💰 Cost Optimization

- **EC2**: Use t2.micro (free tier eligible) or t3.small
- **S3**: Very cheap for static hosting
- **CloudFront**: Pay per request (very affordable)
- **Data Transfer**: Minimize with CloudFront caching

---

## 🔄 Updating After Deployment

1. **Frontend Changes**: Build → Upload to S3 → Invalidate CloudFront
2. **Backend Changes**: SSH to EC2 → Pull code → Restart PM2
3. **Environment Variables**: Update EC2 `.env` → Restart PM2

---

## 📞 Need Help?

- Check PM2 logs: `pm2 logs stratigo-api`
- Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Test API: `curl https://api.stratigo.io/api/health`
- Check CloudFront logs in AWS Console

