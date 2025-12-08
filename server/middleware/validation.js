/**
 * Input validation and sanitization middleware
 */

const validator = require('validator');

/**
 * Sanitize string input
 */
const sanitizeString = (str) => {
  if (!str) return '';
  return validator.escape(str.trim());
};

/**
 * Validate email address
 */
const validateEmail = (email) => {
  if (!email) return false;
  return validator.isEmail(email);
};

/**
 * Validate phone number (international format)
 */
const validatePhone = (phone) => {
  if (!phone) return true; // Optional field
  // Allow digits, spaces, +, -, (, )
  return /^[\d\s+()-]+$/.test(phone);
};

/**
 * Validate URL
 */
const validateURL = (url) => {
  if (!url) return true; // Optional field
  return validator.isURL(url, { require_protocol: true });
};

/**
 * Validate contact form data
 */
const validateContactForm = (req, res, next) => {
  const errors = [];
  const { fullName, email, phone, website, helpType, message, consent } = req.body;

  // Required fields
  if (!fullName || fullName.trim().length === 0) {
    errors.push('Full name is required');
  }

  if (!email || !validateEmail(email)) {
    errors.push('Valid email address is required');
  }

  if (phone && !validatePhone(phone)) {
    errors.push('Invalid phone number format');
  }

  if (website && !validateURL(website)) {
    errors.push('Invalid website URL');
  }

  if (!helpType) {
    errors.push('Please select how we can help');
  }

  if (!message || message.trim().length === 0) {
    errors.push('Message is required');
  }
  
  if (message && message.trim().length > 5000) {
    errors.push('Message must not exceed 5000 characters');
  }

  if (!consent) {
    errors.push('You must agree to be contacted');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  // Sanitize inputs
  req.body.fullName = sanitizeString(fullName);
  req.body.company = sanitizeString(req.body.company);
  req.body.email = email.trim().toLowerCase();
  req.body.phone = phone ? sanitizeString(phone) : '';
  req.body.website = website ? website.trim() : '';
  req.body.helpType = sanitizeString(helpType);
  req.body.message = sanitizeString(message);

  next();
};

/**
 * Validate quote form data
 */
const validateQuoteForm = (req, res, next) => {
  const errors = [];
  const { 
    fullName, 
    company, 
    email, 
    serviceType, 
    projectSummary, 
    needsHosting, 
    budget, 
    launchWindow,
    consent 
  } = req.body;

  // Required fields
  if (!fullName || fullName.trim().length === 0) {
    errors.push('Full name is required');
  }

  if (!company || company.trim().length === 0) {
    errors.push('Company name is required');
  }

  if (!email || !validateEmail(email)) {
    errors.push('Valid email address is required');
  }

  if (!serviceType || !Array.isArray(serviceType) || serviceType.length === 0) {
    errors.push('At least one service type is required');
  }

  if (!projectSummary || projectSummary.trim().length === 0) {
    errors.push('Project summary is required');
  }

  if (!needsHosting) {
    errors.push('Please indicate if you need hosting');
  }

  if (!budget) {
    errors.push('Budget range is required');
  }

  if (!launchWindow) {
    errors.push('Launch window is required');
  }

  if (!consent) {
    errors.push('You must agree to be contacted');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }

  // Sanitize string inputs
  req.body.fullName = sanitizeString(fullName);
  req.body.company = sanitizeString(company);
  req.body.email = email.trim().toLowerCase();
  req.body.projectSummary = sanitizeString(projectSummary);

  next();
};

module.exports = {
  validateContactForm,
  validateQuoteForm,
  sanitizeString,
  validateEmail,
  validatePhone,
  validateURL
};

