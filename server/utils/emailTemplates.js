/**
 * Email templates for different form submissions
 */

/**
 * Contact Form Email Template
 */
const contactFormTemplate = (data) => {
  const { fullName, company, email, phone, website, helpType, message } = data;
  
  return {
    subject: `New Contact Form Submission - ${helpType}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #1e3a8a; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; margin-top: 20px; border-radius: 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e3a8a; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          .message-box { background: white; padding: 15px; border-left: 4px solid #1e3a8a; margin-top: 10px; }
          .footer { margin-top: 20px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Full Name:</div>
              <div class="value">${fullName}</div>
            </div>
            
            ${company ? `
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${company}</div>
              </div>
            ` : ''}
            
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            
            ${phone ? `
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
            ` : ''}
            
            ${website ? `
              <div class="field">
                <div class="label">🌐 Website:</div>
                <div class="value"><a href="${website}" target="_blank">${website}</a></div>
              </div>
            ` : ''}
            
            <div class="field">
              <div class="label">🎯 Service Type:</div>
              <div class="value">${helpType}</div>
            </div>
            
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the Stratigo website contact form.</p>
            <p>Respond to this inquiry by replying directly to: ${email}</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
New Contact Form Submission

Full Name: ${fullName}
${company ? `Company: ${company}\n` : ''}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}
${website ? `Website: ${website}\n` : ''}
Service Type: ${helpType}

Message:
${message}

---
Reply to: ${email}
    `
  };
};

/**
 * Quote Form Email Template
 */
