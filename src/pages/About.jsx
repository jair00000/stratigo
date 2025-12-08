import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";

const About = () => {
  const navigate = useNavigate();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToServices = () => {
    // Navigate to home page with hash
    navigate('/', { state: { scrollTo: 'services' } });
  };

  return (
    <>
      {/* Modern Hero Section */}
      <section className="w-full h-[70vh] bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${HeroImage})` }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-overlay"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left text-white">
              <div className="mb-6">
                <Heading level={1} className="text-white text-left text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
                  About Stratigo
                </Heading>
                <p className="text-white text-left text-lg md:text-xl font-medium text-white/90">
                  Where technology and strategy unite to create meaningful growth for businesses.
                </p>
              </div>
              
              <Text className="text-white text-left text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                We're your strategic growth partner in the digital world.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="primary" 
                    className="w-full sm:w-auto bg-gradient-to-r from-electric to-blue-600 hover:from-electric/90 hover:to-blue-600/90 text-white font-bold py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl shadow-2xl hover:shadow-electric/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group text-xs sm:text-sm md:text-base"
                    onClick={scrollToContact}
                  >
                    Get in Touch
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="w-full sm:w-auto bg-white hover:bg-white/90 text-navy font-semibold py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl transform hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
                    onClick={navigateToServices}
                  >
                    Our Services
                  </Button>
                </div>
              </div>

            {/* Right Side - Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Quality</div>
                <div className="text-white/80 text-sm">Premium Service Quality</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Expert Support</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Guaranteed Project Delivery</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Growth</div>
                <div className="text-white/80 text-sm">Business Growth Focus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <Section className="bg-blue-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-electric/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          {/* About Stratigo */}
          <div className="max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
            {/* Badge */}
            <div className="text-center mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric/10 text-electric font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                Who We Are
              </span>
            </div>

            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 sm:mb-8 text-center">
              Who We Are
            </Heading>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 border border-white/50 shadow-lg">
              <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-left">
                <p className="flex items-start gap-2 sm:gap-3 md:gap-4">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-electric flex-shrink-0 mt-0.5 sm:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>At Stratigo, we believe that technology and strategy move forward together. We are a team of thinkers, builders, and creators dedicated to helping businesses achieve meaningful growth through Marketing Solutions, Software Development, and Hosting Services.</span>
                </p>
                <p className="text-left">
                  In today's fast-evolving digital marketplace, a brand's online presence defines its credibility. That's why we design solutions that go beyond appearance — delivering systems built for performance, security, and measurable business impact. Every project we create is guided by precision, transparency, and collaboration, ensuring long-term value for our clients.
                </p>
                <p className="text-left">
                  More than just a service provider, Stratigo is your strategic growth partner. We work side by side with businesses to transform ideas into measurable results. Through innovation, trust, and technical excellence, we empower brands to scale confidently and succeed in the global digital economy.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
            {/* Badge */}
            <div className="text-center mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric/10 text-electric font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                Our Purpose
              </span>
            </div>

            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-8 sm:mb-10 md:mb-12 text-center">
              Our Purpose
            </Heading>
            
            <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
              {/* Mission */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-electric/10 to-blue-400/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-electric to-blue-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <Heading level={3} className="text-xl sm:text-2xl md:text-3xl font-bold text-navy">
                      Our Mission
                    </Heading>
                  </div>
                  <Text className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    To deliver innovative, reliable, and results-driven digital solutions that empower businesses to grow, adapt, and lead in their industries. Stratigo integrates marketing, software, and hosting services into a unified ecosystem focused on measurable performance and long-term client success.
                  </Text>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <Heading level={3} className="text-xl sm:text-2xl md:text-3xl font-bold text-navy">
                      Our Vision
                    </Heading>
                  </div>
                  <Text className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    To become a trusted global partner for businesses by creating transparent, growth-oriented, and future-ready digital solutions that inspire confidence, accelerate progress, and transform how brands thrive online.
                  </Text>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
            {/* Badge */}
            <div className="text-center mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-electric/10 text-electric font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider">
                What Drives Us
              </span>
            </div>

            <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-8 sm:mb-10 md:mb-12 text-center">
              What Drives Us
            </Heading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Partnership */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-electric/10 to-blue-400/10 rounded-full blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-electric to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">Partnership</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We collaborate closely with clients to achieve shared goals and long-term success.
                  </p>
                </div>
              </div>

              {/* Transparency */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">Transparency</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We maintain open communication and full visibility throughout every project.
                  </p>
                </div>
              </div>

              {/* Growth */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">Growth</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We're driven by continuous improvement — for our clients, our team, and our technology.
                  </p>
                </div>
              </div>

              {/* Trust */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">Trust</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We build lasting relationships founded on reliability, integrity, and accountability.
                  </p>
                </div>
              </div>

              {/* Security */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden md:col-span-2 lg:col-span-1 lg:col-start-2">
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-400/10 to-orange-400/10 rounded-full blur-xl"></div>
                <div className="relative z-10 text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-navy mb-3 sm:mb-4">Security</h4>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    We prioritize the protection of client data and digital assets, ensuring every solution we deliver meets the highest standards of safety and privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Modern CTA Section */}
      <section className="w-full bg-gradient-to-br from-navy via-navy to-electric py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Enhanced decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-electric/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-electric/10 to-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-block mb-4 sm:mb-6">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider border border-white/20">
              Get Started Today
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Grow Your Business?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's work together to build something great. Whether you need marketing, software development, or hosting, Stratigo is here to help you succeed.
          </p>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2">Proven Results</h3>
              <p className="text-xs sm:text-sm text-white/80">Guaranteed project delivery with measurable growth</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2">Strategic Partnership</h3>
              <p className="text-xs sm:text-sm text-white/80">We work as an extension of your team for long-term success</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1.5 sm:mb-2">Expert Support</h3>
              <p className="text-xs sm:text-sm text-white/80">Dedicated support from our experienced team of professionals</p>
            </div>
          </div>

          {/* Main CTA Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-12 border border-white/20 mb-6 sm:mb-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8">
                From concept to completion, we're here to turn your vision into reality with cutting-edge technology and strategic thinking.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base md:text-lg">
                    Start a Project
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </Link>
                <button className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl backdrop-blur-sm border border-white/30 hover:border-white/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-sm sm:text-base md:text-lg">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-electric/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base">Project Inquiries</p>
              <p className="text-white/80 text-xs sm:text-sm">hello@stratigo.io</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-electric/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base">Free Consultation</p>
              <p className="text-white/80 text-xs sm:text-sm">30-min strategy call</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-electric/20 rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-white font-semibold text-sm sm:text-base">Quick Response</p>
              <p className="text-white/80 text-xs sm:text-sm">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
