import React, { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import { Helmet } from "react-helmet";
import { buildApiUrl } from "../config/api";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const planParam = searchParams.get("plan") || "standard";
  const billingParam = searchParams.get("billing") || "monthly";

  // Force scroll to top when component mounts - multiple attempts to ensure it works
  useEffect(() => {
    // Immediate scroll - multiple methods
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force scroll on next frame
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });
    
    // One more attempt after a brief delay
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
    
    return () => clearTimeout(timeout);
  }, [planParam, billingParam]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: ""
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Pricing data
  const plans = {
    standard: {
      name: "Standard",
      monthly: { price: 59, setup: 0 },
      annual: { price: 649, setup: 0, savings: 59 }
    },
    premium: {
      name: "Premium", 
      monthly: { price: 99, setup: 0 },
      annual: { price: 1049, setup: 0, savings: 139 }
    },
    pro: {
      name: "Pro",
      monthly: { price: 149, setup: 0 },
      annual: { price: 1599, setup: 0, savings: 189 }
    }
  };

  const selectedPlan = plans[planParam];
  const pricing = selectedPlan[billingParam];
  const total = pricing.price + pricing.setup;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setProcessing(true);
    
    try {
      const response = await fetch(buildApiUrl('invoice'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          plan: planParam,
          billing: billingParam
        }),
      });

      // Check if response is ok before parsing JSON
      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = 'Failed to process invoice request.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // If response is not JSON, use status text
          errorMessage = `Server error: ${response.status} ${response.statusText}`;
        }
        setErrors({ submit: errorMessage });
        setProcessing(false);
        return;
      }

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
      } else {
        setErrors({ submit: data.message || 'Failed to process invoice request. Please try again.' });
      }
    } catch (error) {
      console.error('Invoice request error:', error);
      // More specific error messages
      if (error.message.includes('Failed to fetch')) {
        setErrors({ 
          submit: 'Cannot connect to server. Please make sure the backend server is running on port 3001.' 
        });
      } else {
        setErrors({ submit: `An error occurred: ${error.message}. Please try again.` });
      }
    } finally {
      setProcessing(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request Invoice - Stratigo Hosting</title>
        <meta name="description" content="Request an invoice for your Stratigo Hosting plan. We'll send it via email within 24 hours." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Invoice Request Banner */}
      <div className="bg-gradient-to-r from-electric to-blue-600 text-white py-3">
        <Container>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <Text className="text-white font-medium">Request Invoice - We'll send it via email</Text>
          </div>
        </Container>
      </div>

      <Section variant="content" className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Success Message */}
            {success && (
              <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-900 mb-2">Invoice Request Received!</h3>
                    <p className="text-green-800 mb-4">
                      Thank you for your request. We've received your invoice request and will send you an invoice via email within 24 hours. 
                      You'll receive it at <strong>{formData.email}</strong>.
                    </p>
                    <div className="flex gap-3">
                      <Button variant="primary" onClick={() => navigate('/hosting')}>
                        Return to Hosting Plans
                      </Button>
                      <Button variant="secondary" onClick={() => window.location.reload()}>
                        Request Another Invoice
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!success && (
              <>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Information Banner */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-electric rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-navy mb-2">Request Invoice via Email</h3>
                        <p className="text-gray-700">
                          Simply provide your name and email address. We'll send you an invoice via Wise within 24 hours. 
                          Once you receive it, you can complete payment through the invoice link.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                    <Heading level={2} className="text-2xl font-bold text-navy mb-6">
                      Your Information
                    </Heading>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Jair Rivera"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            errors.fullName ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="bookings@stratigo.io"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        <p className="mt-2 text-sm text-gray-600">
                          We'll send the invoice to this email address
                        </p>
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Error Message */}
                  {errors.submit && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="text-red-800">{errors.submit}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
                    <button
                      type="submit"
                      disabled={processing}
                      className="w-full bg-gradient-to-r from-electric to-blue-600 hover:from-electric/90 hover:to-blue-600/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-electric/25 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg"
                    >
                      {processing ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing Request...</span>
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          <span>Request Invoice - ${total.toFixed(2)}</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </span>
                      )}
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-3 flex items-center justify-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Invoice will be sent via email within 24 hours
                    </p>
                  </div>
                </form>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl border-2 border-gray-200 p-8 sticky top-8">
                  <div className="flex items-center justify-between mb-6">
                    <Heading level={2} className="text-2xl font-bold text-navy">
                      Order Summary
                    </Heading>
                    <div className="w-10 h-10 rounded-full bg-electric/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    {/* Plan Selection */}
                    <div className="p-5 bg-gradient-to-br from-electric/10 to-blue-50 rounded-xl border border-electric/20">
                      <div className="font-bold text-navy text-xl mb-1">{selectedPlan.name} Plan</div>
                      <div className="text-gray-600 text-sm capitalize font-medium mb-3">{billingParam} Billing</div>
                      <div className="pt-3 border-t border-electric/20">
                        <div className="flex items-center gap-2 text-sm text-green-700 font-medium">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Active Immediately</span>
                        </div>
                      </div>
                    </div>

                    {/* Pricing Breakdown */}
                    <div className="space-y-3 py-4 border-t-2 border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-bold text-navy text-lg">${pricing.price.toFixed(2)}</span>
                      </div>
                      
                      {pricing.setup > 0 && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Setup Fee</span>
                          <span className="font-semibold text-navy">${pricing.setup.toFixed(2)}</span>
                        </div>
                      )}

                      {pricing.savings && (
                        <div className="flex justify-between items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-green-700">Annual Savings</span>
                          </div>
                          <span className="font-bold text-green-600 text-lg">-${pricing.savings.toFixed(2)}</span>
                        </div>
                      )}
                    </div>

                    {/* Total Due */}
                    <div className="bg-gradient-to-r from-electric via-blue-600 to-blue-700 rounded-xl p-6 text-white mt-6 shadow-lg">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-bold text-lg">Total Due</span>
                        <span className="font-bold text-3xl">${total.toFixed(2)}</span>
                      </div>
                      <div className="pt-3 border-t border-white/20">
                        <p className="text-sm text-white/90 text-center font-medium">
                          Billed {billingParam === 'monthly' ? 'monthly' : 'annually'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Security Badges */}
                  <div className="space-y-2 pt-6 border-t-2 border-gray-200">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">SSL Secured</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">30-Day Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200 hover:shadow-md transition-shadow">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">24/7 Support</span>
                    </div>
                  </div>

                  {/* Contact Support */}
                  <div className="mt-6 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-start gap-3 mb-3">
                      <svg className="w-5 h-5 text-electric flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-sm font-bold text-gray-900">Need Help?</div>
                        <div className="text-xs text-gray-600">Our support team is ready to assist</div>
                      </div>
                    </div>
                    <a href="mailto:bookings@stratigo.io" className="text-electric hover:text-blue-700 text-sm font-semibold inline-flex items-center gap-1">
                      bookings@stratigo.io
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
              </>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Checkout;

