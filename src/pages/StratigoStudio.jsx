import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PreviewPanel from '../components/Studio/PreviewPanel';
import EditorPanel from '../components/Studio/EditorPanel';
import Section, { Container, Heading, Text } from '../components/Section';
import Button from '../components/Button';

const StratigoStudio = () => {
  const [artifact, setArtifact] = useState('website');
  const [device, setDevice] = useState('desktop');
  const [websitePatterns, setWebsitePatterns] = useState(['twoColumn']); // Array of patterns
  const [previewImage, setPreviewImage] = useState(null);
  const [panelVisible, setPanelVisible] = useState(true);

  // Adjust device defaults when artifact changes
  useEffect(() => {
    if (artifact === 'website') {
      if (!['desktop', 'tablet', 'mobile'].includes(device)) {
        setDevice('desktop');
      }
      // Only set default if patterns array is empty
      if (websitePatterns.length === 0) {
        setWebsitePatterns(['twoColumn']);
      }
    } else if (artifact === 'mobileApp') {
      setDevice('mobile'); // force mobile for mobile app
    } else if (artifact === 'crm') {
      if (device === 'mobile') {
        setDevice('desktop'); // move away from mobile for CRM
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artifact, device]);

  const handleReset = () => {
    setArtifact('website');
    setDevice('desktop');
    setWebsitePatterns(['twoColumn']);
    setPreviewImage(null);
  };

  const handleSaveDesign = () => {
    // Placeholder for backend integration
    console.log('Saving design choice:', {
      artifact,
      device,
      websitePatterns: artifact === 'website' ? websitePatterns : null
    });
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#0B1120] flex flex-col">
      {/* Main Content Area - Studio */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-80px)] relative overflow-hidden">
        {/* Left Preview Panel */}
        <div 
          className={`h-full overflow-hidden transition-all duration-300 ease-in-out ${
            panelVisible 
              ? 'w-full lg:w-[64%]' 
              : 'w-full'
          }`}
        >
          <PreviewPanel 
            artifact={artifact}
            device={device}
            websitePatterns={websitePatterns}
            previewImage={previewImage}
            panelVisible={panelVisible}
            onTogglePanel={() => setPanelVisible(!panelVisible)}
            onDeviceChange={setDevice}
          />
        </div>

        {/* Right Editor Panel */}
        <div 
          className={`h-full overflow-y-auto transition-all duration-300 ease-in-out border-l border-white/10 ${
            panelVisible 
              ? 'w-full lg:w-[36%] opacity-100 translate-x-0' 
              : 'w-0 opacity-0 translate-x-full pointer-events-none overflow-hidden'
          }`}
        >
          <EditorPanel
            artifact={artifact}
            setArtifact={setArtifact}
            websitePatterns={websitePatterns}
            setWebsitePatterns={setWebsitePatterns}
            onReset={handleReset}
            onSaveDesign={handleSaveDesign}
            panelVisible={panelVisible}
            onTogglePanel={() => setPanelVisible(!panelVisible)}
          />
        </div>
      </div>

      {/* CTA Section - before footer (same as Home) */}
      <Section variant="content" className="bg-gradient-to-br from-navy via-navy/95 to-electric py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-coral/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

        <Container>
          <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
            <div className="mb-10 sm:mb-12 md:mb-16">
              <div className="inline-block mb-4 sm:mb-6">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full text-xs sm:text-sm uppercase tracking-wider border border-white/20">
                  Get Started Today
                </span>
              </div>
              <Heading level={2} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Ready to Transform Your Business?
              </Heading>
              <Text className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-4 sm:mb-6 max-w-4xl mx-auto leading-relaxed">
                Your business deserves a partner that understands technology, marketing, and growth.
              </Text>
              <Text className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                At Stratigo, we combine strategy, innovation, and secure systems to help your brand achieve measurable success.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Fast Implementation</Text>
                <Text className="text-white/70 text-xs sm:text-sm">Get your project started within 48 hours</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Expert Support</Text>
                <Text className="text-white/70 text-xs sm:text-sm">Dedicated team throughout your journey</Text>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-coral/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <Text className="text-white font-semibold mb-1.5 sm:mb-2 text-sm sm:text-base">Proven Results</Text>
                <Text className="text-white/70 text-xs sm:text-sm">300% average client growth</Text>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 border border-white/20">
              <Text className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-4 sm:mb-6 md:mb-8 font-medium text-center sm:text-left">
                Let's build something extraordinary together — from your website to your digital ecosystem.
              </Text>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto bg-orange hover:bg-orange/90 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg group flex items-center justify-center">
                    <span className="flex items-center justify-center gap-2">
                      Book a Consultation
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-3 sm:py-4 px-5 sm:px-6 md:px-8 rounded-lg sm:rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-sm sm:text-base md:text-lg backdrop-blur-sm flex items-center justify-center">
                    Contact Stratigo
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 text-white/80">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">hello@stratigo.io</div>
                  <div className="text-xs sm:text-sm">General Inquiries</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Free Consultation</div>
                  <div className="text-xs sm:text-sm">30-minute strategy call</div>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">48-Hour Response</div>
                  <div className="text-xs sm:text-sm">Quick project turnaround</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default StratigoStudio;

