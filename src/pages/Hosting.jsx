import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";

const Hosting = () => {
  const [standardAnnual, setStandardAnnual] = useState(false);
  const [premiumAnnual, setPremiumAnnual] = useState(false);
  const [proAnnual, setProAnnual] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-plans');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const pricing = {
    monthly: {
      standard: { price: 59, period: "month" },
      premium: { price: 99, period: "month" },
      pro: { price: 149, period: "month" }
    },
    annual: {
      standard: { price: 649, period: "year", savings: 59 },
      premium: { price: 1049, period: "year", savings: 139 },
      pro: { price: 1599, period: "year", savings: 189 }
    }
  };

  return (
    <>
      {/* Hero Section - Modern Design */}
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
                  Managed Hosting
                </Heading>
                <p className="text-white text-left text-lg md:text-xl font-medium text-white/90">
                  Built Exclusively For Our Clients
                </p>
              </div>
              
              <Text className="text-white text-left text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                We design, host, and accelerate your entire online presence with fully managed VPS hosting tailored for business success.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" className="w-full sm:w-auto" onClick={scrollToPricing}>
                  Get Started
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto" onClick={scrollToPricing}>
                  View Plans
                </Button>
              </div>
            </div>
            
            {/* Right Side - Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80 text-sm">Uptime SLA</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Monitoring</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">VPS</div>
                <div className="text-white/80 text-sm">Fully Managed VPS Hosting</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">SSL</div>
                <div className="text-white/80 text-sm">Free Security</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <Section variant="content" id="pricing-plans" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <Container>
          <div className="text-center mb-16 relative z-10">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-coral/10 text-coral font-semibold rounded-full text-sm uppercase tracking-wider">
                Hosting Plans
              </span>
            </div>

            <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Stratigo Hosting Solutions
            </Heading>
            <Text className="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
              Exclusively for Stratigo Development Clients
            </Text>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Fully managed cloud hosting tailored for business websites we design and develop.
            </Text>
            
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
            {/* Standard Plan */}
            <div className="pricing-card">
              <div className="text-center mb-8">
                <h3 className="pricing-card-title">Standard</h3>
                
                {/* Price Toggle */}
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="toggle-switch"
                    onClick={() => setStandardAnnual(!standardAnnual)}
                  >
                    {standardAnnual && (
                      <div className="toggle-switch-active" />
                    )}
                    <div 
                      className={`toggle-switch-knob ${
                        standardAnnual ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="pricing-card-price">
                  ${standardAnnual ? pricing.annual.standard.price : pricing.monthly.standard.price}
                  <span className="pricing-card-period">/{standardAnnual ? pricing.annual.standard.period : pricing.monthly.standard.period}</span>
                </div>
                {standardAnnual && (
                  <div className="pricing-card-savings">
                    Save ${pricing.annual.standard.savings} per year
                  </div>
                )}
                <p className="pricing-card-description">Basic websites with CMS access and essential hosting</p>
              </div>
               <div className="feature-list">
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Website Development</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Basic Hosting</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">CMS Integration</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Free SSL Certificate</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">24/7 Support</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Dashboard Access</span>
                 </div>
               </div>
              <Link to={`/checkout?plan=standard&billing=${standardAnnual ? 'annual' : 'monthly'}`}>
                <Button variant="secondary" className="w-full mt-auto">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="pricing-card-featured">
              <div className="pricing-card-badge">
                Most Popular
              </div>
              <div className="text-center mb-8">
                <h3 className="pricing-card-title">Premium</h3>
                
                {/* Price Toggle */}
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="toggle-switch"
                    onClick={() => setPremiumAnnual(!premiumAnnual)}
                  >
                    {premiumAnnual && (
                      <div className="toggle-switch-active" />
                    )}
                    <div 
                      className={`toggle-switch-knob ${
                        premiumAnnual ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="pricing-card-price">
                  ${premiumAnnual ? pricing.annual.premium.price : pricing.monthly.premium.price}
                  <span className="pricing-card-period">/{premiumAnnual ? pricing.annual.premium.period : pricing.monthly.premium.period}</span>
                </div>
                {premiumAnnual && (
                  <div className="pricing-card-savings">
                    Save ${pricing.annual.premium.savings} per year
                  </div>
                )}
                <p className="pricing-card-description">Sites that need more speed, storage, backups, and monitoring</p>
              </div>
               <div className="feature-list">
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Website Development</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Premium Hosting</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">CMS + Dashboard</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Bi-weekly Backups</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Enhanced Performance Monitoring</span>
                 </div>
                 <div className="feature-item">
                   <svg className="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="feature-text">Priority Support</span>
                 </div>
               </div>
              <Link to={`/checkout?plan=premium&billing=${premiumAnnual ? 'annual' : 'monthly'}`}>
                <Button variant="primary" className="w-full mt-auto">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Pro Plan */}
            <div className="pricing-card">
              <div className="text-center mb-8">
                <h3 className="pricing-card-title">Pro</h3>
                
                {/* Price Toggle */}
                <div className="flex items-center justify-center mb-4">
                  <div 
                    className="toggle-switch"
                    onClick={() => setProAnnual(!proAnnual)}
                  >
                    {proAnnual && (
                      <div className="toggle-switch-active" />
                    )}
                    <div 
                      className={`toggle-switch-knob ${
                        proAnnual ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </div>
                </div>
                
                <div className="pricing-card-price">
                  ${proAnnual ? pricing.annual.pro.price : pricing.monthly.pro.price}
                  <span className="pricing-card-period">/{proAnnual ? pricing.annual.pro.period : pricing.monthly.pro.period}</span>
                </div>
                {proAnnual && (
                  <div className="pricing-card-savings">
                    Save ${pricing.annual.pro.savings} per year
                  </div>
                )}
                <p className="pricing-card-description">High-traffic or feature-rich sites with staging and priority support</p>
              </div>
               <div className="feature-list">
                 <div className="flex items-center">
                   <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">Full Development Suite</span>
                 </div>
                 <div className="flex items-center">
                   <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">Enterprise Hosting (High Performance)</span>
                 </div>
                 <div className="flex items-center">
                   <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">CMS + Custom Configuration</span>
                 </div>
                 <div className="flex items-center">
                   <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">Staging Environment</span>
                 </div>
                 <div className="flex items-center">
                   <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">Bi-weekly Backups + Monitoring</span>
                 </div>
                 <div className="flex items-center">
                   <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">Dedicated Account Manager</span>
                 </div>
                 <div className="flex items-center">
                   <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                   </svg>
                   <span className="text-gray-700">Priority Support</span>
                 </div>
               </div>
              <Link to={`/checkout?plan=pro&billing=${proAnnual ? 'annual' : 'monthly'}`}>
                <Button variant="secondary" className="w-full mt-auto">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="mt-20 text-center relative z-10">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-electric/10 text-electric font-semibold rounded-full text-sm uppercase tracking-wider">
                What's Included
              </span>
            </div>

            <Heading level={3} className="text-3xl md:text-4xl font-bold text-navy mb-6">
              What's Included in Every Plan
            </Heading>
            <Text className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Enterprise-grade features designed for business success, security, and performance
            </Text>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left group">
                  {/* Individual blur element */}
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-electric/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-3 mb-3">
                    <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Fully Managed Hosting</h4>
                      <p className="text-gray-600 text-sm">Enterprise-grade cloud infrastructure optimized for speed, reliability, and security.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-3 mb-3 relative z-10">
                    <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">CMS Access</h4>
                      <p className="text-gray-600 text-sm">Easily update content, pages, and media with our integrated headless CMS.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-coral/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-3 mb-3 relative z-10">
                    <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Free SSL & Custom Domain Integration</h4>
                      <p className="text-gray-600 text-sm">We handle HTTPS security and connect your existing domain.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-electric/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-3 mb-3 relative z-10">
                    <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Secure Bi-weekly Backups</h4>
                      <p className="text-gray-600 text-sm">Automated backups depending on your plan, with quick recovery options.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-3 mb-3 relative z-10">
                    <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">Client Dashboard</h4>
                      <p className="text-gray-600 text-sm">Access to website stats, billing, support requests, and hosting activity.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left relative group">
                  <div className="absolute -top-20 -left-20 w-40 h-40 bg-coral/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-3 mb-3 relative z-10">
                    <svg className="w-6 h-6 text-electric flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-2">99.9% Uptime Guarantee</h4>
                      <p className="text-gray-600 text-sm">Your site stays online, monitored, and supported 24/7.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Comparison Table */}
          <div className="mt-20 relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-orange/10 text-orange font-semibold rounded-full text-sm uppercase tracking-wider">
                  Plan Comparison
                </span>
              </div>

              <Heading level={3} className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Compare All Plans
              </Heading>
              <Text className="text-lg text-gray-700 max-w-4xl mx-auto mb-4">
                Not sure which plan is right for you? Compare all our hosting plans side-by-side to find the perfect fit for your business needs.
              </Text>
              <Text className="text-md text-gray-600 max-w-3xl mx-auto">
                From essential features to advanced capabilities, we've designed each plan to grow with your business.
              </Text>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Desktop Table View - Hidden on Mobile */}
              <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-50 to-electric/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-navy">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                          <span>Standard</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-navy">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 bg-electric rounded-full shadow-sm"></div>
                          <span>Premium</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-navy">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-3 h-3 bg-orange rounded-full shadow-sm"></div>
                          <span>Pro</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Secure, Managed Hosting
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                          Custom Domain Setup
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                          </svg>
                          Dashboard Access
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                          </svg>
                          Automated Backups
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Bi-weekly</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Bi-weekly</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Performance Monitoring
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                          </svg>
                          Storage
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">10 GB SSD</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">25 GB SSD</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">50 GB SSD + Scalable</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                          </svg>
                          Staging Environment
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Custom Configuration
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Project-based</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          Technical Support
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Standard</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Priority Email</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Priority + Fast Response</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View - Visible on Mobile Only */}
              <div className="md:hidden space-y-4">
                {/* Standard Plan Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                    <h4 className="text-lg font-bold text-navy">Standard Plan</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure, Managed Hosting
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Custom Domain Setup
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        Dashboard Access
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        Automated Backups
                      </span>
                      <span className="text-sm text-red-500">Not Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Performance Monitoring
                      </span>
                      <span className="text-sm text-red-500">Not Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Storage
                      </span>
                      <span className="text-sm text-gray-600 font-medium">10 GB SSD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Staging Environment
                      </span>
                      <span className="text-sm text-red-500">Not Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Custom Configuration
                      </span>
                      <span className="text-sm text-red-500">Not Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Technical Support
                      </span>
                      <span className="text-sm text-gray-600 font-medium">Standard</span>
                    </div>
                  </div>
                </div>

                {/* Premium Plan Card */}
                <div className="bg-white rounded-2xl shadow-xl border-2 border-electric p-6">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="w-3 h-3 bg-electric rounded-full shadow-sm"></div>
                    <h4 className="text-lg font-bold text-navy">Premium Plan</h4>
                    <span className="ml-auto px-3 py-1 bg-electric/10 text-electric text-xs font-semibold rounded-full">Most Popular</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure, Managed Hosting
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Custom Domain Setup
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        Dashboard Access
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        Automated Backups
                      </span>
                      <span className="text-sm text-gray-600 font-medium">Bi-weekly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Performance Monitoring
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Storage
                      </span>
                      <span className="text-sm text-gray-600 font-medium">25 GB SSD</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Staging Environment
                      </span>
                      <span className="text-sm text-red-500">Not Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Custom Configuration
                      </span>
                      <span className="text-sm text-red-500">Not Included</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Technical Support
                      </span>
                      <span className="text-sm text-gray-600 font-medium">Priority Email</span>
                    </div>
                  </div>
                </div>

                {/* Pro Plan Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <div className="w-3 h-3 bg-orange rounded-full shadow-sm"></div>
                    <h4 className="text-lg font-bold text-navy">Pro Plan</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure, Managed Hosting
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Custom Domain Setup
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        Dashboard Access
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        Automated Backups
                      </span>
                      <span className="text-sm text-gray-600 font-medium">Bi-weekly</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Performance Monitoring
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                        Storage
                      </span>
                      <span className="text-sm text-gray-600 font-medium">50 GB SSD + Scalable</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        Staging Environment
                      </span>
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Custom Configuration
                      </span>
                      <span className="text-sm text-gray-600 font-medium">Project-based</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Technical Support
                      </span>
                      <span className="text-sm text-gray-600 font-medium">Priority + Fast Response</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA for Plan Comparison */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-navy/5 to-electric/10 rounded-2xl p-8 max-w-4xl mx-auto border border-electric/20">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h4 className="text-2xl font-bold text-navy">Still Have Questions?</h4>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Every business is unique, and we're here to help you choose the hosting plan that aligns with your goals, traffic, and budget. Let's talk about what you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" className="text-base px-6 py-3">
                    Schedule a Consultation
                  </Button>
                  <Button variant="secondary" className="text-base px-6 py-3">
                    Contact Our Team
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Stratigo Section */}
          <div className="mt-20 relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-coral/10 text-coral font-semibold rounded-full text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>

              <Heading level={3} className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Why Choose Stratigo for Your Hosting?
              </Heading>
              <Text className="text-xl text-gray-700 max-w-4xl mx-auto mb-4">
                Stratigo Hosting is not your typical shared hosting service. It's an exclusive, high-performance infrastructure tailored for businesses that demand reliability, control, and expert-level support.
              </Text>
              <Text className="text-lg text-gray-600 max-w-4xl mx-auto">
                We deliver a fully managed environment designed to scale with your website and your business.
              </Text>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                {/* Built for Business Growth */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                  {/* Individual blur element */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-navy">Built for Business Growth</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    Our hosting is purpose-built for clients who work with us on software development and strategic digital solutions. Every hosting plan is engineered to support real-world business needs, with optimized performance, private deployment setups, and secure data management.
                  </p>
                </div>

                {/* Secure. Scalable. Supported. */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                  {/* Individual blur element */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-electric/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-electric to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-navy">Secure. Scalable. Supported.</h4>
                  </div>
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Cloud infrastructure powered by industry-leading servers</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Bi-weekly backups to ensure no data is lost</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Free SSL & HTTPS encryption for every plan</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Private hosting environment with no shared resources</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Client dashboard access to manage your content in real-time</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* A Strategic Hosting Partner */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                  {/* Individual blur element */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-coral/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-coral to-pink-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-navy">A Strategic Hosting Partner</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    Your hosting provider should understand your business. With Stratigo, your website is supported by the same team that builds and maintains it. That means faster fixes, proactive support, and full alignment between your hosting, your marketing, and your development needs.
                  </p>
                </div>

                {/* Designed Exclusively for Stratigo Clients */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                  {/* Individual blur element */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange to-red-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-navy">Designed Exclusively for Stratigo Clients</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed relative z-10">
                    We only offer hosting to clients actively working with us on website development and/or digital strategy. This allows us to focus on delivering a premium experience and avoiding one-size-fits-all limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Section */}
          <div className="mt-20 relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-green-500/10 text-green-600 font-semibold rounded-full text-sm uppercase tracking-wider">
                  The Difference
                </span>
              </div>

              <Heading level={3} className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Why Stratigo Hosting Is Different
              </Heading>
              <Text className="text-lg text-gray-700 max-w-4xl mx-auto mb-4">
                When comparing hosting options, it's important to understand that not all hosting is built equally.
              </Text>
              <Text className="text-md text-gray-600 max-w-4xl mx-auto">
                Stratigo Hosting is designed exclusively for business clients who need reliability, security, and hands-on management, not just server space.
              </Text>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Desktop Table View - Hidden on Mobile */}
              <div className="hidden md:block bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-50 to-electric/5">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-navy">Category</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-navy">
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          <span>Traditional Hosting Platforms</span>
                        </div>
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-navy">
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <span className="font-bold">Stratigo Managed Hosting</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                          </svg>
                          Hosting Type
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Shared servers hosting hundreds of websites together</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Private, fully managed hosting environment</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                          Server Control
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">No direct access or server customization</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Full configuration and management handled by Stratigo</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Performance
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Basic, shared resources</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Optimized high-performance environment tailored for business websites</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                          </svg>
                          Scalability
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Limited — fixed setup and restrictions</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Seamless scaling to match business growth</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Security
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Shared system with higher exposure risk</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Private environment with advanced protection and isolation</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          Maintenance
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Automated but generic</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Manually managed, with regular monitoring and updates</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                          Target Users
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Consumers, personal websites, bloggers</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Businesses and professional clients with long-term growth goals</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Price Range
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">$2–$15/month (mass-market pricing)</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">$59–$149/month (exclusive managed hosting)</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200">
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        <div className="flex items-center gap-2">
                          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          Value Proposition
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Basic self-service hosting</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm text-gray-600">Full-service business hosting with expert management</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View - Visible on Mobile Only */}
              <div className="md:hidden space-y-4">
                {/* Traditional Hosting Card */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h4 className="text-lg font-bold text-navy">Traditional Hosting Platforms</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Hosting Type</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Shared servers hosting hundreds of websites together</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Server Control</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">No direct access or server customization</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Performance</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Basic, shared resources</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Scalability</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Limited — fixed setup and restrictions</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Security</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Shared system with higher exposure risk</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Maintenance</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Automated but generic</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Target Users</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Consumers, personal websites, bloggers</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Price Range</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">$2–$15/month (mass-market pricing)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Value Proposition</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Basic self-service hosting</p>
                    </div>
                  </div>
                </div>

                {/* Stratigo Hosting Card */}
                <div className="bg-white rounded-2xl shadow-xl border-2 border-electric p-6">
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
                    <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h4 className="text-lg font-bold text-navy">Stratigo Managed Hosting</h4>
                    <span className="ml-auto px-3 py-1 bg-electric/10 text-electric text-xs font-semibold rounded-full">Premium</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Hosting Type</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Private, fully managed hosting environment</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Server Control</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Full configuration and management handled by Stratigo</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Performance</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Optimized high-performance environment tailored for business websites</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Scalability</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Seamless scaling to match business growth</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Security</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Private environment with advanced protection and isolation</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Maintenance</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Manually managed, with regular monitoring and updates</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Target Users</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Businesses and professional clients with long-term growth goals</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Price Range</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">$59–$149/month (exclusive managed hosting)</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">Value Proposition</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">Full-service business hosting with expert management</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA for Comparison */}
            <div className="mt-12 text-center">
              <div className="bg-gradient-to-r from-electric/10 to-blue-100 rounded-2xl p-8 max-w-4xl mx-auto border border-electric/20 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-electric/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-navy">The Stratigo Difference</h4>
                </div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  With Stratigo, you're not just buying hosting. You're partnering with a team that understands your business goals and is committed to your success. Every plan includes white-glove service, expert management, and the infrastructure your business deserves.
                </p>
                <Button 
                  variant="primary" 
                  className="text-lg px-8 py-3 group"
                  onClick={scrollToPricing}
                >
                  <span className="flex items-center gap-2">
                    View Our Hosting Plans
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-electric/10 text-electric font-semibold rounded-full text-sm uppercase tracking-wider">
                  Common Questions
                </span>
              </div>

              <Heading level={3} className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Frequently Asked Questions
              </Heading>
              <Text className="text-lg text-gray-700 max-w-3xl mx-auto">
                Everything you need to know about Stratigo Hosting — from security to scalability and support
              </Text>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {[
                  {
                    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                    iconColor: "blue",
                    question: "What makes Stratigo Hosting different from other hosting providers?",
                    answer: "Stratigo Hosting is exclusive to clients who work with us on website development or marketing. Unlike shared hosting platforms, we provide a fully managed cloud infrastructure with developer-level setup, private environments, and personalized support — not generic one-size-fits-all hosting."
                  },
                  {
                    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6",
                    iconColor: "green",
                    question: "Do you offer hosting to anyone?",
                    answer: "No — Stratigo Hosting is exclusively available to clients using our software development or digital marketing services. This ensures we deliver a high-quality experience by working only with businesses we know and support end-to-end."
                  },
                  {
                    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    iconColor: "purple",
                    question: "Where are your servers located?",
                    answer: "Our hosting runs on top-tier cloud infrastructure with data centers in the United States, optimized for performance and uptime. We choose server regions closest to your business or audience for best results."
                  },
                  {
                    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    iconColor: "red",
                    question: "Is my website secure?",
                    answer: "Yes. All Stratigo Hosting plans include free SSL certificates (HTTPS), firewall protection, data backups, and secure server configurations. Security updates and monitoring are handled for you, so you can focus on your business."
                  },
                  {
                    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                    iconColor: "yellow",
                    question: "What happens if my website grows and needs more resources?",
                    answer: "That's the advantage of working with us. As your needs grow, we can scale your hosting environment, upgrade your plan, or configure a custom solution to meet your performance and traffic demands — without downtime or complex migrations."
                  },
                  {
                    icon: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12",
                    iconColor: "indigo",
                    question: "How often are backups done?",
                    answer: (
                      <div>
                        <p className="mb-2"><strong>Premium Plan:</strong> Bi-weekly automated backups</p>
                        <p className="mb-2"><strong>Pro Plan:</strong> Bi-weekly automated backups</p>
                        <p>Backups are securely stored and can be restored if needed.</p>
                      </div>
                    )
                  },
                  {
                    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                    iconColor: "teal",
                    question: "Do I get access to a CMS or dashboard?",
                    answer: "Yes! Every hosting plan includes access to a user-friendly dashboard powered by a CMS, where you can manage your content, make updates, and view basic performance metrics."
                  },
                  {
                    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                    iconColor: "pink",
                    question: "How does billing work?",
                    answer: "You'll be billed monthly or annually (your choice), depending on the plan you select. We offer transparent pricing, no hidden fees, and dedicated support throughout the setup and hosting period."
                  },
                  {
                    icon: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
                    iconColor: "orange",
                    question: "Can I upgrade or downgrade my plan later?",
                    answer: "Absolutely. You can upgrade your plan anytime as your business or traffic grows. Downgrades are also possible depending on your usage and requirements."
                  },
                  {
                    icon: "M6 18L18 6M6 6l12 12",
                    iconColor: "gray",
                    question: "What happens if I cancel hosting?",
                    answer: "If hosting is canceled, we'll help you with a graceful transition of your site's files and database. You'll retain ownership of your content, and we'll provide a full backup for your records."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <button
                      className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-blue-50/50 transition-colors duration-200 border-0 focus:outline-none focus:ring-0"
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-12 h-12 bg-gradient-to-br from-electric to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={faq.icon} />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-navy pr-4">{faq.question}</h4>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-electric/10 rounded-full flex items-center justify-center">
                          <svg 
                            className={`w-5 h-5 text-electric transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-6 bg-gradient-to-br from-blue-50 to-electric/5 border-t border-gray-100">
                        <div className="ml-16 mt-4">
                          <div className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modern CTA Section */}
      <section className="w-full bg-gradient-to-br from-navy via-navy to-electric py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-electric/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-sm uppercase tracking-wider border border-white/20">
              Get Started Today
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Host Your Website?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stratigo Hosting isn't just about uptime — it's about peace of mind.
            You're not just getting a server. You're getting a dedicated partner who understands your website, your goals, and your growth.
          </p>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reliable Infrastructure</h3>
              <p className="text-white/80">World-class cloud servers with 99.9% uptime guarantee</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions</h3>
              <p className="text-white/80">Grow confidently with infrastructure that adapts to your needs</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Support</h3>
              <p className="text-white/80">Priority support from the team that built your website</p>
            </div>
          </div>

          {/* Main CTA Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Choose Your Plan and Get Online Fast
              </h3>
              <p className="text-lg text-white/90 mb-8">
                Whether you're launching your first site or scaling an existing platform, Stratigo gives you the tools, infrastructure, and support you need — without the complexity.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToPricing}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View Hosting Plans
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300">
                  Book a Free Setup Call
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white font-semibold">Hosting Inquiries</p>
              <p className="text-white/80 text-sm">hello@stratigo.io</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white font-semibold">Free Setup Consultation</p>
              <p className="text-white/80 text-sm">30-min strategy call</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-electric/20 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold">Quick Response</p>
              <p className="text-white/80 text-sm">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hosting;

