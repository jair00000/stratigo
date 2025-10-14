import React from "react";
import Section, { Container, Heading, Text } from "../components/Section";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const Terms = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Helmet>
        <title>Terms of Service | Stratigo</title>
        <meta 
          name="description" 
          content="Review Stratigo's Terms of Service for our Marketing, Software Development, and Hosting Services. Learn about our policies, client responsibilities, and service agreements." 
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
              Terms of Service
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-lg">
              Last Updated: {lastUpdated}
            </Text>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <Section variant="content">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-8">
                <Text className="text-lg text-gray-700 leading-relaxed">
                  Welcome to Stratigo Software Development Services ("Stratigo," "we," "our," or "us").
                  By accessing or using our website and services, you ("Client," "you," or "your") agree to comply with and be bound by these Terms of Service. Please read them carefully before engaging with our services.
                </Text>
              </div>

              {/* 1. Services Overview */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  1. Services Overview
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Stratigo provides professional Marketing Solutions, Software Development, and Hosting Services designed for business clients.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  Each project is tailored according to an agreed proposal, quotation, or contract outlining deliverables, timelines, and costs.
                </Text>
              </div>

              {/* 2. Acceptance of Terms */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  2. Acceptance of Terms
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  By using our website or engaging our services, you acknowledge that you have read, understood, and agreed to these Terms.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  If you do not agree, please do not access or use our services.
                </Text>
              </div>

              {/* 3. Client Responsibilities */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  3. Client Responsibilities
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  You agree to:
                </Text>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Provide accurate and complete information required for project execution.</li>
                  <li>Review and approve deliverables within agreed timelines.</li>
                  <li>Comply with applicable laws, including copyright and data protection regulations.</li>
                  <li>Not upload or transmit harmful, unlawful, or unauthorized content through our systems.</li>
                </ul>
              </div>

              {/* 4. Payment & Billing */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  4. Payment & Billing
                </Heading>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Pricing for services (Hosting, Marketing, Software Development) is detailed in your proposal or subscription plan.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Payments are due upon invoice, unless otherwise specified.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Monthly or annual hosting subscriptions renew automatically unless canceled before the renewal date.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Failure to pay may result in suspension or termination of hosting and support services.
                    </Text>
                  </li>
                </ul>
              </div>

              {/* 5. Intellectual Property */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  5. Intellectual Property
                </Heading>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      All custom software, websites, and marketing materials created by Stratigo remain our intellectual property until full payment is received.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Upon payment completion, ownership of the final deliverables is transferred to the client, except for licensed or third-party components.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Stratigo reserves the right to display completed projects in our portfolio unless confidentiality is requested in writing.
                    </Text>
                  </li>
                </ul>
              </div>

              {/* 6. Hosting & Data */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  6. Hosting & Data
                </Heading>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Stratigo provides managed hosting through secure Virtual Private Servers (VPS).
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Clients are responsible for their domain ownership and renewals.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      We perform regular backups and apply security measures, but we cannot guarantee absolute data security or uninterrupted service.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      In the event of data loss or system interruption, Stratigo will make reasonable efforts to restore services promptly.
                    </Text>
                  </li>
                </ul>
              </div>

              {/* 7. Confidentiality */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  7. Confidentiality
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  Both parties agree to maintain the confidentiality of proprietary and sensitive information shared during the course of the project.
                  This obligation continues after the termination of services.
                </Text>
              </div>

              {/* 8. Limitation of Liability */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  8. Limitation of Liability
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Stratigo shall not be liable for:
                </Text>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Any indirect, incidental, or consequential damages arising from the use or inability to use our services.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      Losses due to external factors beyond our control, including force majeure events, third-party outages, or client-side errors.
                    </Text>
                  </li>
                </ul>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Text className="text-blue-900 font-medium">
                    Our maximum liability shall not exceed the total amount paid by the client for the service in question.
                  </Text>
                </div>
              </div>

              {/* 9. Termination */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  9. Termination
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Either party may terminate an ongoing service or contract with written notice.
                  Upon termination:
                </Text>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                  <li>Outstanding balances must be paid.</li>
                  <li>Hosting access will be removed after 30 days unless renewed.</li>
                  <li>Clients may request a copy of site data or backups within this period.</li>
                </ul>
              </div>

              {/* 10. Privacy & Data Protection */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  10. Privacy & Data Protection
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Stratigo collects and processes data in accordance with our <a href="/privacy" className="text-electric hover:underline font-medium">Privacy Policy</a>.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  We do not sell, rent, or disclose client information to third parties except as required by law or necessary to provide services.
                </Text>
              </div>

              {/* 11. Revisions & Updates */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  11. Revisions & Updates
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We may update these Terms periodically to reflect changes in our services or legal requirements.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  The latest version will always be posted on our website with the effective date.
                </Text>
              </div>

              {/* 12. Contact Information */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  12. Contact Information
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  If you have questions or concerns about these Terms, please contact us:
                </Text>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-electric mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href="mailto:legal@stratigo.io" className="text-electric hover:underline font-medium">
                        legal@stratigo.io
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
                    By using Stratigo's services, you acknowledge that you have read and agree to these Terms of Service.
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

export default Terms;

