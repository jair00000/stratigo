import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import { Helmet } from "react-helmet";

const Checkout = () => {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan") || "standard";
  const billingParam = searchParams.get("billing") || "monthly";

  const [formData, setFormData] = useState({
    // Contact Information
    fullName: "",
    email: "",
    phone: "",
    company: "",
    
    // Billing Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    
    // Payment Method
    paymentMethod: "card",
    
    // Card Details
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    
    // Terms
    agreeToTerms: false
  });

  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

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

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16));
    setFormData(prev => ({ ...prev, cardNumber: formatted }));
  };

  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setFormData(prev => ({ ...prev, expiryDate: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Contact validation
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    // Billing address validation
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    
    // Payment validation
    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber.replace(/\s/g, '')) newErrors.cardNumber = "Card number is required";
      else if (formData.cardNumber.replace(/\s/g, '').length < 16) newErrors.cardNumber = "Invalid card number";
      if (!formData.cardName.trim()) newErrors.cardName = "Cardholder name is required";
      if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
      else if (formData.cvv.length < 3) newErrors.cvv = "Invalid CVV";
    }
    
    // Terms validation
    if (!formData.agreeToTerms) newErrors.agreeToTerms = "You must agree to the terms";
    
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
    
    // Simulate payment processing
    setTimeout(() => {
      console.log("Payment processed:", formData);
      alert("Payment processed successfully! (This is a demo)");
      setProcessing(false);
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Checkout - Stratigo Hosting</title>
        <meta name="description" content="Complete your Stratigo Hosting purchase securely" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Secure Checkout Banner */}
      <div className="bg-green-600 text-white py-3">
        <Container>
          <div className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <Text className="text-white font-medium">Secure Checkout - SSL Encrypted</Text>
          </div>
        </Container>
      </div>

      <Section variant="content" className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-electric text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <span className="ml-2 font-medium text-navy">Billing Info</span>
                  </div>
                  <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">2</div>
                    <span className="ml-2 text-gray-500">Payment</span>
                  </div>
                  <div className="w-16 h-0.5 bg-gray-300 mx-4"></div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center font-bold">3</div>
                    <span className="ml-2 text-gray-500">Confirm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                    <Heading level={2} className="text-2xl font-bold text-navy mb-6">
                      Contact Information
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
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="stratigo@company.com"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            errors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 312 555 0199"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            errors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company (optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Stratigo Inc."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                    <Heading level={2} className="text-2xl font-bold text-navy mb-6">
                      Billing Address
                    </Heading>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Street Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="123 Main Street"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            errors.address ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Chicago"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                              errors.city ? "border-red-500" : "border-gray-300"
                            }`}
                          />
                          {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            State <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            placeholder="IL"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                              errors.state ? "border-red-500" : "border-gray-300"
                            }`}
                          />
                          {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            ZIP Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            placeholder="60601"
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                              errors.zipCode ? "border-red-500" : "border-gray-300"
                            }`}
                          />
                          {errors.zipCode && <p className="mt-1 text-sm text-red-500">{errors.zipCode}</p>}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                          >
                            <option>United States</option>
                            <option>Canada</option>
                            <option>United Kingdom</option>
                            <option>Philippines</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                    <Heading level={2} className="text-2xl font-bold text-navy mb-6">
                      Payment Method
                    </Heading>
                    
                    <div className="space-y-6">
                      {/* Payment Type Selection */}
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, paymentMethod: "card" }))}
                          className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                            formData.paymentMethod === "card" 
                              ? "border-electric bg-blue-50" 
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                          </svg>
                          <span className="font-medium">Credit/Debit Card</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, paymentMethod: "bank" }))}
                          className={`p-4 border-2 rounded-lg flex items-center justify-center gap-2 transition-all ${
                            formData.paymentMethod === "bank" 
                              ? "border-electric bg-blue-50" 
                              : "border-gray-300 hover:border-gray-400"
                          }`}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                          </svg>
                          <span className="font-medium">Bank Transfer</span>
                        </button>
                      </div>

                      {formData.paymentMethod === "card" && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Card Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleCardNumberChange}
                              placeholder="1234 5678 9012 3456"
                              maxLength="19"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                                errors.cardNumber ? "border-red-500" : "border-gray-300"
                              }`}
                            />
                            {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
                          </div>

                          <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                              Cardholder Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              placeholder="JAIR RIVERA"
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                                errors.cardName ? "border-red-500" : "border-gray-300"
                              }`}
                            />
                            {errors.cardName && <p className="mt-1 text-sm text-red-500">{errors.cardName}</p>}
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Expiry Date <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleExpiryChange}
                                placeholder="MM/YY"
                                maxLength="5"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                                  errors.expiryDate ? "border-red-500" : "border-gray-300"
                                }`}
                              />
                              {errors.expiryDate && <p className="mt-1 text-sm text-red-500">{errors.expiryDate}</p>}
                            </div>

                            <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-2">
                                CVV <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={(e) => setFormData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '').slice(0, 4) }))}
                                placeholder="123"
                                maxLength="4"
                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                                  errors.cvv ? "border-red-500" : "border-gray-300"
                                }`}
                              />
                              {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
                            </div>
                          </div>
                        </div>
                      )}

                      {formData.paymentMethod === "bank" && (
                        <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
                          <Text className="text-blue-900 mb-3 font-medium">Bank Transfer Instructions:</Text>
                          <Text className="text-blue-800 text-sm">
                            After submitting your order, you will receive bank transfer details via email. Please complete the transfer within 24 hours to activate your service.
                          </Text>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-1 mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to the <Link to="/terms" className="text-electric hover:underline">Terms of Service</Link>, <Link to="/privacy" className="text-electric hover:underline">Privacy Policy</Link>, and authorize Stratigo to charge my payment method for the selected plan. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {errors.agreeToTerms && <p className="mt-2 text-sm text-red-500">{errors.agreeToTerms}</p>}
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full text-lg py-4"
                    disabled={processing}
                  >
                    {processing ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      `Complete Purchase - $${total.toFixed(2)}`
                    )}
                  </Button>
                </form>
              </div>

              {/* Order Summary Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 sticky top-8">
                  <Heading level={2} className="text-2xl font-bold text-navy mb-6">
                    Order Summary
                  </Heading>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-electric/10 rounded-lg">
                      <Text className="font-bold text-navy text-lg">{selectedPlan.name} Plan</Text>
                      <Text className="text-gray-600 text-sm capitalize">{billingParam} Billing</Text>
                    </div>

                    <div className="space-y-3 py-4 border-t border-gray-200">
                      <div className="flex justify-between">
                        <Text className="text-gray-600">Subtotal</Text>
                        <Text className="font-semibold text-navy">${pricing.price.toFixed(2)}</Text>
                      </div>
                      
                      {pricing.setup > 0 && (
                        <div className="flex justify-between">
                          <Text className="text-gray-600">Setup Fee</Text>
                          <Text className="font-semibold text-navy">${pricing.setup.toFixed(2)}</Text>
                        </div>
                      )}

                      {pricing.savings && (
                        <div className="flex justify-between text-green-600">
                          <Text className="font-medium">Annual Savings</Text>
                          <Text className="font-semibold">-${pricing.savings.toFixed(2)}</Text>
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between pt-4 border-t border-gray-200">
                      <Text className="font-bold text-navy text-lg">Total</Text>
                      <Text className="font-bold text-navy text-lg">${total.toFixed(2)}</Text>
                    </div>

                    <Text className="text-sm text-gray-500 text-center pt-2">
                      Billed {billingParam}
                    </Text>
                  </div>

                  {/* Security Badges */}
                  <div className="space-y-3 pt-6 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>SSL Secure Checkout</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Money-Back Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>24/7 Customer Support</span>
                    </div>
                  </div>

                  {/* Contact Support */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <Text className="text-sm text-gray-600 mb-2">Need help?</Text>
                    <a href="mailto:sales@stratigo.io" className="text-electric hover:underline text-sm font-medium">
                      sales@stratigo.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Checkout;

