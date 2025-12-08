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
    else if (contactForm.message.length > 2000) errors.message = "Message must not exceed 2000 characters";
    if (!contactForm.consent) errors.consent = "You must agree to be contacted";
    
    return errors;
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const errors = validateContactForm();
    
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      return;
    }
    
    // Submit form to backend API
    try {
      // Convert file to base64 if exists
      let fileData = null;
      if (contactForm.file) {
        const reader = new FileReader();
        fileData = await new Promise((resolve, reject) => {
          reader.onload = () => resolve({
            name: contactForm.file.name,
            type: contactForm.file.type,
            size: contactForm.file.size,
            data: reader.result.split(',')[1] // Remove data:type;base64, prefix
          });
          reader.onerror = reject;
          reader.readAsDataURL(contactForm.file);
        });
      }

      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: contactForm.fullName,
          company: contactForm.company,
          email: contactForm.email,
          phone: contactForm.phone,
          website: contactForm.website,
          helpType: contactForm.helpType,
          message: contactForm.message,
          consent: contactForm.consent,
          file: fileData
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message
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
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to send your message. Please try again."
        });
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send your message. Please try again or email us directly at hello@stratigo.io"
      });
    }
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

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    const errors = validateQuoteForm();
    
    if (Object.keys(errors).length > 0) {
      setQuoteErrors(errors);
      return;
    }
    
    // Submit form to backend API
    try {
      // Convert file to base64 if exists
      let fileData = null;
      if (quoteForm.file) {
        const reader = new FileReader();
        fileData = await new Promise((resolve, reject) => {
          reader.onload = () => resolve({
            name: quoteForm.file.name,
            type: quoteForm.file.type,
            size: quoteForm.file.size,
            data: reader.result.split(',')[1] // Remove data:type;base64, prefix
          });
          reader.onerror = reject;
          reader.readAsDataURL(quoteForm.file);
        });
      }

      const response = await fetch('http://localhost:3001/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...quoteForm, file: fileData }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message
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
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit your quote request. Please try again."
        });
      }
    } catch (error) {
      console.error("Quote form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to submit your quote request. Please try again or email us directly at hello@stratigo.io"
      });
    }
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
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left text-white">
              <div className="mb-6">
                <Heading level={1} className="text-white text-left text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
                  Get in Touch
                </Heading>
                <p className="text-white text-left text-lg md:text-xl font-medium text-white/90">
                  Ready to grow your business?
                </p>
              </div>
              
              <Text className="text-white text-left text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                Contact us for a consultation or request a detailed quote for your project. We're here to help you succeed.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setActiveForm("contact")}
                  className="bg-gradient-to-r from-electric to-blue-600 hover:from-electric/90 hover:to-blue-600/90 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-electric/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Contact Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button
                  onClick={() => setActiveForm("quote")}
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
                >
                  Get a Quote
                </button>
              </div>
            </div>
            
            {/* Right Side - Contact Info Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Contact Info 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-lg font-bold text-white mb-2">Email Us</div>
                <div className="text-white/80 text-sm">hello@stratigo.io</div>
              </div>

              {/* Contact Info 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-lg font-bold text-white mb-2">Quick Response</div>
                <div className="text-white/80 text-sm">Within 24 hours</div>
              </div>

              {/* Contact Info 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-lg font-bold text-white mb-2">Free Consultation</div>
                <div className="text-white/80 text-sm">30-min strategy call</div>
              </div>

              {/* Contact Info 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-lg font-bold text-white mb-2">Expert Support</div>
                <div className="text-white/80 text-sm">Dedicated team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Selection */}
      <Section variant="content" className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-electric/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Form Tabs */}
            <div className="flex justify-center mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-white/50 shadow-lg">
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      setActiveForm("contact");
                      setSubmitStatus(null);
                    }}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      activeForm === "contact"
                        ? "bg-gradient-to-r from-electric to-blue-600 text-white shadow-lg transform scale-105"
                        : "text-gray-700 hover:text-electric hover:bg-white/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Contact Us
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setActiveForm("quote");
                      setSubmitStatus(null);
                    }}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      activeForm === "quote"
                        ? "bg-gradient-to-r from-electric to-blue-600 text-white shadow-lg transform scale-105"
                        : "text-gray-700 hover:text-electric hover:bg-white/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      Get a Quote
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {activeForm === "contact" && (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric/10 to-blue-400/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-electric/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-block mb-6">
                      <span className="px-4 py-2 bg-electric/10 text-electric font-semibold rounded-full text-sm uppercase tracking-wider">
                        Quick Contact
                      </span>
                    </div>
                    <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                      Contact Form
                    </Heading>
                    <Text className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Use this for general inquiries and quick callbacks. We'll get back to you within 24 hours.
                    </Text>
                  </div>

                <form onSubmit={handleContactSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={contactForm.fullName}
                      onChange={handleContactChange}
                      placeholder="Enter your full name"
                      className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-4 focus:ring-electric/20 focus:border-electric transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        contactErrors.fullName ? "border-red-500 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    {contactErrors.fullName && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {contactErrors.fullName}
                      </p>
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
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleContactChange}
                      placeholder="your.email@company.com"
                      className={`w-full px-6 py-4 border-2 rounded-xl focus:ring-4 focus:ring-electric/20 focus:border-electric transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                        contactErrors.email ? "border-red-500 bg-red-50/50" : "border-gray-200 hover:border-gray-300"
                      }`}
                    />
                    {contactErrors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {contactErrors.email}
                      </p>
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
                      Message <span className="text-red-500">*</span>
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

                  {/* Consent and Submit Button */}
                  <div className="flex items-start gap-4 pt-6">
                    <div className="flex-1">
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
                        <p className="mt-1 text-sm text-red-500 ml-7">{contactErrors.consent}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-electric to-blue-600 hover:from-electric/90 hover:to-blue-600/90 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-electric/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-sm whitespace-nowrap"
                    >
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </button>
                  </div>
                </form>
                </div>
              </div>
            )}

            {/* Quote Form */}
            {activeForm === "quote" && (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 md:p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-electric/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-electric/10 to-blue-400/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-block mb-6">
                      <span className="px-4 py-2 bg-blue-400/10 text-blue-600 font-semibold rounded-full text-sm uppercase tracking-wider">
                        Project Quote
                      </span>
                    </div>
                    <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                      Get a Quote
                    </Heading>
                    <Text className="text-xl text-gray-600 max-w-2xl mx-auto">
                      Detailed project intake for accurate scoping and estimating. We'll review your requirements and provide a comprehensive quote within one business day.
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

                      {/* Consent and Submit Button */}
                      <div className="flex items-start gap-4 pt-6">
                        <div className="flex-1">
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
                            <p className="mt-1 text-sm text-red-500 ml-7">{quoteErrors.consent}</p>
                          )}
                        </div>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-blue-600 to-electric hover:from-blue-600/90 hover:to-electric/90 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-sm whitespace-nowrap"
                        >
                          <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          Request Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                </div>
              </div>
            )}

            {/* Success Message */}
            {submitStatus && (
              <div className={`mt-8 p-6 rounded-2xl border-2 shadow-lg backdrop-blur-sm ${
                submitStatus.type === "success" 
                  ? "bg-gradient-to-r from-green-50 to-green-100 border-green-200" 
                  : "bg-gradient-to-r from-red-50 to-red-100 border-red-200"
              }`}>
                <div className="flex items-center justify-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    submitStatus.type === "success" ? "bg-green-500" : "bg-red-500"
                  }`}>
                    {submitStatus.type === "success" ? (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <p className={`font-semibold text-base ${
                    submitStatus.type === "success" ? "text-green-800" : "text-red-800"
                  }`}>
                    {submitStatus.message}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
