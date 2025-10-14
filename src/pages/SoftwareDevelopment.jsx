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

      {/* Hero Section */}
      <section 
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-overlay"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-12">
            <Heading level={1} variant="hero" className="text-white text-center text-6xl md:text-7xl mb-8">
              Software Solutions
            </Heading>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white/90">
              Building Scalable, Secure, and Smart Systems for Modern Businesses
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="primary">
                Book a Consultation
              </Button>
              <Button variant="secondary">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section variant="content">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl text-center">
                  At Stratigo, we create digital systems that empower businesses to perform better, work smarter, and grow faster.
                </p>
                <p className="text-xl text-center">
                  Our Software Solutions are built to fit your goals — from powerful websites and mobile applications to customized CRM systems that connect your business operations seamlessly.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                  <p className="text-lg text-center text-blue-900 font-semibold">
                    We don't build generic templates — we build tailored software designed for performance, security, and scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Software Services Section */}
      <Section variant="content">
        <Container>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Core Software Services
            </Heading>
            <Text className="text-xl text-gray-700 leading-relaxed">
              Comprehensive development services designed to power your business growth through technology
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {coreServices.map((service, index) => {
              const iconBgColor = 
                service.iconColor === 'orange' ? 'bg-orange' :
                service.iconColor === 'electric' ? 'bg-electric' :
                service.iconColor === 'coral' ? 'bg-coral' : 'bg-electric';
              
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex flex-col items-center mb-4">
                    <div className={`w-16 h-16 ${iconBgColor} rounded-xl flex items-center justify-center mb-4`}>
                      {service.icon}
                    </div>
                    <Heading level={3} className="text-2xl font-bold text-navy text-center">
                      {service.title}
                    </Heading>
                  </div>

                  {/* Description */}
                  <div className="mb-6 flex-grow">
                    <Text className="text-gray-700 leading-relaxed text-center">
                      {service.description}
                    </Text>
                  </div>

                  {/* Includes Section */}
                  <div className="mb-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3 text-center">Includes:</h4>
                      <div className="space-y-2">
                        {service.includes.map((item, idx) => (
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
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Why Choose Stratigo Section */}
      <Section variant="content" className="bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Why Choose Stratigo for Software Development
              </Heading>
              <Text className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We combine technical expertise with strategic thinking to deliver software solutions that drive real business results
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChoose.map((item, index) => {
                const iconBgColor = 
                  item.iconColor === 'orange' ? 'bg-orange' :
                  item.iconColor === 'electric' ? 'bg-electric' :
                  item.iconColor === 'coral' ? 'bg-coral' :
                  item.iconColor === 'green-500' ? 'bg-green-500' : 'bg-electric';
                
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div className="flex-grow">
                        <Heading level={3} className="text-xl font-bold text-navy mb-3">
                          {item.title}
                        </Heading>
                        <Text className="text-gray-700 leading-relaxed">
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

      {/* Transform Your Business Section */}
      <Section variant="content">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
              <div className="text-center mb-10">
                <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                  Transform Your Business Through Technology
                </Heading>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p className="text-xl text-center">
                  Whether you need a website, a mobile app, or a CRM system, Stratigo delivers solutions that integrate seamlessly with your business operations and help you stay ahead in a digital-first world.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Feature 1 */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-16 h-16 bg-orange rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-2">Performance Driven</h4>
                    <p className="text-gray-600">Built for speed and efficiency</p>
                  </div>

                  {/* Feature 2 */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-16 h-16 bg-electric rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-2">Secure by Design</h4>
                    <p className="text-gray-600">Enterprise-grade security standards</p>
                  </div>

                  {/* Feature 3 */}
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <div className="w-16 h-16 bg-coral rounded-xl flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-2">Scalable Solutions</h4>
                    <p className="text-gray-600">Grows with your business needs</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="primary" className="text-lg px-8 py-3">
                    Book a Consultation
                  </Button>
                  <Button variant="secondary" className="text-lg px-8 py-3">
                    Get a Quote
                  </Button>
                </div>
                <p className="mt-6 text-gray-600 text-sm">
                  Start building your next software project with Stratigo today
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section variant="content" className="bg-gradient-to-br from-electric to-blue-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Software Solution?
            </Heading>
            <Text className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Let's transform your business vision into powerful, scalable software
            </Text>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact">
                <Button variant="primary" className="bg-white hover:bg-gray-100 text-electric font-semibold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg">
                  Book a Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary" className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:border-white/80 transition-all duration-200 text-lg">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SoftwareDevelopment;

