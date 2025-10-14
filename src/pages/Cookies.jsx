import React from "react";
import Section, { Container, Heading, Text } from "../components/Section";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const Cookies = () => {
  const lastUpdated = "January 15, 2025";

  return (
    <>
      <Helmet>
        <title>Cookie Policy | Stratigo Software Development Services</title>
        <meta 
          name="description" 
          content="Read Stratigo's Cookie Policy to understand how we use cookies for analytics, security, and site performance improvement." 
        />
        <meta 
          name="keywords" 
          content="Stratigo cookie policy, cookies and privacy, GDPR compliance, analytics cookies, website tracking, cookie consent" 
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
              Cookie Policy
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-lg">
              Last Updated: {lastUpdated}
            </Text>
          </div>
        </div>
      </section>

      {/* Cookie Policy Content */}
      <Section variant="content">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-8">
                <Text className="text-lg text-gray-700 leading-relaxed mb-4">
                  This Cookie Policy explains how Stratigo Software Development Services ("Stratigo," "we," "our," or "us") uses cookies and similar technologies on our website <a href="https://www.stratigo.io" className="text-electric hover:underline font-medium">www.stratigo.io</a> ("Website").
                  It also describes your choices regarding these technologies.
                </Text>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <Text className="text-blue-900 font-medium">
                    By continuing to browse or use our Website, you agree to our use of cookies in accordance with this Policy.
                  </Text>
                </div>
              </div>

              {/* 1. What Are Cookies? */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  1. What Are Cookies?
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  Cookies are small text files stored on your device (computer, tablet, or phone) when you visit a website.
                  They help the site recognize your device, store preferences, and enhance your browsing experience.
                </Text>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Text className="text-green-900">
                    Cookies are not viruses or programs — they're simple identifiers that enable functionality, analytics, and personalization.
                  </Text>
                </div>
              </div>

              {/* 2. How We Use Cookies */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  2. How We Use Cookies
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-6">
                  Stratigo uses cookies to improve performance, enhance user experience, and analyze traffic.
                  We categorize our cookies as follows:
                </Text>

                {/* a. Essential Cookies */}
                <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3">a. Essential Cookies</h3>
                      <Text className="text-gray-700 leading-relaxed mb-3">
                        These cookies are required for our Website to function properly.
                        They allow you to:
                      </Text>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-gray-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          <Text className="text-gray-700">Access secure areas of the site</Text>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-gray-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          <Text className="text-gray-700">Submit forms and use navigation features</Text>
                        </li>
                      </ul>
                      <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
                        <Text className="text-yellow-900 text-sm font-medium">
                          You cannot disable these cookies without affecting basic functionality.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                {/* b. Performance & Analytics Cookies */}
                <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <svg className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3">b. Performance & Analytics Cookies</h3>
                      <Text className="text-gray-700 leading-relaxed mb-3">
                        Used to collect information on how visitors use our Website (e.g., pages visited, time spent).
                        We use this data to:
                      </Text>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <Text className="text-gray-700">Improve site performance</Text>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <Text className="text-gray-700">Identify usability issues</Text>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <Text className="text-gray-700">Optimize content and layout</Text>
                        </li>
                      </ul>
                      <div className="mt-3">
                        <Text className="text-gray-600 text-sm">
                          Tools we may use include Google Analytics and other performance trackers.
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>

                {/* c. Functional Cookies */}
                <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <svg className="w-6 h-6 text-purple-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3">c. Functional Cookies</h3>
                      <Text className="text-gray-700 leading-relaxed mb-3">
                        Enable enhanced functionality such as remembering preferences (language, form data, etc.)
                      </Text>
                      <Text className="text-gray-600 text-sm">
                        Disabling these may affect how the Website performs for you.
                      </Text>
                    </div>
                  </div>
                </div>

                {/* d. Marketing & Advertising Cookies */}
                <div className="mb-4 bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-3">
                    <svg className="w-6 h-6 text-orange mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-xl font-bold text-navy mb-3">d. Marketing & Advertising Cookies</h3>
                      <Text className="text-gray-700 leading-relaxed mb-3">
                        Used occasionally to measure the effectiveness of marketing campaigns.
                        They help us display relevant ads or track referrals from third-party sources (if enabled).
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Third-Party Cookies */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  3. Third-Party Cookies
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  Some cookies on our Website are set by trusted third-party providers such as:
                </Text>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      <strong>Google Analytics</strong> – for visitor tracking and usage reports
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      <strong>Google Ads or Meta Pixel</strong> (if applicable) – for ad conversions and retargeting
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      <strong>Hosting and CDN providers</strong> – for faster website delivery
                    </Text>
                  </li>
                </ul>
                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <Text className="text-yellow-900">
                    These third parties have their own privacy and cookie policies.
                    We recommend reviewing them to understand how your data is processed.
                  </Text>
                </div>
              </div>

              {/* 4. How to Manage or Disable Cookies */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  4. How to Manage or Disable Cookies
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  You have full control over your cookie preferences:
                </Text>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <Text className="text-gray-700 leading-relaxed">
                      You can accept or decline cookies via the pop-up banner when first visiting our site.
                    </Text>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-electric mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <Text className="text-gray-700 leading-relaxed mb-3">
                        You can also disable cookies anytime by adjusting your browser settings:
                      </Text>
                      <div className="ml-4 space-y-2">
                        <div className="p-3 bg-gray-100 rounded">
                          <Text className="text-gray-800"><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and Other Site Data</Text>
                        </div>
                        <div className="p-3 bg-gray-100 rounded">
                          <Text className="text-gray-800"><strong>Edge:</strong> Settings → Cookies and Site Permissions</Text>
                        </div>
                        <div className="p-3 bg-gray-100 rounded">
                          <Text className="text-gray-800"><strong>Safari:</strong> Preferences → Privacy</Text>
                        </div>
                        <div className="p-3 bg-gray-100 rounded">
                          <Text className="text-gray-800"><strong>Firefox:</strong> Options → Privacy & Security</Text>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                  <Text className="text-orange-900 font-medium">
                    Note: Disabling cookies may affect your ability to use certain site features.
                  </Text>
                </div>
              </div>

              {/* 5. Data Retention */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  5. Data Retention
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We retain cookie-related data for as long as necessary to achieve the stated purposes.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  Analytics data is typically anonymized and stored only for statistical reporting.
                </Text>
              </div>

              {/* 6. Updates to This Policy */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  6. Updates to This Policy
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-3">
                  We may update this Cookie Policy periodically to reflect changes in technology or law.
                </Text>
                <Text className="text-gray-700 leading-relaxed">
                  Any updates will be posted on this page with an updated revision date.
                </Text>
              </div>

              {/* 7. Contact Us */}
              <div className="mb-8">
                <Heading level={2} className="text-2xl font-bold text-navy mb-4">
                  7. Contact Us
                </Heading>
                <Text className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this Cookie Policy or our data practices, please contact us:
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
                    By using our Website, you consent to our use of cookies as described in this Cookie Policy.
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

export default Cookies;

