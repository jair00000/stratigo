require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { verifyEmailConfig } = require('./config/email');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5174',
  credentials: true
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to API routes
app.use('/api/', limiter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Stratigo Email API is running',
    timestamp: new Date().toISOString()
  });
});

// Import routes
const contactRoute = require('./routes/contact');
const quoteRoute = require('./routes/quote');

// Use routes
app.use('/api/contact', contactRoute);
app.use('/api/quote', quoteRoute);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const startServer = async () => {
  try {
    // Verify email configuration
    const emailVerified = await verifyEmailConfig();
    
    if (!emailVerified) {
      console.warn('⚠️  Server starting without email configuration. Please set EMAIL_USER and EMAIL_PASSWORD in .env file.');
    }
    
    app.listen(PORT, () => {
      console.log('');
      console.log('='.repeat(50));
      console.log(`🚀 Stratigo Email API Server Running`);
      console.log(`📡 Port: ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`✉️  Email: ${emailVerified ? 'Configured ✅' : 'Not Configured ⚠️'}`);
      console.log('='.repeat(50));
      console.log('');
      console.log('📬 Endpoints:');
      console.log(`   POST http://localhost:${PORT}/api/contact`);
      console.log(`   POST http://localhost:${PORT}/api/quote`);
      console.log(`   GET  http://localhost:${PORT}/api/health`);
      console.log('');
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('❌ Unhandled Promise Rejection:', err);
  // Close server & exit process
  process.exit(1);
});

// Start the server
startServer();

module.exports = app;

