import React from "react";
import { Link } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import Button from "../components/Button";
import HeroImage from "../assets/images/home/Home_hero.webp";

const Projects = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
      {/* Global Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-electric/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-coral/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-500/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Hero Section - Same as Homepage */}
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
                  Our Projects
                </Heading>
                <p className="text-white text-left text-lg md:text-xl font-medium text-white/90">
                  See our work in action
                </p>
              </div>
              
              <Text className="text-white text-left text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                Explore our portfolio of successful projects across marketing, software development, and hosting solutions. Each project represents our commitment to excellence and client success.
              </Text>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto">
                    Start Your Project
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" className="w-full sm:w-auto">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Side - Project Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Project Support</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Fast</div>
                <div className="text-white/80 text-sm">Delivery Time</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">Expert</div>
                <div className="text-white/80 text-sm">Team Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Content Section */}
      <Section variant="content" className="relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-72 h-72 bg-electric/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-electric/10 text-electric font-semibold rounded-full text-sm uppercase tracking-wider">
                Portfolio
              </span>
            </div>
            <Heading level={2} className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Featured Projects
            </Heading>
            <Text className="text-xl text-gray-700 leading-relaxed">
              Discover how we've helped businesses grow through innovative solutions and strategic implementation.
            </Text>
          </div>

          {/* Projects Grid - Placeholder for now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-electric to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 text-center">Coming Soon</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We're working on showcasing our amazing projects. Stay tuned for detailed case studies and success stories.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 text-center">Case Studies</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Detailed project breakdowns showing our process, challenges overcome, and measurable results achieved.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 text-center">Success Stories</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Real client testimonials and growth metrics demonstrating the impact of our solutions.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Projects;
