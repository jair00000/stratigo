import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import FeatureCard from "../components/Card/FeatureCard";
import HeroImage from "../assets/images/home/Home_hero.webp";
import EconomicGrowthIcon from "../assets/icons/streamline-sharp-color--decent-work-and-economic-growth.svg";

const Home = () => {
  const location = useLocation();

  // Handle navigation state and hash navigation when page loads
  useEffect(() => {
    // Check for navigation state from About page
    if (location.state?.scrollTo === 'services') {
      setTimeout(() => {
        const servicesElement = document.getElementById('services');
        if (servicesElement) {
          servicesElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    
    // Also check for hash navigation
    const hash = window.location.hash;
    if (hash === '#services') {
      setTimeout(() => {
        const servicesElement = document.getElementById('services');
        if (servicesElement) {
          servicesElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      emoji: "💻",
      title: "Software Solutions",
      description: "From concept to deployment, we develop custom web, mobile, and CRM applications designed for performance, scalability, and business efficiency. We build solutions that evolve with your business needs.",
      includes: [
        "Web & Mobile App Development",
        "Custom CRM Systems",
        "API & System Integration",
        "UI/UX Design for Business Platforms"
      ],
      iconColor: "orange",
      link: "/services/software-development"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      emoji: "📈",
      title: "Marketing Solutions",
      description: "Grow your visibility and strengthen your brand with strategic, data-driven marketing campaigns. We focus on SEO, local search visibility, and digital content strategy for measurable results.",
      includes: [
        "Search Engine Optimization (SEO)",
        "Local and Regional Visibility Campaigns",
        "Digital Content Creation",
        "Brand Strategy and Positioning"
      ],
      iconColor: "electric",
      link: "/services/marketing"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      emoji: "☁️",
      title: "Hosting Solutions",
      description: "Our Managed Hosting Services are built exclusively for Stratigo clients. Every project runs on a dedicated Virtual Private Server (VPS) with enterprise-grade infrastructure and full management support.",
      includes: [
        "Dedicated Virtual Private Server (VPS)",
        "Weekly Data Backups",
        "Free SSL and Firewall Protection",
        "Performance Monitoring and Technical Support"
      ],
      iconColor: "coral",
      link: "/services/hosting"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-electric/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-coral/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Hero Section - Smaller & Modern Design */}
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
                  Stratigo
                </Heading>
                <p className="text-white text-left text-lg md:text-xl font-medium text-white/90">
                  DESIGN with marketing that lasts.
                </p>
              </div>
              
              <Text className="text-white text-left text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                Empowering your business with software, marketing, and strategies designed to deliver meaningful results.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Side - Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-white/80 text-sm">Uptime Guarantee</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">System Monitoring</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Managed Services</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">B2B</div>
                <div className="text-white/80 text-sm">Exclusive Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Section variant="content" className="relative overflow-hidden" id="services">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container>
          {/* Section Introduction */}
          <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-electric/10 text-electric font-semibold rounded-full text-sm uppercase tracking-wider">
                What We Offer
              </span>
            </div>
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Services
            </Heading>
            <Text className="text-xl text-gray-700 leading-relaxed">
              At Stratigo, we combine strategy, design, and technology to deliver solutions that help businesses thrive in the digital era. Our services are built to support growth, security, and performance — from marketing your brand to managing your systems.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center relative z-10">
            {features.map((feature, index) => {
              const iconBgColor = 
                feature.iconColor === 'orange' ? 'bg-orange' :
                feature.iconColor === 'electric' ? 'bg-electric' :
                feature.iconColor === 'coral' ? 'bg-coral' : 'bg-electric';
              
              const gradientBg = 
                feature.iconColor === 'orange' ? 'from-orange/5 to-orange/0' :
                feature.iconColor === 'electric' ? 'from-electric/5 to-electric/0' :
                feature.iconColor === 'coral' ? 'from-coral/5 to-coral/0' : 'from-electric/5 to-electric/0';
              
              return (
                <div key={index} className={`relative bg-gradient-to-br ${gradientBg} bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full justify-between group`}>
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    0{index + 1}
                  </div>
                  
                  {/* Icon and Title */}
                  <div className="flex flex-col items-center mb-4">
                    <div className={`w-16 h-16 ${iconBgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <Heading level={3} className="text-2xl font-bold text-navy text-center">
                      {feature.title}
                    </Heading>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <Text className="text-gray-700 leading-relaxed text-center">
                      {feature.description}
                    </Text>
                  </div>

                  {/* Includes Section - Enhanced */}
                  <div className="mb-6 flex-grow">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 h-48 group-hover:bg-blue-100 transition-colors">
                      <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3 text-left flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                        </svg>
                        Includes:
                      </h4>
                      <div className="space-y-2">
                        {feature.includes.map((item, idx) => (
                          <div key={idx} className="flex items-start">
                            <svg className="w-4 h-4 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-blue-700 text-sm leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Button - Enhanced */}
                  <div>
                    <Link to={feature.link}>
                      <Button variant="secondary" className="w-full group-hover:bg-navy group-hover:text-white transition-colors">
                        Learn More
                        <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* About Stratigo Overview */}
      <Section variant="content" className="bg-blue-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-coral/5 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-electric/5 rounded-full blur-3xl translate-x-1/2"></div>
        
        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-navy/10 text-navy font-semibold rounded-full text-sm uppercase tracking-wider">
                  Who We Are
                </span>
              </div>
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                About Stratigo
              </Heading>
            </div>

            {/* Main Content Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Top Content */}
              <div className="p-8 md:p-12">
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-electric mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xl text-navy font-semibold">
                      Stratigo is a digital solutions company serving businesses across industries worldwide. We provide Marketing, Software Development, and Hosting Services designed to help brands grow with precision, performance, and purpose.
                    </p>
                  </div>
                  <p className="pl-10">
                    Our team combines creativity, technology, and strategic insight to build systems that empower businesses to operate smarter, scale faster, and achieve sustainable success. Guided by transparency, partnership, trust, and security, we deliver results that go beyond expectations — helping clients transform their ideas into measurable growth.
                  </p>
                  <p className="pl-10">
                    Whether you're building your digital foundation or expanding your reach, Stratigo provides the tools, strategies, and secure infrastructure that turn business goals into real outcomes.
                  </p>
                </div>
              </div>

              {/* Stats Strip with Gradient Background */}
              <div className="bg-gradient-to-r from-navy via-electric to-navy p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Stat 1 */}
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Full-Service</h4>
                    <p className="text-white/80 text-sm">Marketing, Software & Hosting</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Global Reach</h4>
                    <p className="text-white/80 text-sm">Serving Businesses Worldwide</p>
                  </div>

                  {/* Stat 3 */}
                  <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                        <svg className="w-7 h-7 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Trusted Partner</h4>
                    <p className="text-white/80 text-sm">Built on Transparency & Results</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-8 bg-gray-50 text-center">
                <Link to="/about">
                  <Button variant="primary" className="text-lg px-8 py-3 group">
                    Learn More About Us
                    <svg className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-orange/10 text-orange font-semibold rounded-full text-sm uppercase tracking-wider">
                  Our Process
                </span>
              </div>
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                How It Works
              </Heading>
              <Text className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At Stratigo, every project follows a clear and proven process designed to deliver results with precision and purpose. From planning and design to testing and growth, we ensure that your digital foundation is built for long-term performance, security, and scalability.
              </Text>
              <Text className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                Our process reflects our commitment to strategy, quality, and measurable outcomes — so your business not only launches successfully but continues to grow in the digital space.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Connecting Lines - Hidden on Mobile */}
              <div className="hidden md:block absolute top-1/2 left-1/2 w-px h-full bg-gradient-to-b from-electric/20 via-electric/40 to-electric/20 -translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Step 1 */}
              <div className="relative bg-gradient-to-br from-orange/5 to-orange/0 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg border-4 border-white">
                  1
                </div>
                <div className="flex items-start mb-6 mt-4">
                  <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      UI / UX Design & Structure
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  We begin by designing an intuitive, user-focused interface and coding a reliable structure. This ensures your platform is not only visually engaging but also optimized for performance, responsiveness, and long-term scalability.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 1 of 4</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-gradient-to-br from-electric/5 to-electric/0 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-electric rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg border-4 border-white">
                  2
                </div>
                <div className="flex items-start mb-6 mt-4">
                  <div className="w-14 h-14 bg-electric rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Gather Information & Content Marketing
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  Next, we work closely with your team to collect business information, brand assets, and key messaging. Our content experts align these elements into a cohesive digital marketing strategy that supports visibility and engagement.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 2 of 4</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-gradient-to-br from-coral/5 to-coral/0 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-coral rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg border-4 border-white">
                  3
                </div>
                <div className="flex items-start mb-6 mt-4">
                  <div className="w-14 h-14 bg-coral rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Testing & Optimization
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  Before launch, every component of your system undergoes detailed testing — from usability and compatibility to speed and security. We fine-tune performance to ensure a flawless user experience on all devices.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 3 of 4</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative bg-gradient-to-br from-green-500/5 to-green-500/0 rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-xl shadow-lg border-4 border-white">
                  4
                </div>
                <div className="flex items-start mb-6 mt-4">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Grow & Scale the Market
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  Once live, we continuously monitor, update, and optimize your website or system. Through data-driven insights, performance tracking, and system improvements, Stratigo helps your business grow, scale, and stay ahead in a competitive market.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Step 4 of 4</span>
                </div>
              </div>
            </div>

            {/* Process Timeline Visual */}
            <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <Text className="text-sm font-semibold text-navy">Design</Text>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <Text className="text-sm font-semibold text-navy">Content</Text>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-coral rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <Text className="text-sm font-semibold text-navy">Testing</Text>
                </div>
                <div className="flex-1 flex justify-center items-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex-1 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <Text className="text-sm font-semibold text-navy">Growth</Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Stratigo Section */}
      <Section variant="content" className="bg-blue-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-electric/10 text-electric font-semibold rounded-full text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Why Choose Stratigo
              </Heading>
              <Text className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At Stratigo, we don't just build systems — we build partnerships. Our solutions are designed exclusively for businesses that value strategy, performance, and long-term growth. From marketing to hosting, every service we deliver is built on precision, transparency, and results that matter.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-electric/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-electric rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-xl font-bold text-navy mb-3">
                      Exclusive B2B Partnership Model
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  We work exclusively with business owners and professionals — ensuring every project receives dedicated attention, technical expertise, and a results-driven approach tailored to your industry.
                </Text>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-xl font-bold text-navy mb-3">
                      Integrated Marketing Solutions
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  Our marketing strategies go beyond visibility. We combine SEO, content creation, and analytics to help your business stand out, attract clients, and convert engagement into measurable success.
                </Text>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-coral/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-coral rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-xl font-bold text-navy mb-3">
                      Dedicated Hosting Infrastructure
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  Unlike shared hosting providers, we offer fully managed Virtual Private Servers (VPS) — built for speed, security, and reliability. Your data, performance, and uptime are always our top priorities.
                </Text>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-xl font-bold text-navy mb-3">
                      Transparent Management Dashboard
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  Track your website's performance, hosting metrics, and marketing activity in one place. Our system provides full visibility, helping you make informed decisions with confidence.
                </Text>
              </div>

              {/* Feature 5 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-xl font-bold text-navy mb-3">
                      Full Project Lifecycle Management
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  From concept to growth, Stratigo manages every stage — design, development, deployment, and scaling — so you can focus on running your business while we handle the technology.
                </Text>
              </div>

              {/* Feature 6 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-xl font-bold text-navy mb-3">
                      Personalized Client Support
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  Every client is paired with a dedicated account manager who ensures smooth communication, timely updates, and proactive support throughout your partnership with Stratigo.
                </Text>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-electric/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-navy mb-2">100%</div>
                <div className="text-sm text-gray-600">B2B Focus</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-navy mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-navy mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-navy mb-2">100%</div>
                <div className="text-sm text-gray-600">Managed</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Who We Serve Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-orange/10 text-orange font-semibold rounded-full text-sm uppercase tracking-wider">
                  Our Clients
                </span>
              </div>
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Who We Serve
              </Heading>
              <Text className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Stratigo provides tailored digital solutions for small and medium-sized businesses (SMBs) that power real-world industries.
              </Text>
              <Text className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mt-4">
                We specialize in helping contractors, manufacturers, and service-based companies modernize their operations, strengthen their online presence, and scale through technology.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Industry 1 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-orange/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-orange rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Trade & Service Businesses
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  We support hands-on professionals such as window tinting experts, auto detailers, construction teams, HVAC technicians, cleaning, and repair services. Our digital tools help them attract more clients, streamline operations, and build credibility online.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange/10 text-orange text-xs font-medium rounded-full">Window Tinting</span>
                    <span className="px-3 py-1 bg-orange/10 text-orange text-xs font-medium rounded-full">Auto Detailing</span>
                    <span className="px-3 py-1 bg-orange/10 text-orange text-xs font-medium rounded-full">HVAC</span>
                    <span className="px-3 py-1 bg-orange/10 text-orange text-xs font-medium rounded-full">Cleaning</span>
                  </div>
                </div>
              </div>

              {/* Industry 2 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-electric/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-electric rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Industrial & Manufacturing Firms
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  For factories, fabrication shops, logistics, and supply companies, we create reliable systems and websites that modernize workflows, improve communication, and increase visibility in B2B markets.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">Factories</span>
                    <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">Fabrication</span>
                    <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">Logistics</span>
                    <span className="px-3 py-1 bg-electric/10 text-electric text-xs font-medium rounded-full">Supply Chain</span>
                  </div>
                </div>
              </div>

              {/* Industry 3 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-coral/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-coral rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Property & Construction Professionals
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  We partner with developers, renovation specialists, and maintenance firms to showcase their work through powerful web platforms with high-speed hosting and visual portfolio features.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-medium rounded-full">Developers</span>
                    <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-medium rounded-full">Renovation</span>
                    <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-medium rounded-full">Maintenance</span>
                    <span className="px-3 py-1 bg-coral/10 text-coral text-xs font-medium rounded-full">Portfolio</span>
                  </div>
                </div>
              </div>

              {/* Industry 4 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/5 rounded-full blur-xl"></div>
                <div className="flex items-start mb-6 relative z-10">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Professional Service Providers
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed relative z-10">
                  From marketing agencies and consultants to creative studios, we help professionals enhance their digital reach through custom websites, integrated systems, and managed hosting built for scalability.
                </Text>
                <div className="mt-4 pt-4 border-t border-gray-200 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">Agencies</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">Consultants</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">Creative Studios</span>
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">Digital</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Testimonial */}
            <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <Text className="text-xl text-white/90 leading-relaxed mb-4">
                      "Stratigo transformed our window tinting business from local to digital-first. Our new website and online booking system has increased our client base by 300% in just 6 months."
                    </Text>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">JR</span>
                      </div>
                      <div>
                        <div className="font-semibold text-white">Jair Rivera</div>
                        <div className="text-white/70 text-sm">Owner, Stratigo Window Tinting</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* Full-Width CTA Section */}
      <Section variant="content" className="bg-gradient-to-br from-navy via-navy/95 to-electric py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-coral/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

        <Container>
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <div className="mb-16">
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-sm uppercase tracking-wider border border-white/20">
                  Get Started Today
                </span>
              </div>
              <Heading level={2} className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Ready to Transform Your Business?
              </Heading>
              <Text className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
                Your business deserves a partner that understands technology, marketing, and growth.
              </Text>
              <Text className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                At Stratigo, we combine strategy, innovation, and secure systems to help your brand achieve measurable success.
              </Text>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-orange/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-2">Fast Implementation</Text>
                <Text className="text-white/70 text-sm">Get your project started within 48 hours</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-electric/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-2">Expert Support</Text>
                <Text className="text-white/70 text-sm">Dedicated team throughout your journey</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-2">Proven Results</Text>
                <Text className="text-white/70 text-sm">300% average client growth</Text>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/20">
              <Text className="text-xl md:text-2xl text-white mb-8 font-medium">
                Let's build something extraordinary together — from your website to your digital ecosystem.
              </Text>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button variant="primary" className="bg-orange hover:bg-orange/90 text-white font-semibold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-lg group">
                  <span className="flex items-center gap-2">
                    Book a Consultation
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
                <Button variant="secondary" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg backdrop-blur-sm">
                  Contact Stratigo
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">hello@stratigo.io</div>
                  <div className="text-sm">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">Free Consultation</div>
                  <div className="text-sm">30-minute strategy call</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white">48-Hour Response</div>
                  <div className="text-sm">Quick project turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
