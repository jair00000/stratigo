const express = require('express');
const router = express.Router();
const { validateContactForm } = require('../middleware/validation');
const { sendEmail, emailAddresses } = require('../config/email');
const { contactFormTemplate, autoReplyContactTemplate } = require('../utils/emailTemplates');

/**
 * POST /api/contact
 * Handle contact form submissions
 */
router.post('/', validateContactForm, async (req, res) => {
  try {
    const formData = req.body;
    
    // Generate email templates
    const internalEmail = contactFormTemplate(formData);
    const autoReply = autoReplyContactTemplate(formData.fullName);
    
    // Send email to Stratigo team (hello@stratigo.io)
    await sendEmail({
      to: emailAddresses.hello,
      subject: internalEmail.subject,
      html: internalEmail.html,
      text: internalEmail.text,
      replyTo: formData.email
    });
    
    // Send auto-reply to user
    await sendEmail({
      to: formData.email,
      subject: autoReply.subject,
      html: autoReply.html,
      text: autoReply.text,
      replyTo: emailAddresses.hello
    });
    
    // Log success
    console.log(`✅ Contact form processed: ${formData.fullName} (${formData.email})`);
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Thanks for contacting Stratigo. Your request has been received and our team will respond within one business day.'
    });
    
  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send your message. Please try again or email us directly at hello@stratigo.io',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;

