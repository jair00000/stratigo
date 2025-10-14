import React from "react";
import Section, { Container, Heading, Text } from "../components/Section";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const Privacy = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Stratigo Software Development Services</title>
        <meta 
          name="description" 
          content="Read Stratigo's Privacy Policy. Learn how we collect, protect, and use your data across our marketing, software development, and hosting services." 
        />
        <meta 
          name="keywords" 
          content="Stratigo privacy policy, data protection, hosting data privacy, GDPR compliance, software company privacy, business data handling, secure digital services" 
        />
      </Helmet>

      {/* Hero Section */}
      <section 
        className="w-full min-h-[60vh] bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
        
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="max-w-4xl text-center text-white px-12">
            <Heading level={1} variant="hero" className="text-white text-center text-5xl md:text-6xl mb-6">
              Privacy Policy
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-lg">
              Last Updated: {lastUpdated}
            </Text>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <Section variant="content">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-8">
                <Text className="text-lg text-gray-700 leading-relaxed">
                  At Stratigo Software Development Services ("Stratigo," "we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us.
                  This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website, contact us, or use our services.
                </Text>
              </div>

              {/* 1. Information We Collect */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  1. Information We Collect
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  We collect the following types of information:
                </Text>

                {/* a. Personal Information */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy mb-3">a. Personal Information</h3>
                  <Text className="text-gray-700 leading-relaxed mb-3">
                    When you contact or engage with us, we may collect:
                  </Text>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-gray-700 leading-relaxed">
                        Name, company name, and contact details (email, phone number)
                      </Text>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-gray-700 leading-relaxed">
                        Business or project information you submit via forms or emails
                      </Text>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-gray-700 leading-relaxed">
                        Billing and payment information for invoicing purposes
                      </Text>
                    </li>
                  </ul>
                </div>

                {/* b. Technical Information */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-navy mb-3">b. Technical Information</h3>
                  <Text className="text-gray-700 leading-relaxed mb-3">
                    Automatically collected through our website or hosting systems:
                  </Text>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-gray-700 leading-relaxed">
                        IP address and device information
                      </Text>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-gray-700 leading-relaxed">
                        Browser type and operating system
                      </Text>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Text className="text-gray-700 leading-relaxed">
                        Pages visited, time spent, and referral source (analytics)
                      </Text>
                    </li>
                  </ul>
                </div>

                {/* c. Client Data */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-navy mb-3">c. Client Data</h3>
                  <Text className="text-gray-700 leading-relaxed">
                    If you are a hosting or software client, we may process limited data stored or transmitted through our managed servers and systems solely for maintenance, security, or support purposes.
                  </Text>
                </div>
              </div>

              {/* 2. How We Use Your Information */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  2. How We Use Your Information
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We use the information we collect to:
                </Text>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Provide, manage, and improve our services
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Communicate with you regarding inquiries, projects, or support
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Process billing and maintain client records
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Enhance website functionality and user experience
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Comply with legal and contractual obligations
                    </Text>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Text className="text-green-900 font-semibold text-center">
                    We do not sell or rent your personal information to third parties.
                  </Text>
                </div>
              </div>

              {/* 3. Data Security */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  3. Data Security
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We apply industry-standard security measures, including:
                </Text>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Encrypted data transmission (SSL/HTTPS)
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Secure Virtual Private Servers (VPS) for hosting clients
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Regular backups and access control systems
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Continuous monitoring to prevent unauthorized access
                    </Text>
                  </li>
                </ul>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Text className="text-yellow-900 text-sm">
                    While we take all reasonable precautions, no system is completely secure. Stratigo cannot guarantee absolute protection from cyber incidents or external threats, but we respond promptly to any suspected breaches.
                  </Text>
                </div>
              </div>

              {/* 4. Cookies and Analytics */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  4. Cookies and Analytics
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Our website uses cookies and analytics tools (like Google Analytics) to:
                </Text>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Understand website traffic and performance
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Improve content relevance and navigation
                    </Text>
                  </li>
                </ul>
                <Text className="text-gray-700 leading-relaxed">
                  You can control or disable cookies in your browser settings. No personally identifiable data is stored in these analytics.
                </Text>
              </div>

              {/* 5. Data Retention */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  5. Data Retention
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We retain personal data only as long as necessary to:
                </Text>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Fulfill the purposes outlined in this Policy
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Comply with legal, accounting, or reporting obligations
                    </Text>
                  </li>
                </ul>
                <Text className="text-gray-700 leading-relaxed">
                  Client data related to hosting or software projects may be deleted upon termination or by written request.
                </Text>
              </div>

              {/* 6. Your Rights */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  6. Your Rights
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Depending on your location, you may have rights to:
                </Text>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Access, correct, or delete your personal data
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Withdraw consent for marketing communications
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Request a copy of your stored information
                    </Text>
                  </li>
                </ul>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Text className="text-blue-900">
                    To exercise your rights, please contact us at <a href="mailto:privacy@stratigo.io" className="text-electric hover:underline font-medium">privacy@stratigo.io</a>
                  </Text>
                </div>
              </div>

              {/* 7. Sharing of Information */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  7. Sharing of Information
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We may share limited data with:
                </Text>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Service providers assisting in payment processing, analytics, or infrastructure management
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Legal or regulatory authorities when required by law
                    </Text>
                  </li>
                </ul>
                <Text className="text-gray-700 leading-relaxed">
                  All third-party partners are bound by confidentiality and data protection agreements.
                </Text>
              </div>

              {/* 8. International Data Transfers */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  8. International Data Transfers
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  As a digital services provider, Stratigo may store or process data on servers located in different countries, including the Philippines and the United States.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  We ensure all data transfers comply with applicable data protection laws (GDPR, DPA, etc.) through secure and lawful means.
                </Text>
              </div>

              {/* 9. Updates to This Policy */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  9. Updates to This Policy
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We may update this Privacy Policy periodically to reflect service changes or regulatory requirements.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  Revisions will be posted on this page with an updated "Last Modified" date.
                </Text>
              </div>

              {/* 10. Contact Us */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  10. Contact Us
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  For questions, data requests, or privacy concerns, please reach out to:
                </Text>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:privacy@stratigo.io" className="text-electric hover:underline font-medium">
                        privacy@stratigo.io
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <a href="https://www.stratigo.io" className="text-electric hover:underline font-medium">
                        www.stratigo.io
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="pt-8 border-t border-gray-200">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <Text className="text-blue-900 text-center">
                    By using Stratigo's services, you acknowledge that you have read and understand this Privacy Policy.
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

export default Privacy;

