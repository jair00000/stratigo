import React from "react";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";

const Marketing = () => {
  return (
    <>
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
              Marketing Solutions
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-xl leading-relaxed mb-4">
              Strategic Marketing Built for Real-World Businesses
            </Text>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-lg leading-relaxed opacity-90">
              At Stratigo, we combine creativity, analytics, and technology to help businesses grow with purpose.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="primary">
                Get Started
              </Button>
              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section variant="content">
        <Container>
          <div className="max-w-5xl mx-auto text-center">
            <Text className="text-xl text-gray-700 leading-relaxed mb-6">
              Our Marketing Solutions are built for contractors, manufacturers, and service-based businesses that want to increase visibility, attract qualified leads, and strengthen their brand in the digital space.
            </Text>
            <Text className="text-lg text-gray-600 leading-relaxed">
              We don't believe in guesswork — every strategy we design is data-driven, measurable, and goal-oriented.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Our Approach Section */}
      <Section variant="content" className="bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Approach
              </Heading>
              <Text className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                We focus on clarity, precision, and long-term growth. Every marketing campaign begins with understanding your business goals and your market — then we build strategies that convert traffic into customers.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-electric rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Research & Strategy
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  We analyze your competitors, market trends, and audience behavior to build a campaign that stands out.
                </Text>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Content & Visibility
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  We craft optimized content and SEO-focused structures that help your business rank and gain traction.
                </Text>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-coral rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Conversion & Engagement
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  Through targeted ads, email marketing, and social campaigns, we turn engagement into measurable results.
                </Text>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Performance & Growth
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  We continuously track analytics to refine your campaigns for better ROI and long-term success.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Offer Section */}
      <Section variant="content">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                What We Offer
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* SEO */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Search Engine Optimization (SEO)
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  Improve your ranking on Google with on-page, off-page, and technical SEO. From local visibility to national reach, we make sure your audience finds you first.
                </Text>
              </div>

              {/* Local Marketing */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Local Marketing
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  Boost your reach in specific locations through local search optimization, business listings, and geo-targeted campaigns — perfect for contractors and service providers.
                </Text>
              </div>

              {/* Content Strategy */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-coral rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Content Strategy & Branding
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  Build authority with professional copywriting, storytelling, and digital branding that connects your message to your audience.
                </Text>
              </div>

              {/* Analytics */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <Heading level={3} className="text-2xl font-bold text-navy mb-3">
                      Analytics & Reporting
                    </Heading>
                  </div>
                </div>
                <Text className="text-gray-700 leading-relaxed">
                  Stay in control with transparent analytics dashboards that show traffic, engagement, and growth — so every decision is backed by data.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Stratigo Marketing Section */}
      <Section variant="content" className="bg-gray-50">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Why Choose Stratigo Marketing
              </Heading>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-electric rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Exclusive B2B Focus
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  We specialize in marketing for real-world businesses, not generic templates.
                </Text>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Data-Driven Strategies
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  Every campaign is measurable and continuously optimized.
                </Text>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-coral rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Collaborative Partnership
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  We work alongside you to align strategy with your business goals.
                </Text>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <Heading level={3} className="text-xl font-bold text-navy mb-4">
                  Secure & Integrated
                </Heading>
                <Text className="text-gray-700 leading-relaxed">
                  Your marketing connects seamlessly with our hosting and CMS ecosystem.
                </Text>
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
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <div className="mb-12">
              <Heading level={2} className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Growing with Stratigo
              </Heading>
              <Text className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
                Ready to attract more clients, improve visibility, and grow your brand?
              </Text>
              <Text className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                Let's build a marketing system that delivers real results.
              </Text>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="primary" className="bg-white hover:bg-gray-100 text-electric font-semibold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-lg">
                Book a Consultation
              </Button>
              <Button variant="secondary" className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:border-white/80 transition-all duration-200 text-lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Marketing;

