const express = require('express');
const router = express.Router();
const { validateQuoteForm } = require('../middleware/validation');
const { sendEmail, emailAddresses } = require('../config/email');
const { quoteFormTemplate, autoReplyQuoteTemplate } = require('../utils/emailTemplates');

/**
 * POST /api/quote
 * Handle quote form submissions
 */
router.post('/', validateQuoteForm, async (req, res) => {
  try {
    const formData = req.body;
    
    // Generate email templates
    const internalEmail = quoteFormTemplate(formData);
    const autoReply = autoReplyQuoteTemplate(formData.fullName, formData.company);
    
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
    console.log(`✅ Quote form processed: ${formData.company || formData.fullName} (${formData.email})`);
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Thanks for requesting a quote. Our team will review your scope and email you next steps and an estimated timeline within one business day.'
    });
    
  } catch (error) {
    console.error('❌ Quote form error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit your quote request. Please try again or email us directly at hello@stratigo.io',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

module.exports = router;

