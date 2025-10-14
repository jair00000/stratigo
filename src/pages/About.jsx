import React from "react";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        {/* Overlay */}
        <div className="hero-overlay"></div>
        
        {/* Content */}
        <div className="hero-content">
          <div className="hero-content-inner">
            <Heading level={1} variant="hero" className="text-white text-center text-6xl md:text-7xl mb-8">
              About Stratigo
            </Heading>
            
            <Text variant="hero" className="text-white text-center max-w-none mx-auto text-xl leading-relaxed">
              Where technology and strategy unite to create meaningful growth for businesses.
            </Text>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="primary">
                Get in Touch
              </Button>
              <Button variant="secondary">
                Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <Section variant="content">
        <Container>
          {/* About Stratigo */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-8">
              Who We Are
            </Heading>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Stratigo, we believe that technology and strategy move forward together. We are a team of thinkers, builders, and creators dedicated to helping businesses achieve meaningful growth through Marketing Solutions, Software Development, and Hosting Services.
              </p>
              <p>
                In today's fast-evolving digital marketplace, a brand's online presence defines its credibility. That's why we design solutions that go beyond appearance — delivering systems built for performance, security, and measurable business impact. Every project we create is guided by precision, transparency, and collaboration, ensuring long-term value for our clients.
              </p>
              <p>
                More than just a service provider, Stratigo is your strategic growth partner. We work side by side with businesses to transform ideas into measurable results. Through innovation, trust, and technical excellence, we empower brands to scale confidently and succeed in the global digital economy.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-electric/10 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Heading level={3} className="text-3xl font-bold text-navy">
                  Our Mission
                </Heading>
              </div>
              <Text className="text-lg text-gray-700 leading-relaxed">
                To deliver innovative, reliable, and results-driven digital solutions that empower businesses to grow, adapt, and lead in their industries. Stratigo integrates marketing, software, and hosting services into a unified ecosystem focused on measurable performance and long-term client success.
              </Text>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <Heading level={3} className="text-3xl font-bold text-navy">
                  Our Vision
                </Heading>
              </div>
              <Text className="text-lg text-gray-700 leading-relaxed">
                To become a trusted global partner for businesses by creating transparent, growth-oriented, and future-ready digital solutions that inspire confidence, accelerate progress, and transform how brands thrive online.
              </Text>
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center">
              Our Core Values
            </Heading>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Partnership */}
              <div className="text-center p-6 bg-gradient-to-b from-electric/5 to-transparent rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">Partnership</h4>
                <p className="text-gray-600">
                  We collaborate closely with clients to achieve shared goals and long-term success.
                </p>
              </div>

              {/* Transparency */}
              <div className="text-center p-6 bg-gradient-to-b from-blue-100/50 to-transparent rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">Transparency</h4>
                <p className="text-gray-600">
                  We maintain open communication and full visibility throughout every project.
                </p>
              </div>

              {/* Growth */}
              <div className="text-center p-6 bg-gradient-to-b from-green-100/50 to-transparent rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">Growth</h4>
                <p className="text-gray-600">
                  We're driven by continuous improvement — for our clients, our team, and our technology.
                </p>
              </div>

              {/* Trust */}
              <div className="text-center p-6 bg-gradient-to-b from-purple-100/50 to-transparent rounded-xl hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">Trust</h4>
                <p className="text-gray-600">
                  We build lasting relationships founded on reliability, integrity, and accountability.
                </p>
              </div>

              {/* Security */}
              <div className="text-center p-6 bg-gradient-to-b from-red-100/50 to-transparent rounded-xl hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-navy mb-3">Security</h4>
                <p className="text-gray-600">
                  We prioritize the protection of client data and digital assets, ensuring every solution we deliver meets the highest standards of safety and privacy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-electric to-blue-600 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <Heading level={2} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </Heading>
          
          <Text className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's work together to build something great. Whether you need marketing, software development, or hosting, Stratigo is here to help you succeed.
          </Text>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" className="bg-white text-electric hover:bg-gray-100">
              Start a Project
            </Button>
            <Button variant="secondary" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
              Schedule a Call
            </Button>
          </div>
    </div>
      </section>
    </>
  );
};

export default About;
