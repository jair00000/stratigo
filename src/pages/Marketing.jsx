import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";

const Marketing = () => {
  return (
    <>
      <Helmet>
        <title>Marketing Solutions for Small Businesses | Contractor & Manufacturer Marketing – Stratigo</title>
        <meta name="description" content="Stratigo's Marketing Solutions help contractors, manufacturers, and service-based businesses grow their digital presence. SEO, content marketing, local visibility, and data-driven strategies that deliver real results." />
        <meta name="keywords" content="marketing solutions for small businesses, contractor digital marketing, SEO for manufacturers, service business marketing strategy, business growth solutions" />
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
                  Marketing Solutions
                </Heading>
                <p className="text-white text-left text-base sm:text-lg md:text-xl font-medium text-white/90">
                  Strategic Marketing Built for Real-World Businesses
                </p>
              </div>
              
              <Text className="text-white text-left text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 text-white/90">
                At Stratigo, we combine creativity, analytics, and technology to help businesses grow with purpose.
              </Text>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto text-sm sm:text-base">
                    Get Started
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" className="w-full sm:w-auto text-sm sm:text-base">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Side - Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">SEO</div>
                <div className="text-white/80 text-sm">Search Optimization</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Local</div>
                <div className="text-white/80 text-sm">Market Visibility</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Content</div>
                <div className="text-white/80 text-sm">Strategy & Creation</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Data</div>
                <div className="text-white/80 text-sm">Analytics & Insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <Container>
          <div className="max-w-5xl mx-auto text-center relative z-10 px-4 sm:px-0">
            {/* Badge */}
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric/10 text-electric font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                Who We Help
              </span>
            </div>

            {/* Title */}
            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 sm:mb-8">
              Marketing That Drives Real Growth
            </Heading>

            {/* Description */}
            <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6">
              At Stratigo, our Marketing Solutions are designed for contractors, manufacturers, and service-based businesses that want to grow their digital presence and attract high-quality leads. We help businesses build visibility, credibility, and growth through strategic marketing.
            </Text>
            <Text className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
              Every strategy we create is guided by research and performance data. From SEO and content marketing to local visibility and analytics, our goal is to connect your brand with the right audience and deliver results that drive real business success.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Our Approach Section */}
      <Section variant="content" className="bg-blue-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
              {/* Badge */}
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric/10 text-electric font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                  Our Process
                </span>
              </div>

              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
                Our Approach
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We focus on clarity, precision, and growth. Every marketing campaign begins with understanding your business goals and your audience. We develop strategies that increase visibility, attract leads, and convert visitors into clients.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {/* Step 1 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-electric/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-electric rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                  1
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-electric to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Research & Strategy
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We analyze your competitors, market trends, and audience behavior to build a campaign that stands out.
                </Text>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-orange rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                  2
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Content & Visibility
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We craft optimized content and SEO-focused structures that help your business rank and gain traction.
                </Text>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-coral/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-coral rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                  3
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-coral to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Conversion & Engagement
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Through targeted ads, email marketing, and social campaigns, we turn engagement into measurable results.
                </Text>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                  4
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Performance & Growth
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We continuously track analytics to refine your campaigns for better ROI and long-term success.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Offer Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-electric/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

        <Container>
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
              {/* Badge */}
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange/10 text-orange font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                  Our Services
                </span>
              </div>

              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4 sm:mb-6">
                What We Offer
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Comprehensive marketing solutions designed to help your business grow, attract leads, and build lasting visibility.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {/* SEO */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-electric/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-electric to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow min-w-0">
                    <Heading level={3} className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-2 sm:mb-3">
                      Search Engine Optimization (SEO)
                    </Heading>
                  </div>
                </div>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Improve your ranking on Google with on-page, off-page, and technical SEO. From local visibility to national reach, we make sure your audience finds you first.
                </Text>
              </div>

              {/* Local Marketing */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-orange to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-grow min-w-0">
                    <Heading level={3} className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-2 sm:mb-3">
                      Local Marketing
                    </Heading>
                  </div>
                </div>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Boost your reach in specific locations through local search optimization, business listings, and geo-targeted campaigns — perfect for contractors and service providers.
                </Text>
              </div>

              {/* Content Strategy */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-coral/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-coral to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div className="flex-grow min-w-0">
                    <Heading level={3} className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-2 sm:mb-3">
                      Content Strategy & Branding
                    </Heading>
                  </div>
                </div>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Build authority with professional copywriting, storytelling, and digital branding that connects your message to your audience.
                </Text>
              </div>

              {/* Analytics */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div className="flex-grow min-w-0">
                    <Heading level={3} className="text-lg sm:text-xl md:text-2xl font-bold text-navy mb-2 sm:mb-3">
                      Analytics & Reporting
                    </Heading>
                  </div>
                </div>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Stay in control with transparent analytics dashboards that show traffic, engagement, and growth — so every decision is backed by data.
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Choose Stratigo Marketing Section */}
      <Section variant="content" className="bg-blue-50 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

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
                Why Choose Stratigo Marketing
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Partner with a team that combines industry expertise, data-driven strategies, and a commitment to your long-term success.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-electric/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-electric to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Exclusive B2B Focus
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We specialize in marketing for real-world businesses, not generic templates.
                </Text>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-orange/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Data-Driven Strategies
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Every campaign is measurable and continuously optimized.
                </Text>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-coral/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-coral to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Collaborative Partnership
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  We work alongside you to align strategy with your business goals.
                </Text>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center relative group">
                {/* Individual blur element */}
                <div className="absolute -top-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-green-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <Heading level={3} className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">
                  Secure & Integrated
                </Heading>
                <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Your marketing connects seamlessly with our hosting and CMS ecosystem.
                </Text>
              </div>
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
                Ready to Grow Your Brand?
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed">
                Your business deserves a marketing partner that delivers measurable growth and lasting visibility.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                At Stratigo, we combine SEO expertise, content strategy, and data-driven campaigns to help your brand reach the right audience.
              </Text>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">SEO Excellence</Text>
                <Text className="text-white/70 text-xs sm:text-sm">Rank higher and attract qualified leads</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Data-Driven Strategy</Text>
                <Text className="text-white/70 text-xs sm:text-sm">Every campaign backed by analytics</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Proven Growth</Text>
                <Text className="text-white/70 text-xs sm:text-sm">200%+ average traffic increase</Text>
              </div>
            </div>

            {/* Main CTA */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 border border-white/20">
              <Text className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 sm:mb-8 font-medium">
                Let's build a marketing system that brings you visibility, credibility, and consistent growth.
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
                  Contact Stratigo
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
                  <div className="text-xs sm:text-sm">Marketing Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Free Strategy Call</div>
                  <div className="text-xs sm:text-sm">30-minute marketing audit</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Quick Response</div>
                  <div className="text-xs sm:text-sm">24-hour initial consultation</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Marketing;

