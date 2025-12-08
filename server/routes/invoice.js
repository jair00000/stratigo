const express = require('express');
const router = express.Router();
const { sendEmail, emailAddresses } = require('../config/email');
const { invoiceRequestTemplate, autoReplyInvoiceTemplate } = require('../utils/emailTemplates');

/**
 * POST /api/invoice
 * Handle invoice request submissions for hosting plans
 */
router.post('/', async (req, res) => {
  try {
    const { fullName, email, plan, billing } = req.body;
    
    // Validation
    if (!fullName || !email || !plan || !billing) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: fullName, email, plan, and billing are required'
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }
    
    // Validate plan
    const validPlans = ['standard', 'premium', 'pro'];
    if (!validPlans.includes(plan)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid plan. Must be one of: standard, premium, pro'
      });
    }
    
    // Validate billing
    const validBilling = ['monthly', 'annual'];
    if (!validBilling.includes(billing)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid billing. Must be one of: monthly, annual'
      });
    }
    
    // Calculate price based on plan and billing
    const pricing = {
      standard: { monthly: 59, annual: 649 },
      premium: { monthly: 99, annual: 1049 },
      pro: { monthly: 149, annual: 1599 }
    };
    
    const price = pricing[plan][billing];
    
    // Generate email templates
    console.log('📧 Generating email templates...');
    const internalEmail = invoiceRequestTemplate({
      fullName,
      email,
      plan,
      billing,
      price
    });
    console.log('✅ Internal email template generated');
    
    const autoReply = autoReplyInvoiceTemplate(fullName, plan, billing, price);
    console.log('✅ Auto-reply template generated');
    
    // Send email to bookings@stratigo.io
    console.log(`📤 Sending email to ${emailAddresses.bookings}...`);
    await sendEmail({
      to: emailAddresses.bookings,
      subject: internalEmail.subject,
      html: internalEmail.html,
      text: internalEmail.text,
      replyTo: email
    });
    console.log('✅ Internal email sent');
    
    // Send auto-reply to user
    console.log(`📤 Sending auto-reply to ${email}...`);
    await sendEmail({
      to: email,
      subject: autoReply.subject,
      html: autoReply.html,
      text: autoReply.text,
      replyTo: emailAddresses.bookings
    });
    console.log('✅ Auto-reply sent');
    
    // Log success
    console.log(`✅ Invoice request processed: ${fullName} (${email}) - ${plan} plan (${billing})`);
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Invoice request received! We will send you an invoice via email within 24 hours.'
    });
    
  } catch (error) {
    console.error('❌ Invoice request error:', error);
    console.error('❌ Error stack:', error.stack);
    res.status(500).json({
      success: false,
      message: 'Failed to process invoice request. Please try again or contact us at bookings@stratigo.io',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

module.exports = router;

