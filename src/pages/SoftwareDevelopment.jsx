import React from "react";
import { Link } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const SoftwareDevelopment = () => {
  const coreServices = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Web Development",
      description: "We develop high-performance, responsive websites that combine modern design with functionality. Each website is optimized for speed, SEO, and user experience, ensuring your brand stands out and your visitors convert into customers.",
      includes: [
        "Business & Corporate Websites",
        "E-Commerce Platforms",
        "Custom Web Applications",
        "API Integration & Backend Development"
      ],
      iconColor: "orange"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "App Development",
      description: "Expand your business reach through custom mobile applications built for Android and iOS. Our apps are designed for usability, speed, and long-term scalability — helping your customers engage effortlessly wherever they are.",
      includes: [
        "Android & iOS App Development",
        "Cross-Platform Solutions",
        "UI/UX App Design",
        "App Maintenance & Updates"
      ],
      iconColor: "electric"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "CRM Development",
      description: "Simplify how you manage clients and sales with a custom Customer Relationship Management (CRM) system tailored to your workflow. We build tools that help you track leads, automate communication, and manage customer data securely.",
      includes: [
        "Custom CRM Systems",
        "Data Integration & Security",
        "Sales Tracking & Automation",
        "Dashboard Analytics"
      ],
      iconColor: "coral"
    }
  ];

  const whyChoose = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Custom-Built Solutions",
      description: "Every project is designed specifically for your business goals.",
      iconColor: "orange"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      title: "Scalable Architecture",
      description: "Grow confidently with software that adapts as your business expands.",
      iconColor: "electric"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise-Grade Security",
      description: "We prioritize data protection in every layer of your system.",
      iconColor: "coral"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      ),
      title: "End-to-End Support",
      description: "From design to deployment, Stratigo manages every stage of your software lifecycle.",
      iconColor: "green-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Software Solutions | Web, App, and CRM Development for Businesses – Stratigo</title>
        <meta 
          name="description" 
          content="Discover Stratigo's Software Solutions — web, mobile, and CRM development built for security, scalability, and business growth. Custom software designed for performance and long-term success." 
        />
        <meta 
          name="keywords" 
          content="software solutions, web development, mobile app development, CRM systems, custom business software, enterprise software, secure web applications, B2B software development, Stratigo software" 
        />
      </Helmet>

      {/* Hero Section - Modern Design */}
      <section 
        className="w-full h-[70vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left text-white">
              <div className="mb-4 sm:mb-6">
                <Heading level={1} className="text-white text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-2 sm:mb-3">
                  Software Solutions
                </Heading>
                <p className="text-white text-left text-base sm:text-lg md:text-xl font-medium text-white/90">
                  Building Scalable, Secure, and Smart Systems
                </p>
              </div>
              
              <Text className="text-white text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-white/90">
                Custom web, mobile, and CRM development designed for performance, security, and business growth.
              </Text>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto text-sm sm:text-base">
                    Book a Consultation
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto text-sm sm:text-base">
                    Get a Quote
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Side - Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Web</div>
                <div className="text-white/80 text-sm">Modern Development</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Mobile</div>
                <div className="text-white/80 text-sm">iOS & Android Apps</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">CRM</div>
                <div className="text-white/80 text-sm">Custom Systems</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">API</div>
                <div className="text-white/80 text-sm">Integration Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10 px-4 sm:px-0">
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange/10 text-orange font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                What We Build
              </span>
            </div>

            {/* Title */}
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 sm:mb-8">
              Digital Systems That Empower Growth
            </Heading>

            {/* Description */}
            <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
              At Stratigo, we create digital systems that empower businesses to perform better, work smarter, and grow faster.
            </Text>
            <Text className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Our Software Solutions are built to fit your goals — from powerful websites and mobile applications to customized CRM systems that connect your business operations seamlessly.
            </Text>
            
            <div className="bg-gradient-to-br from-blue-50 to-electric/5 border border-blue-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mt-4 sm:mt-6">
              <p className="text-base sm:text-lg md:text-xl text-blue-900 font-semibold">
                We don't build generic templates — we build tailored software designed for performance, security, and scalability.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Software Services Section */}
      <Section variant="content" className="bg-blue-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <Container>
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 relative z-10 px-4 sm:px-0">
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric/10 text-electric font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                Our Services
              </span>
            </div>

            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
              Our Core Software Services
            </Heading>
            <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Comprehensive development services designed to power your business growth through technology
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 justify-items-center relative z-10 px-4 sm:px-0">
            {coreServices.map((service, index) => {
              const gradientBg = 
                service.iconColor === 'orange' ? 'bg-gradient-to-br from-orange to-red-500' :
                service.iconColor === 'electric' ? 'bg-gradient-to-br from-electric to-blue-600' :
                service.iconColor === 'coral' ? 'bg-gradient-to-br from-coral to-pink-500' : 'bg-gradient-to-br from-electric to-blue-600';
              
              const blurColor = 
                service.iconColor === 'orange' ? 'bg-orange/10' :
                service.iconColor === 'electric' ? 'bg-electric/10' :
                service.iconColor === 'coral' ? 'bg-coral/10' : 'bg-electric/10';
              
              return (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative group w-full max-w-md">
                  {/* Individual blur element */}
                  <div className={`absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 ${blurColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Number Badge */}
                  <div className={`absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 ${gradientBg} rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg`}>
                    {index + 1}
                  </div>

                  {/* Icon and Title */}
                  <div className="flex flex-col items-center mb-3 sm:mb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${gradientBg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white">
                        {React.cloneElement(service.icon, { className: "w-full h-full text-white" })}
                      </div>
                    </div>
                    <Heading level={3} className="text-lg sm:text-xl md:text-2xl font-bold text-navy text-center">
                      {service.title}
                    </Heading>
                  </div>

                  {/* Description */}
                  <div className="mb-4 sm:mb-6 flex-grow">
                    <Text className="text-sm sm:text-base text-gray-700 leading-relaxed text-center">
                      {service.description}
                    </Text>
                  </div>

                  {/* Includes Section */}
                  <div className="mb-4">
                    <div className="bg-gradient-to-br from-blue-50 to-electric/5 border border-blue-200 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="flex items-center justify-center mb-2 sm:mb-3">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric mr-1.5 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h4 className="text-xs sm:text-sm font-bold text-electric uppercase tracking-wider">Includes</h4>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {service.includes.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-blue-700 text-xs sm:text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Choose Stratigo Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
              {/* Badge */}
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-coral/10 text-coral font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>

              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
                Why Choose Stratigo for Software Development
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We combine technical expertise with strategic thinking to deliver software solutions that drive real business results
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {whyChoose.map((item, index) => {
                const gradientBg = 
                  item.iconColor === 'orange' ? 'bg-gradient-to-br from-orange to-red-500' :
                  item.iconColor === 'electric' ? 'bg-gradient-to-br from-electric to-blue-600' :
                  item.iconColor === 'coral' ? 'bg-gradient-to-br from-coral to-pink-500' :
                  item.iconColor === 'green-500' ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-electric to-blue-600';
                
                const blurColor = 
                  item.iconColor === 'orange' ? 'bg-orange/10' :
                  item.iconColor === 'electric' ? 'bg-electric/10' :
                  item.iconColor === 'coral' ? 'bg-coral/10' :
                  item.iconColor === 'green-500' ? 'bg-green-500/10' : 'bg-electric/10';

                return (
                  <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                    {/* Individual blur element */}
                    <div className={`absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 ${blurColor} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    
                    <div className="flex items-start mb-3 sm:mb-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${gradientBg} rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-6 h-6 sm:w-6 sm:h-6 text-white">
                          {React.cloneElement(item.icon, { className: "w-full h-full text-white" })}
                        </div>
                      </div>
                      <div className="flex-grow min-w-0">
                        <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-2 sm:mb-3">
                          {item.title}
                        </Heading>
                        <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {item.description}
                        </Text>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="content" className="bg-gradient-to-br from-navy via-navy/95 to-electric py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-coral/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

        <Container>
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <div className="mb-10 sm:mb-12 md:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider border border-white/20">
                  Get Started Today
                </span>
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Ready to Build Your Software Solution?
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed">
                Transform your business vision into powerful, scalable software that drives growth and efficiency.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                At Stratigo, we build custom web, mobile, and CRM solutions designed for performance, security, and long-term success.
              </Text>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Performance Driven</Text>
                <Text className="text-white/70 text-xs sm:text-sm">Built for speed and efficiency</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Secure by Design</Text>
                <Text className="text-white/70 text-xs sm:text-sm">Enterprise-grade security</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Scalable Solutions</Text>
                <Text className="text-white/70 text-xs sm:text-sm">Grows with your business</Text>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 border border-white/20">
              <Text className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 font-medium">
                Whether you need a website, mobile app, or CRM system — let's build something extraordinary together.
              </Text>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
                <Button variant="primary" className="w-full sm:w-auto bg-orange hover:bg-orange/90 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg group flex items-center justify-center">
                  <span className="flex items-center justify-center gap-2">
                    Book a Consultation
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
                <Button variant="secondary" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-sm sm:text-base md:text-lg backdrop-blur-sm flex items-center justify-center">
                  Get a Quote
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 text-white/80">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">hello@stratigo.io</div>
                  <div className="text-xs sm:text-sm">Development Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Free Project Scope</div>
                  <div className="text-xs sm:text-sm">30-minute consultation call</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Fast Turnaround</div>
                  <div className="text-xs sm:text-sm">Project starts within 48 hours</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SoftwareDevelopment;

