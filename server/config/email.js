const nodemailer = require('nodemailer');

/**
 * Microsoft 365 SMTP Configuration
 * Uses your Microsoft 365 Business Standard account
 */
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // Use STARTTLS
    auth: {
      user: process.env.EMAIL_USER, // Your Microsoft 365 email
      pass: process.env.EMAIL_PASSWORD // Your Microsoft 365 password or app password
    },
    tls: {
      ciphers: 'SSLv3',
      rejectUnauthorized: false
    }
  });
};

/**
 * Email addresses for different purposes
 */
const emailAddresses = {
  hello: 'hello@stratigo.io',
  support: 'support@stratigo.io',
  bookings: 'bookings@stratigo.io'
};

/**
 * Verify email configuration on startup
 */
const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email server connection verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email server connection failed:', error.message);
    console.error('Please check your EMAIL_USER and EMAIL_PASSWORD in .env file');
    return false;
  }
};

/**
 * Send email using Microsoft 365 SMTP
 */
const sendEmail = async ({ to, subject, html, text, replyTo }) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `Stratigo <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      text,
      replyTo: replyTo || emailAddresses.hello
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

module.exports = {
  createTransporter,
  emailAddresses,
  verifyEmailConfig,
  sendEmail
};