const quoteFormTemplate = (data) => {
  const { 
    fullName, 
    company, 
    role,
    email, 
    phone,
    location,
    serviceType,
    projectType,
    projectSummary,
    keyFeatures,
    currentAssets,
    integrations,
    needsHosting,
    traffic,
    dataSensitivity,
    backupPreference,
    budget,
    startDate,
    launchWindow,
    hearAbout
  } = data;
  
  return {
    subject: `New Quote Request - ${company || fullName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 700px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; }
          .section { background: #f9fafb; padding: 20px; margin-top: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; }
          .section-title { color: #1e3a8a; font-size: 18px; font-weight: bold; margin-bottom: 15px; }
          .field { margin-bottom: 12px; }
          .label { font-weight: bold; color: #1e3a8a; font-size: 14px; }
          .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
          .badge { display: inline-block; padding: 4px 12px; background: #3b82f6; color: white; border-radius: 12px; font-size: 12px; margin: 3px; }
          .highlight { background: #fef3c7; padding: 15px; border-radius: 8px; margin-top: 10px; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; border-top: 2px solid #e5e7eb; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📋 New Quote Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Complete Project Scope Submission</p>
          </div>
          
          <!-- About You Section -->
          <div class="section">
            <div class="section-title">👤 About You</div>
            <div class="field">
              <div class="label">Full Name:</div>
              <div class="value">${fullName}</div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${company}</div>
            </div>
            ${role ? `
              <div class="field">
                <div class="label">Role:</div>
                <div class="value">${role}</div>
              </div>
            ` : ''}
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
            ` : ''}
            ${location ? `
              <div class="field">
                <div class="label">Location:</div>
                <div class="value">${location}</div>
              </div>
            ` : ''}
          </div>
          
          <!-- What You Need Section -->
          <div class="section">
            <div class="section-title">🎯 What You Need</div>
            <div class="field">
              <div class="label">Service Type:</div>
              <div class="value">
                ${serviceType.map(s => `<span class="badge">${s}</span>`).join('')}
              </div>
            </div>
            ${projectType ? `
              <div class="field">
                <div class="label">Project Type:</div>
                <div class="value">${projectType}</div>
              </div>
            ` : ''}
            <div class="field">
              <div class="label">Project Summary:</div>
              <div class="value">${projectSummary.replace(/\n/g, '<br>')}</div>
            </div>
            ${keyFeatures && keyFeatures.length > 0 ? `
              <div class="field">
                <div class="label">Key Features:</div>
                <div class="value">
                  ${keyFeatures.map(f => `<span class="badge">${f}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            ${currentAssets && currentAssets.length > 0 ? `
              <div class="field">
                <div class="label">Current Assets:</div>
                <div class="value">
                  ${currentAssets.map(a => `<span class="badge">${a}</span>`).join('')}
                </div>
              </div>
            ` : ''}
            ${integrations ? `
              <div class="field">
                <div class="label">Integrations Needed:</div>
                <div class="value">${integrations}</div>
              </div>
            ` : ''}
          </div>
          
          <!-- Hosting & Security Section -->
          <div class="section">
            <div class="section-title">☁️ Hosting & Security</div>
            <div class="field">
              <div class="label">Needs Hosting:</div>
              <div class="value"><strong>${needsHosting}</strong></div>
            </div>
            ${traffic ? `
              <div class="field">
                <div class="label">Expected Traffic:</div>
                <div class="value">${traffic}</div>
              </div>
            ` : ''}
            ${dataSensitivity ? `
              <div class="field">
                <div class="label">Data Sensitivity:</div>
                <div class="value">${dataSensitivity}</div>
              </div>
            ` : ''}
            ${backupPreference ? `
              <div class="field">
                <div class="label">Backup Preference:</div>
                <div class="value">${backupPreference}</div>
              </div>
            ` : ''}
          </div>
          
          <!-- Budget & Timeline Section -->
          <div class="section">
            <div class="section-title">💰 Budget & Timeline</div>
            <div class="highlight">
              <div class="field">
                <div class="label">Budget Range:</div>
                <div class="value"><strong>${budget}</strong></div>
              </div>
              ${startDate ? `
                <div class="field">
                  <div class="label">Target Start Date:</div>
                  <div class="value">${startDate}</div>
                </div>
              ` : ''}
              <div class="field">
                <div class="label">Ideal Launch Window:</div>
                <div class="value"><strong>${launchWindow}</strong></div>
              </div>
            </div>
          </div>
          
          ${hearAbout ? `
            <div class="section">
              <div class="section-title">📢 Referral Source</div>
              <div class="field">
                <div class="label">How did they hear about us:</div>
                <div class="value">${hearAbout}</div>
              </div>
            </div>
          ` : ''}
          
          <div class="footer">
            <p><strong>Next Steps:</strong></p>
            <p>1. Review the project scope above</p>
            <p>2. Prepare a detailed quote and timeline</p>
            <p>3. Reply to this inquiry at: <a href="mailto:${email}">${email}</a></p>
            <p style="margin-top: 15px; color: #999;">Submitted via Stratigo Quote Request Form</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
NEW QUOTE REQUEST

=== About You ===
Full Name: ${fullName}
Company: ${company}
${role ? `Role: ${role}\n` : ''}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}
${location ? `Location: ${location}\n` : ''}

=== What You Need ===
Service Type: ${serviceType.join(', ')}
${projectType ? `Project Type: ${projectType}\n` : ''}
Project Summary:
${projectSummary}

${keyFeatures && keyFeatures.length > 0 ? `Key Features: ${keyFeatures.join(', ')}\n` : ''}
${currentAssets && currentAssets.length > 0 ? `Current Assets: ${currentAssets.join(', ')}\n` : ''}
${integrations ? `Integrations: ${integrations}\n` : ''}

=== Hosting & Security ===
Needs Hosting: ${needsHosting}
${traffic ? `Expected Traffic: ${traffic}\n` : ''}
${dataSensitivity ? `Data Sensitivity: ${dataSensitivity}\n` : ''}
${backupPreference ? `Backup Preference: ${backupPreference}\n` : ''}

=== Budget & Timeline ===
Budget Range: ${budget}
${startDate ? `Target Start: ${startDate}\n` : ''}
Launch Window: ${launchWindow}

${hearAbout ? `=== Referral Source ===\nHeard About Us: ${hearAbout}\n` : ''}

---
Reply to: ${email}
    `
  };
};

/**
 * Auto-reply template for contact form
 */
const autoReplyContactTemplate = (name) => {
  return {
    subject: 'Thank you for contacting Stratigo',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .button { display: inline-block; padding: 12px 30px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✉️ Message Received!</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for contacting <strong>Stratigo</strong>. We've received your message and will get back to you within <strong>one business day</strong>.</p>
            <p>In the meantime, feel free to explore our services:</p>
            <ul>
              <li>📈 <a href="https://stratigo.io/services/marketing">Marketing Solutions</a></li>
              <li>💻 <a href="https://stratigo.io/services/software-development">Software Development</a></li>
              <li>☁️ <a href="https://stratigo.io/services/hosting">Hosting Solutions</a></li>
            </ul>
            <p>Have urgent questions? Email us at <a href="mailto:support@stratigo.io">support@stratigo.io</a></p>
            <center>
              <a href="https://stratigo.io" class="button">Visit Our Website</a>
            </center>
          </div>
          <div class="footer">
            <p><strong>Stratigo</strong> - Digital Solutions for Business Growth</p>
            <p>hello@stratigo.io | support@stratigo.io</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Hi ${name},

Thank you for contacting Stratigo. We've received your message and will get back to you within one business day.

In the meantime, feel free to explore our services:
- Marketing Solutions: https://stratigo.io/services/marketing
- Software Development: https://stratigo.io/services/software-development
- Hosting Solutions: https://stratigo.io/services/hosting

Have urgent questions? Email us at support@stratigo.io

Best regards,
The Stratigo Team
hello@stratigo.io | support@stratigo.io
    `
  };
};

