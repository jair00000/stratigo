import React, { useState } from "react";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("contact"); // 'contact' or 'quote'
  
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    helpType: "",
    message: "",
    consent: false,
    file: null
  });

  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    // About You
    fullName: "",
    company: "",
    role: "",
    email: "",
    phone: "",
    location: "",
    
    // What You Need
    serviceType: [],
    projectType: "",
    projectSummary: "",
    keyFeatures: [],
    currentAssets: [],
    integrations: "",
    
    // Hosting & Security
    needsHosting: "",
    traffic: "",
    dataSensitivity: "",
    backupPreference: "",
    
    // Budget & Timeline
    budget: "",
    startDate: "",
    launchWindow: "",
    
    // Final
    file: null,
    hearAbout: "",
    consent: false
  });

  const [contactErrors, setContactErrors] = useState({});
  const [quoteErrors, setQuoteErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  // Validation functions
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateURL = (url) => {
    if (!url) return true; // Optional field
    return /^https?:\/\/.+\..+/.test(url);
  };

  const validatePhone = (phone) => {
    if (!phone) return true; // Optional field
    return /^[\d\s+()-]+$/.test(phone);
  };

  // Contact Form Handlers
  const handleContactChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === "checkbox") {
      setContactForm(prev => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      const file = files[0];
      if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
        setContactForm(prev => ({ ...prev, [name]: file }));
      } else {
        alert("File size must be under 10MB");
      }
    } else {
      setContactForm(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
    if (contactErrors[name]) {
      setContactErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateContactForm = () => {
    const errors = {};
    
    if (!contactForm.fullName.trim()) errors.fullName = "Full name is required";
    if (!contactForm.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(contactForm.email)) errors.email = "Invalid email format";
    if (contactForm.website && !validateURL(contactForm.website)) errors.website = "Invalid URL format";
    if (contactForm.phone && !validatePhone(contactForm.phone)) errors.phone = "Invalid phone format";
    if (!contactForm.helpType) errors.helpType = "Please select a service type";
    if (!contactForm.message.trim()) errors.message = "Message is required";
    else if (contactForm.message.length < 300) errors.message = "Message must be at least 300 characters";
    else if (contactForm.message.length > 800) errors.message = "Message must not exceed 800 characters";
    if (!contactForm.consent) errors.consent = "You must agree to be contacted";
    
    return errors;
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const errors = validateContactForm();
    
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }
    
    // Submit form (integrate with your backend)
    console.log("Contact Form Submitted:", contactForm);
    setSubmitStatus({
      type: "success",
      message: "Thanks for contacting Stratigo. Your request has been received and our team will respond within one business day."
    });
    
    // Reset form
    setContactForm({
      fullName: "",
      company: "",
      email: "",
      phone: "",
      website: "",
      helpType: "",
      message: "",
      consent: false,
      file: null
    });
    setContactErrors({});
  };

  // Quote Form Handlers
  const handleQuoteChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === "checkbox") {
      if (name.startsWith("serviceType_")) {
        const service = name.replace("serviceType_", "");
        setQuoteForm(prev => ({
          ...prev,
          serviceType: checked 
            ? [...prev.serviceType, service]
            : prev.serviceType.filter(s => s !== service)
        }));
      } else if (name.startsWith("keyFeatures_")) {
        const feature = name.replace("keyFeatures_", "");
        setQuoteForm(prev => ({
          ...prev,
          keyFeatures: checked
            ? [...prev.keyFeatures, feature]
            : prev.keyFeatures.filter(f => f !== feature)
        }));
      } else if (name.startsWith("currentAssets_")) {
        const asset = name.replace("currentAssets_", "");
        setQuoteForm(prev => ({
          ...prev,
          currentAssets: checked
            ? [...prev.currentAssets, asset]
            : prev.currentAssets.filter(a => a !== asset)
        }));
      } else {
        setQuoteForm(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === "file") {
      const file = files[0];
      if (file && file.size <= 20 * 1024 * 1024) { // 20MB limit
        setQuoteForm(prev => ({ ...prev, [name]: file }));
      } else {
        alert("File size must be under 20MB");
      }
    } else {
      setQuoteForm(prev => ({ ...prev, [name]: value }));
    }
    
    // Clear error for this field
    if (quoteErrors[name]) {
      setQuoteErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateQuoteForm = () => {
    const errors = {};
    
    // About You
    if (!quoteForm.fullName.trim()) errors.fullName = "Full name is required";
    if (!quoteForm.company.trim()) errors.company = "Company is required";
    if (!quoteForm.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(quoteForm.email)) errors.email = "Invalid email format";
    if (quoteForm.phone && !validatePhone(quoteForm.phone)) errors.phone = "Invalid phone format";
    
    // What You Need
    if (quoteForm.serviceType.length === 0) errors.serviceType = "Select at least one service type";
    if (!quoteForm.projectSummary.trim()) errors.projectSummary = "Project summary is required";
    
    // Hosting & Security
    if (!quoteForm.needsHosting) errors.needsHosting = "Please indicate if you need hosting";
    
    // Budget & Timeline
    if (!quoteForm.budget) errors.budget = "Budget range is required";
    if (!quoteForm.launchWindow) errors.launchWindow = "Launch window is required";
    
    if (!quoteForm.consent) errors.consent = "You must agree to be contacted";
    
    return errors;
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const errors = validateQuoteForm();
    
    if (Object.keys(errors).length > 0) {
      setQuoteErrors(errors);
      return;
    }
    
    // Submit form (integrate with your backend)
    console.log("Quote Form Submitted:", quoteForm);
    setSubmitStatus({
      type: "success",
      message: "Thanks for requesting a quote. Our team will review your scope and email you next steps and an estimated timeline within one business day."
    });
    
    // Reset form
    setQuoteForm({
      fullName: "",
      company: "",
      role: "",
      email: "",
      phone: "",
      location: "",
      serviceType: [],
      projectType: "",
      projectSummary: "",
      keyFeatures: [],
      currentAssets: [],
      integrations: "",
      needsHosting: "",
      traffic: "",
      dataSensitivity: "",
      backupPreference: "",
      budget: "",
      startDate: "",
      launchWindow: "",
      file: null,
      hearAbout: "",
      consent: false
    });
    setQuoteErrors({});
  };

  return (
    <>
      <Helmet>
        <title>Contact Stratigo | Get in Touch for Digital Solutions</title>
        <meta 
          name="description" 
          content="Contact Stratigo for marketing, software, and hosting solutions. Get a quote or schedule a consultation with our team." 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
        
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-12">
            <Heading level={1} variant="hero" className="text-white text-center text-6xl md:text-7xl mb-8">
              Get in Touch
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-xl leading-relaxed">
              Ready to grow your business with strategic digital solutions? Contact us for a consultation or request a detailed quote for your project.
            </Text>
          </div>
        </div>
      </section>

      {/* Form Selection */}
      <Section variant="content" className="bg-gray-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-center gap-4 mb-12">
              <button
                onClick={() => {
                  setActiveForm("contact");
                  setSubmitStatus(null);
                }}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  activeForm === "contact"
                    ? "bg-electric text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setActiveForm("quote");
                  setSubmitStatus(null);
                }}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${
                  activeForm === "quote"
                    ? "bg-electric text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                Get a Quote
              </button>
            </div>

            {/* Success Message */}
            {submitStatus && (
              <div className={`mb-8 p-6 rounded-lg ${
                submitStatus.type === "success" ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
              }`}>
                <p className={`text-center font-medium ${
                  submitStatus.type === "success" ? "text-green-800" : "text-red-800"
                }`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            {/* Contact Form */}
            {activeForm === "contact" && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
                <div className="text-center mb-8">
                  <Heading level={2} className="text-3xl font-bold text-navy mb-4">
                    Contact Form
                  </Heading>
                  <Text className="text-gray-600">
                    Use this for general inquiries and quick callbacks
                  </Text>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={contactForm.fullName}
                      onChange={handleContactChange}
                      placeholder="Jair Rivera"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                        contactErrors.fullName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {contactErrors.fullName && (
                      <p className="mt-1 text-sm text-red-500">{contactErrors.fullName}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={handleContactChange}
                      placeholder="Stratigo Window Tinting"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      placeholder="stratigo@company.com"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                        contactErrors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {contactErrors.email && (
                      <p className="mt-1 text-sm text-red-500">{contactErrors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone (optional, international)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={contactForm.phone}
                      onChange={handleContactChange}
                      placeholder="+1 312 555 0199"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                        contactErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {contactErrors.phone && (
                      <p className="mt-1 text-sm text-red-500">{contactErrors.phone}</p>
                    )}
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Website / Project URL (optional)
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={contactForm.website}
                      onChange={handleContactChange}
                      placeholder="https://stratigo.io"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                        contactErrors.website ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {contactErrors.website && (
                      <p className="mt-1 text-sm text-red-500">{contactErrors.website}</p>
                    )}
                  </div>

                  {/* Help Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      How can we help? <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="helpType"
                      value={contactForm.helpType}
                      onChange={handleContactChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                        contactErrors.helpType ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="marketing">Marketing</option>
                      <option value="software">Software (Web/App/CRM)</option>
                      <option value="hosting">Hosting</option>
                      <option value="multiple">Multiple</option>
                      <option value="other">Other</option>
                    </select>
                    {contactErrors.helpType && (
                      <p className="mt-1 text-sm text-red-500">{contactErrors.helpType}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message <span className="text-red-500">*</span> (300-800 characters)
                    </label>
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      placeholder="Tell us about your goals, challenges, and timeline."
                      rows="6"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                        contactErrors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    <div className="flex justify-between mt-1">
                      {contactErrors.message && (
                        <p className="text-sm text-red-500">{contactErrors.message}</p>
                      )}
                      <p className="text-sm text-gray-500 ml-auto">
                        {contactForm.message.length} characters
                      </p>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      File Upload (optional)
                    </label>
                    <input
                      type="file"
                      name="file"
                      onChange={handleContactChange}
                      accept=".pdf,.docx,.doc,.png,.jpg,.jpeg"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Accept: PDF, DOCX, PNG/JPG (≤10MB)
                    </p>
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={contactForm.consent}
                        onChange={handleContactChange}
                        className="mt-1 mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        I agree to be contacted and accept the <a href="/privacy" className="text-electric hover:underline">Privacy Policy</a>. <span className="text-red-500">*</span>
                      </span>
                    </label>
                    {contactErrors.consent && (
                      <p className="mt-1 text-sm text-red-500">{contactErrors.consent}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button type="submit" variant="primary" className="w-full text-lg py-4">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Quote Form */}
            {activeForm === "quote" && (
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
                <div className="text-center mb-8">
                  <Heading level={2} className="text-3xl font-bold text-navy mb-4">
                    Get a Quote
                  </Heading>
                  <Text className="text-gray-600">
                    Project intake for scoping and estimating
                  </Text>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-8">
                  {/* 1) About You */}
                  <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-2xl font-bold text-navy mb-6">1) About You</h3>
                    
                    <div className="space-y-6">
                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={quoteForm.fullName}
                          onChange={handleQuoteChange}
                          placeholder="Jair Rivera"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            quoteErrors.fullName ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {quoteErrors.fullName && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.fullName}</p>
                        )}
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company / Organization <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={quoteForm.company}
                          onChange={handleQuoteChange}
                          placeholder="Stratigo Inc."
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            quoteErrors.company ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {quoteErrors.company && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.company}</p>
                        )}
                      </div>

                      {/* Role */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Role (optional)
                        </label>
                        <select
                          name="role"
                          value={quoteForm.role}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        >
                          <option value="">Select your role</option>
                          <option value="owner">Owner</option>
                          <option value="founder">Founder</option>
                          <option value="ops">Operations</option>
                          <option value="marketing">Marketing</option>
                          <option value="it">IT</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={quoteForm.email}
                          onChange={handleQuoteChange}
                          placeholder="stratigo@company.com"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            quoteErrors.email ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {quoteErrors.email && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone (optional)
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={quoteForm.phone}
                          onChange={handleQuoteChange}
                          placeholder="+1 312 555 0199"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            quoteErrors.phone ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {quoteErrors.phone && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.phone}</p>
                        )}
                      </div>

                      {/* Business Location */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Business Location (city/state or country)
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={quoteForm.location}
                          onChange={handleQuoteChange}
                          placeholder="Chicago, IL or United States"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 2) What You Need */}
                  <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-2xl font-bold text-navy mb-6">2) What You Need</h3>
                    
                    <div className="space-y-6">
                      {/* Service Type */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Service Type <span className="text-red-500">*</span> (select all that apply)
                        </label>
                        <div className="space-y-2">
                          {["Marketing (SEO/Content/Local)", "Web Development", "Mobile App", "CRM", "Hosting", "Other"].map((service) => (
                            <label key={service} className="flex items-center">
                              <input
                                type="checkbox"
                                name={`serviceType_${service}`}
                                checked={quoteForm.serviceType.includes(service)}
                                onChange={handleQuoteChange}
                                className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300 rounded"
                              />
                              <span className="text-gray-700">{service}</span>
                            </label>
                          ))}
                        </div>
                        {quoteErrors.serviceType && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.serviceType}</p>
                        )}
                      </div>

                      {/* Project Type (contextual) */}
                      {(quoteForm.serviceType.includes("Web Development") || 
                        quoteForm.serviceType.includes("Mobile App") || 
                        quoteForm.serviceType.includes("CRM")) && (
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-3">
                            Project Type
                          </label>
                          <div className="space-y-2">
                            {quoteForm.serviceType.includes("Web Development") && (
                              <>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="Corporate Site"
                                    checked={quoteForm.projectType === "Corporate Site"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">Corporate Site</span>
                                </label>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="eCommerce"
                                    checked={quoteForm.projectType === "eCommerce"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">eCommerce</span>
                                </label>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="Web App"
                                    checked={quoteForm.projectType === "Web App"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">Web App</span>
                                </label>
                              </>
                            )}
                            {quoteForm.serviceType.includes("Mobile App") && (
                              <>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="iOS"
                                    checked={quoteForm.projectType === "iOS"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">iOS</span>
                                </label>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="Android"
                                    checked={quoteForm.projectType === "Android"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">Android</span>
                                </label>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="Cross-platform"
                                    checked={quoteForm.projectType === "Cross-platform"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">Cross-platform</span>
                                </label>
                              </>
                            )}
                            {quoteForm.serviceType.includes("CRM") && (
                              <>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="New CRM"
                                    checked={quoteForm.projectType === "New CRM"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">New CRM</span>
                                </label>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="Migrate/Integrate"
                                    checked={quoteForm.projectType === "Migrate/Integrate"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">Migrate/Integrate</span>
                                </label>
                                <label className="flex items-center">
                                  <input
                                    type="radio"
                                    name="projectType"
                                    value="Automation"
                                    checked={quoteForm.projectType === "Automation"}
                                    onChange={handleQuoteChange}
                                    className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                                  />
                                  <span className="text-gray-700">Automation</span>
                                </label>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Project Summary */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Summary <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="projectSummary"
                          value={quoteForm.projectSummary}
                          onChange={handleQuoteChange}
                          placeholder="Briefly describe your goals, features, and audience."
                          rows="5"
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            quoteErrors.projectSummary ? "border-red-500" : "border-gray-300"
                          }`}
                        />
                        {quoteErrors.projectSummary && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.projectSummary}</p>
                        )}
                      </div>

                      {/* Key Features */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Key Features (select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {["Online Booking", "Portfolio/Case Studies", "Payments", "User Accounts", "Admin Dashboard", "API Integration", "Analytics", "Multilingual", "Other"].map((feature) => (
                            <label key={feature} className="flex items-center">
                              <input
                                type="checkbox"
                                name={`keyFeatures_${feature}`}
                                checked={quoteForm.keyFeatures.includes(feature)}
                                onChange={handleQuoteChange}
                                className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300 rounded"
                              />
                              <span className="text-gray-700">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Current Assets */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Current Assets (select all that apply)
                        </label>
                        <div className="space-y-2">
                          {["Existing Website", "Branding/Logo", "Copy/Content", "Sitemaps/Wireframes", "None yet"].map((asset) => (
                            <label key={asset} className="flex items-center">
                              <input
                                type="checkbox"
                                name={`currentAssets_${asset}`}
                                checked={quoteForm.currentAssets.includes(asset)}
                                onChange={handleQuoteChange}
                                className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300 rounded"
                              />
                              <span className="text-gray-700">{asset}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Integrations */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Integrations Needed (optional)
                        </label>
                        <input
                          type="text"
                          name="integrations"
                          value={quoteForm.integrations}
                          onChange={handleQuoteChange}
                          placeholder="e.g., Google Analytics, CRM, Stripe, QuickBooks"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 3) Hosting & Security */}
                  <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-2xl font-bold text-navy mb-6">3) Hosting & Security</h3>
                    
                    <div className="space-y-6">
                      {/* Needs Hosting */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Do you need hosting with us? <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2">
                          {["Yes", "No", "Unsure"].map((option) => (
                            <label key={option} className="flex items-center">
                              <input
                                type="radio"
                                name="needsHosting"
                                value={option}
                                checked={quoteForm.needsHosting === option}
                                onChange={handleQuoteChange}
                                className="mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300"
                              />
                              <span className="text-gray-700">{option}</span>
                            </label>
                          ))}
                        </div>
                        {quoteErrors.needsHosting && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.needsHosting}</p>
                        )}
                      </div>

                      {/* Traffic */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Estimated Monthly Traffic (optional)
                        </label>
                        <select
                          name="traffic"
                          value={quoteForm.traffic}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        >
                          <option value="">Select traffic range</option>
                          <option value="Under 5k">Under 5k</option>
                          <option value="5–25k">5–25k</option>
                          <option value="25–100k">25–100k</option>
                          <option value="100k+">100k+</option>
                        </select>
                      </div>

                      {/* Data Sensitivity */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Data Sensitivity (optional)
                        </label>
                        <select
                          name="dataSensitivity"
                          value={quoteForm.dataSensitivity}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        >
                          <option value="">Select data sensitivity level</option>
                          <option value="Standard">Standard</option>
                          <option value="Contains PII">Contains PII</option>
                          <option value="Industry-regulated">Industry-regulated</option>
                        </select>
                      </div>

                      {/* Backup Preference */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Backup Preference (optional)
                        </label>
                        <select
                          name="backupPreference"
                          value={quoteForm.backupPreference}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        >
                          <option value="">Select backup preference</option>
                          <option value="Weekly (default)">Weekly (default)</option>
                          <option value="Custom">Custom</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* 4) Budget & Timeline */}
                  <div className="border-b border-gray-200 pb-8">
                    <h3 className="text-2xl font-bold text-navy mb-6">4) Budget & Timeline</h3>
                    
                    <div className="space-y-6">
                      {/* Budget Range */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Budget Range (USD) <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="budget"
                          value={quoteForm.budget}
                          onChange={handleQuoteChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            quoteErrors.budget ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select budget range</option>
                          <option value="≤ $2k">≤ $2k</option>
                          <option value="$2k–5k">$2k–5k</option>
                          <option value="$5k–10k">$5k–10k</option>
                          <option value="$10k–25k">$10k–25k</option>
                          <option value="$25k+">$25k+</option>
                          <option value="Not sure">Not sure</option>
                        </select>
                        {quoteErrors.budget && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.budget}</p>
                        )}
                      </div>

                      {/* Target Start Date */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Target Start Date (optional)
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={quoteForm.startDate}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        />
                      </div>

                      {/* Ideal Launch Window */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Ideal Launch Window <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="launchWindow"
                          value={quoteForm.launchWindow}
                          onChange={handleQuoteChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent ${
                            quoteErrors.launchWindow ? "border-red-500" : "border-gray-300"
                          }`}
                        >
                          <option value="">Select launch window</option>
                          <option value="2–4 weeks">2–4 weeks</option>
                          <option value="4–8 weeks">4–8 weeks</option>
                          <option value="8–12 weeks">8–12 weeks</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                        {quoteErrors.launchWindow && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.launchWindow}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* 5) Attachments & Final */}
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-6">5) Attachments & Final</h3>
                    
                    <div className="space-y-6">
                      {/* File Upload */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Brief/Specs (optional)
                        </label>
                        <input
                          type="file"
                          name="file"
                          onChange={handleQuoteChange}
                          accept=".pdf,.docx,.doc,.zip"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        />
                        <p className="mt-1 text-sm text-gray-500">
                          PDF/DOCX/ZIP ≤20MB
                        </p>
                      </div>

                      {/* How did you hear about us */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          How did you hear about us? (optional)
                        </label>
                        <select
                          name="hearAbout"
                          value={quoteForm.hearAbout}
                          onChange={handleQuoteChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric focus:border-transparent"
                        >
                          <option value="">Select an option</option>
                          <option value="Referral">Referral</option>
                          <option value="Google">Google</option>
                          <option value="Social">Social Media</option>
                          <option value="Directory">Directory</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Consent */}
                      <div>
                        <label className="flex items-start">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={quoteForm.consent}
                            onChange={handleQuoteChange}
                            className="mt-1 mr-3 h-4 w-4 text-electric focus:ring-electric border-gray-300 rounded"
                          />
                          <span className="text-sm text-gray-700">
                            I agree to be contacted and accept the <a href="/privacy" className="text-electric hover:underline">Privacy Policy</a>. <span className="text-red-500">*</span>
                          </span>
                        </label>
                        {quoteErrors.consent && (
                          <p className="mt-1 text-sm text-red-500">{quoteErrors.consent}</p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button type="submit" variant="primary" className="w-full text-lg py-4">
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}
    </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
