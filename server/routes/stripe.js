const express = require('express');
const router = express.Router();
const Stripe = require('stripe');

// Initialize Stripe with secret key from environment
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * POST /api/stripe/create-payment-intent
 * Create a payment intent for checkout
 */
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'usd', plan, billing } = req.body;

    // Validate required fields
    if (!amount || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid amount'
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      metadata: {
        plan,
        billing,
        timestamp: new Date().toISOString()
      },
      description: `Stratigo ${plan} Plan - ${billing} billing`
    });

    console.log(`✅ Payment intent created: ${paymentIntent.id}`);

    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id
    });

  } catch (error) {
    console.error('❌ Payment intent creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create payment intent',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * POST /api/stripe/confirm-payment
 * Confirm payment with card details
 */
router.post('/confirm-payment', async (req, res) => {
  try {
    const { paymentIntentId, cardDetails, billingDetails } = req.body;

    // Validate required fields
    if (!paymentIntentId || !cardDetails) {
      return res.status(400).json({
        success: false,
        message: 'Payment intent ID and card details are required'
      });
    }

    // Create payment method
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: cardDetails.number,
        exp_month: cardDetails.exp_month,
        exp_year: cardDetails.exp_year,
        cvc: cardDetails.cvc
      },
      billing_details: billingDetails
    });

    // Confirm payment intent
    const confirmedIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
      payment_method: paymentMethod.id
    });

    console.log(`✅ Payment confirmed: ${confirmedIntent.id}`);

    res.status(200).json({
      success: true,
      paymentIntent: confirmedIntent
    });

  } catch (error) {
    console.error('❌ Payment confirmation error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to confirm payment',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * POST /api/stripe/webhook
 * Handle Stripe webhook events
 */
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    // Verify webhook signature
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Handle the event
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log(`✅ Payment succeeded: ${paymentIntent.id}`);
        // TODO: Send confirmation email to customer
        // TODO: Update database with subscription
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log(`❌ Payment failed: ${failedPayment.id}`);
        // TODO: Send failure notification
        break;

      default:
        console.log(`⚠️  Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });

  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

module.exports = router;

