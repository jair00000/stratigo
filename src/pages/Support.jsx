import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const Support = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const supportCategories = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      title: "Hosting Support",
      description: "Server issues, uptime, backups, SSL certificates, and VPS management",
      iconColor: "bg-electric",
      links: [
        { text: "Check Server Status", url: "#" },
        { text: "Backup & Restore", url: "#" },
        { text: "SSL Certificate Issues", url: "#" },
        { text: "Performance Optimization", url: "#" }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Technical Support",
      description: "Website issues, errors, integrations, and custom development questions",
      iconColor: "bg-orange",
      links: [
        { text: "Troubleshooting Guide", url: "#" },
        { text: "API Documentation", url: "#" },
        { text: "Error Logs Access", url: "#" },
        { text: "Development Resources", url: "#" }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: "Billing & Account",
      description: "Invoices, payments, plan changes, and account management",
      iconColor: "bg-coral",
      links: [
        { text: "View Invoices", url: "#" },
        { text: "Update Payment Method", url: "#" },
        { text: "Upgrade/Downgrade Plan", url: "#" },
        { text: "Cancel Service", url: "#" }
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Security & Privacy",
      description: "Security concerns, data protection, compliance, and privacy inquiries",
      iconColor: "bg-green-500",
      links: [
        { text: "Security Best Practices", url: "#" },
        { text: "Report Security Issue", url: "#" },
        { text: "GDPR Compliance", url: "#" },
        { text: "Data Privacy Request", url: "#" }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Getting Started Guide",
      description: "New to Stratigo? Learn how to set up your account and deploy your first project",
      icon: "🚀",
      link: "#"
    },
    {
      title: "Service Status",
      description: "Check real-time status of all Stratigo services and infrastructure",
      icon: "📊",
      link: "#"
    },
    {
      title: "Knowledge Base",
      description: "Browse our comprehensive library of tutorials and documentation",
      icon: "📚",
      link: "#"
    },
    {
      title: "Video Tutorials",
      description: "Watch step-by-step video guides for common tasks and features",
      icon: "🎥",
      link: "#"
    }
  ];

  const commonIssues = [
    {
      question: "How do I access my hosting control panel?",
      answer: "Login credentials and control panel access details are sent to your registered email upon account activation. Check your spam folder if you haven't received them."
    },
    {
      question: "My website is down. What should I do?",
      answer: "First, check our Service Status page. If all systems are operational, contact support with your domain name and a description of the issue for immediate assistance."
    },
    {
      question: "How do I update my DNS settings?",
      answer: "DNS changes are made through your domain registrar's control panel. We can provide you with the correct DNS records to point to your Stratigo hosting."
    },
    {
      question: "When will my backup be ready?",
      answer: "Automated backups run weekly. If you've requested a manual backup or restore, it typically completes within 2-4 hours during business hours."
    },
    {
      question: "How do I upgrade my hosting plan?",
      answer: "Contact our billing team or submit a ticket through your account dashboard. Plan upgrades take effect immediately upon payment confirmation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support Center | Stratigo Help & Resources</title>
        <meta 
          name="description" 
          content="Get help with Stratigo services. Access support, documentation, FAQs, and contact our technical team for hosting, development, and marketing assistance." 
        />
        <meta 
          name="keywords" 
          content="Stratigo support, technical help, hosting support, customer service, help center, documentation" 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
        
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-4 sm:px-6 md:px-12">
            <Heading level={1} variant="hero" className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6">
              Support Center
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-base sm:text-lg md:text-xl mb-6 sm:mb-8">
              How can we help you today?
            </Text>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, guides, or FAQs..."
                  className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 pr-10 sm:pr-12 rounded-lg text-sm sm:text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-electric"
                />
                <svg className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours Banner */}
      <Section variant="content" className="bg-blue-50 py-4 sm:py-5 md:py-6">
        <Container>
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-electric mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <Text className="text-navy font-semibold text-sm sm:text-base">Support Hours</Text>
                  <Text className="text-gray-600 text-xs sm:text-sm">Monday - Friday, 9:00 AM - 6:00 PM CST</Text>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button variant="primary" className="w-full sm:w-auto text-sm sm:text-base">Contact Support</Button>
                </Link>
                <a href="mailto:support@stratigo.io" className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full sm:w-auto text-sm sm:text-base">Email Us</Button>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Support Categories */}
      <Section variant="content">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy mb-3 sm:mb-4">
                What do you need help with?
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl text-gray-600">
                Choose a category to find answers and resources
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {supportCategories.map((category, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 ${category.iconColor} rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0`}>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white">
                        {React.cloneElement(category.icon, { className: "w-full h-full text-white" })}
                      </div>
                    </div>
                    <div className="flex-grow min-w-0">
                      <Heading level={3} className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-1.5 sm:mb-2">
                        {category.title}
                      </Heading>
                      <Text className="text-sm sm:text-base text-gray-600">
                        {category.description}
                      </Text>
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    {category.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="flex items-center text-sm sm:text-base text-electric hover:underline transition-colors group"
                      >
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section variant="content" className="bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Heading level={2} className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">
                Quick Links & Resources
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="bg-white rounded-lg sm:rounded-xl shadow border border-gray-200 p-4 sm:p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                  <Heading level={4} className="text-base sm:text-lg font-bold text-navy mb-1.5 sm:mb-2">
                    {item.title}
                  </Heading>
                  <Text className="text-gray-600 text-xs sm:text-sm">
                    {item.description}
                  </Text>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Common Issues / FAQ */}
      <Section variant="content">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Heading level={2} className="text-2xl sm:text-3xl font-bold text-navy mb-3 sm:mb-4">
                Common Questions
              </Heading>
              <Text className="text-sm sm:text-base text-gray-600">
                Quick answers to frequently asked questions
              </Text>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {commonIssues.map((item, index) => (
                <details key={index} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
                  <summary className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between">
                    <Text className="font-semibold text-sm sm:text-base text-navy flex items-center flex-1 min-w-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.question}
                    </Text>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform ml-2 sm:ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
                    <Text className="text-sm sm:text-base text-gray-700">
                      {item.answer}
                    </Text>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 text-center">
              <Link to="/faq">
                <Button variant="secondary" className="text-sm sm:text-base">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Options */}
      <Section variant="content" className="bg-navy text-white">
        <Container>
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <Heading level={2} className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                Still Need Help?
              </Heading>
              <Text className="text-gray-300 text-base sm:text-lg">
                Our support team is here to assist you
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {/* Email Support */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-electric mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                  Email Support
                </Heading>
                <Text className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Response within 24 hours
                </Text>
                <a href="mailto:support@stratigo.io" className="text-electric hover:underline font-medium text-sm sm:text-base">
                  support@stratigo.io
                </a>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-electric mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                  Submit a Ticket
                </Heading>
                <Text className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                  Detailed issue reporting
                </Text>
                <Link to="/contact" className="text-electric hover:underline font-medium text-sm sm:text-base">
                  Open Support Ticket
                </Link>
              </div>

              {/* Emergency Support */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 text-center">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-red-400 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
                  Critical Issues
                </Heading>
                <Text className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
                  For service outages only
                </Text>
                <Text className="text-red-300 font-medium text-sm sm:text-base">
                  Mark ticket as "Critical"
                </Text>
              </div>
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 p-4 sm:p-5 md:p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-start">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <Text className="text-white font-semibold mb-1 text-sm sm:text-base">Before Contacting Support</Text>
                  <Text className="text-gray-300 text-xs sm:text-sm">
                    Please check our <Link to="/sla" className="text-electric hover:underline">Service Level Agreement</Link> for response time expectations and <Link to="/faq" className="text-electric hover:underline">FAQ page</Link> for common solutions.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Support;