/**
 * Auto-reply template for quote form
 */
const autoReplyQuoteTemplate = (name, company) => {
  return {
    subject: 'Quote Request Received - Stratigo',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
          .timeline { background: white; padding: 20px; border-left: 4px solid #3b82f6; margin: 20px 0; }
          .button { display: inline-block; padding: 12px 30px; background: #3b82f6; color: white; text-decoration: none; border-radius: 6px; margin-top: 20px; }
          .footer { margin-top: 30px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📋 Quote Request Received!</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for submitting your project quote request${company ? ` for <strong>${company}</strong>` : ''}. We're excited to work with you!</p>
            
            <div class="timeline">
              <h3 style="color: #1e3a8a; margin-top: 0;">⏱️ What Happens Next:</h3>
              <ol style="padding-left: 20px;">
                <li><strong>Review</strong> - Our team will carefully review your project scope (within 24 hours)</li>
                <li><strong>Analysis</strong> - We'll analyze requirements, timeline, and resources needed</li>
                <li><strong>Quote</strong> - You'll receive a detailed quote with pricing and timeline</li>
                <li><strong>Consultation</strong> - We'll schedule a call to discuss your project in detail</li>
              </ol>
            </div>
            
            <p><strong>Expected Response Time:</strong> Within <strong>one business day</strong></p>
            <p>We'll contact you at the email address you provided with next steps and your personalized quote.</p>
            
            <p>Questions in the meantime? Reach out to us at <a href="mailto:hello@stratigo.io">hello@stratigo.io</a></p>
            
            <center>
              <a href="https://stratigo.io/faq" class="button">View FAQ</a>
            </center>
          </div>
          <div class="footer">
            <p><strong>Stratigo</strong> - Your Strategic Growth Partner</p>
            <p>hello@stratigo.io | support@stratigo.io</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Hi ${name},

Thank you for submitting your project quote request${company ? ` for ${company}` : ''}. We're excited to work with you!

⏱️ What Happens Next:
1. Review - Our team will carefully review your project scope (within 24 hours)
2. Analysis - We'll analyze requirements, timeline, and resources needed
3. Quote - You'll receive a detailed quote with pricing and timeline
4. Consultation - We'll schedule a call to discuss your project in detail

Expected Response Time: Within one business day

We'll contact you at the email address you provided with next steps and your personalized quote.

Questions in the meantime? Reach out to us at hello@stratigo.io

Best regards,
The Stratigo Team
hello@stratigo.io | support@stratigo.io
    `
  };
};

module.exports = {
  contactFormTemplate,
  quoteFormTemplate,
  autoReplyContactTemplate,
  autoReplyQuoteTemplate
};

