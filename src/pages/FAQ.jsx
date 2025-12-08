import React, { useState } from "react";
import { Link } from "react-router-dom";
import Section, { Container, Heading, Text } from "../components/Section";
import HeroImage from "../assets/images/home/Home_hero.webp";
import { Helmet } from "react-helmet";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Questions", icon: "📋" },
    { id: "general", name: "General", icon: "ℹ️" },
    { id: "hosting", name: "Hosting", icon: "☁️" },
    { id: "software", name: "Software & Development", icon: "💻" },
    { id: "marketing", name: "Marketing", icon: "📈" },
    { id: "billing", name: "Billing & Pricing", icon: "💳" },
    { id: "technical", name: "Technical Support", icon: "🔧" }
  ];

  const faqs = [
    // General
    {
      category: "general",
      question: "What services does Stratigo offer?",
      answer: "Stratigo provides three core services: Marketing Solutions (SEO, content strategy, local visibility), Software Development (web, mobile apps, CRM systems), and Managed VPS Hosting. We serve business clients exclusively with custom, tailored solutions designed for long-term growth and performance."
    },
    {
      category: "general",
      question: "Who is Stratigo designed for?",
      answer: "Stratigo works exclusively with business clients (B2B). We specialize in serving small and medium-sized businesses, contractors, manufacturers, service providers, and professional firms that need reliable digital solutions. We don't work with individual consumers or hobbyists."
    },
    {
      category: "general",
      question: "Where is Stratigo located?",
      answer: "Stratigo is a digital services company serving clients worldwide. Our team operates remotely with infrastructure in multiple regions to ensure reliable service delivery and support across different time zones."
    },
    {
      category: "general",
      question: "How do I get started with Stratigo?",
      answer: "Simply contact us through our website or email us at hello@stratigo.io. We'll schedule a consultation to discuss your needs, provide a detailed proposal, and outline the project scope, timeline, and pricing. Once approved, we'll begin working on your project immediately."
    },

    // Hosting
    {
      category: "hosting",
      question: "What type of hosting does Stratigo provide?",
      answer: "We provide Managed VPS (Virtual Private Server) hosting on dedicated infrastructure. Unlike shared hosting, each client gets their own isolated server environment with guaranteed resources, enhanced security, and superior performance. Our hosting includes SSL certificates, weekly backups, and ongoing maintenance."
    },
    {
      category: "hosting",
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.9% monthly uptime for all hosting clients, which translates to approximately 43 minutes of maximum downtime per month (excluding scheduled maintenance). If we fail to meet this commitment, eligible clients receive service credits according to our SLA."
    },
    {
      category: "hosting",
      question: "How often are backups performed?",
      answer: "We perform automated weekly backups of all hosted sites and data. We retain the last 4 backups (approximately one month of history). Clients can request backup restoration at any time through our support team. We also recommend clients maintain their own backup copies of critical data."
    },
    {
      category: "hosting",
      question: "Do I need to purchase hosting separately?",
      answer: "Hosting is available as a standalone service or bundled with software development projects. If we build your website or application, we strongly recommend our managed hosting for optimal performance, security, and support. However, you can host elsewhere if you prefer."
    },
    {
      category: "hosting",
      question: "Can I upgrade or downgrade my hosting plan?",
      answer: "Yes! You can upgrade your hosting plan at any time. Upgrades take effect immediately upon payment confirmation. Downgrades are processed at the end of your current billing cycle. Contact our billing team to make changes to your plan."
    },
    {
      category: "hosting",
      question: "What happens if my site goes down?",
      answer: "First, check our Service Status page. If all systems are operational, contact support immediately with your domain and issue description. For critical outages, mark your ticket as 'Critical' for priority response (within 2 hours during business hours). We'll investigate and resolve the issue promptly."
    },

    // Software & Development
    {
      category: "software",
      question: "What types of software projects do you build?",
      answer: "We build custom websites (corporate, eCommerce, web apps), mobile applications (iOS, Android, cross-platform), and CRM systems tailored to your business workflow. All projects are custom-developed to your specifications—we don't use generic templates."
    },
    {
      category: "software",
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. A basic business website typically takes 4-8 weeks, while custom web applications or mobile apps can take 8-16 weeks or more. We provide detailed timelines in our project proposal and keep you updated throughout development."
    },
    {
      category: "software",
      question: "Who owns the code and final deliverables?",
      answer: "Upon full payment completion, ownership of the final deliverables transfers to you (excluding third-party licensed components). Until payment is complete, all custom software, websites, and materials remain Stratigo's intellectual property as outlined in our Terms of Service."
    },
    {
      category: "software",
      question: "Do you provide ongoing maintenance and updates?",
      answer: "Yes! We offer ongoing maintenance packages that include security updates, bug fixes, feature enhancements, and technical support. Maintenance can be billed monthly or on a project basis. We recommend maintenance for all custom software to ensure long-term performance and security."
    },
    {
      category: "software",
      question: "Can you integrate with existing systems?",
      answer: "Absolutely. We specialize in API integration and can connect your software with third-party services like payment processors (Stripe, PayPal), CRMs, analytics tools (Google Analytics), marketing platforms, and more. We'll assess your integration needs during the consultation."
    },
    {
      category: "software",
      question: "What technologies do you use?",
      answer: "We use modern, proven technologies based on project requirements. Common tech stacks include React, Node.js, Python, PHP, and frameworks like Next.js and Laravel for web development. For mobile, we use React Native for cross-platform or native Swift/Kotlin for platform-specific apps."
    },

    // Marketing
    {
      category: "marketing",
      question: "What marketing services do you offer?",
      answer: "We provide SEO (search engine optimization), local and regional visibility campaigns, digital content creation, and brand strategy. Our marketing solutions are designed to increase your online presence, attract qualified leads, and drive measurable business growth."
    },
    {
      category: "marketing",
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. You may see initial improvements in 3-4 months, but significant results typically appear within 6-12 months. This depends on your industry competition, current site status, and the scope of optimization work. We provide monthly reports to track progress."
    },
    {
      category: "marketing",
      question: "Do you guarantee first-page rankings?",
      answer: "No reputable SEO provider can guarantee specific rankings, as search algorithms are constantly changing and controlled by search engines. However, we do guarantee strategic, ethical SEO practices that improve your visibility, organic traffic, and search performance over time."
    },
    {
      category: "marketing",
      question: "Can you help with content creation?",
      answer: "Yes! Our marketing team creates SEO-optimized blog posts, website copy, landing pages, and digital content aligned with your brand voice and business goals. Content is a critical part of our marketing strategy to attract and engage your target audience."
    },

    // Billing & Pricing
    {
      category: "billing",
      question: "How is pricing determined?",
      answer: "Pricing is based on project scope, complexity, timeline, and required resources. For software projects, we provide fixed-price quotes after consultation. Hosting and marketing services are subscription-based (monthly or annual). All pricing is transparent and detailed in your proposal before work begins."
    },
    {
      category: "billing",
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit/debit cards, and PayPal. For larger projects, we offer milestone-based payment schedules (e.g., 50% upfront, 50% upon completion). Hosting and marketing subscriptions are billed monthly or annually based on your preference."
    },
    {
      category: "billing",
      question: "Do you offer refunds?",
      answer: "Refund policies vary by service type. Software development payments are generally non-refundable once work has begun, as outlined in your contract. Hosting services can be canceled with 30 days' notice, and unused time may be credited. Please review our Terms of Service for complete refund policies."
    },
    {
      category: "billing",
      question: "Are there any hidden fees?",
      answer: "No. All costs are outlined in your proposal or service agreement before work begins. The only additional charges would be for client-requested changes outside the original scope (change orders), third-party services (domain names, premium plugins), or optional add-ons you approve."
    },
    {
      category: "billing",
      question: "What happens if I miss a payment?",
      answer: "We send payment reminders before due dates. If payment is missed, services may be suspended after a grace period (typically 7 days). For hosting clients, we provide a final notice before any account suspension. Suspended services can be restored once payment is received."
    },

    // Technical Support
    {
      category: "technical",
      question: "What are your support hours?",
      answer: "Our technical support team is available Monday through Friday, 9:00 AM to 6:00 PM Central Standard Time (CST). We respond to support tickets based on priority level, with critical issues receiving responses within 2 hours during business hours."
    },
    {
      category: "technical",
      question: "How do I submit a support request?",
      answer: "You can submit support requests via email (support@stratigo.io), through our Contact form, or via your client dashboard. For best results, include your domain name, a detailed description of the issue, and any relevant screenshots or error messages."
    },
    {
      category: "technical",
      question: "Do you offer 24/7 support?",
      answer: "We do not currently offer 24/7 support. Our team is available during business hours (Mon-Fri, 9AM-6PM CST). For critical outages outside business hours, we monitor alerts and will respond as quickly as possible, but response times may be longer than our standard SLA."
    },
    {
      category: "technical",
      question: "What if I need help with something not built by Stratigo?",
      answer: "Our support primarily covers services and systems we've built or manage. For third-party tools, platforms, or code we didn't develop, we can provide general guidance, but detailed support would be outside our scope. We can recommend specialists if needed."
    },
    {
      category: "technical",
      question: "Can I request new features after launch?",
      answer: "Yes! Post-launch feature requests are handled as enhancement projects. We'll assess the scope, provide a quote, and schedule development. Small tweaks may be included in maintenance packages, while larger features are quoted separately."
    },
    {
      category: "technical",
      question: "How do I access my website files and database?",
      answer: "Hosting clients receive FTP/SFTP credentials and database access details upon account activation. These are sent to your registered email. If you need access, contact support and we'll provide or reset your credentials securely."
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Stratigo Help Center</title>
        <meta 
          name="description" 
          content="Find answers to common questions about Stratigo's hosting, software development, and marketing services. Get help with billing, technical support, and more." 
        />
        <meta 
          name="keywords" 
          content="Stratigo FAQ, frequently asked questions, help, support, hosting questions, software development FAQ" 
        />
      </Helmet>

      {/* Hero Section */}
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
                  Frequently Asked Questions
                </Heading>
                <p className="text-white text-left text-lg md:text-xl font-medium text-white/90">
                  Find quick answers to common questions about our services
                </p>
              </div>
              
              {/* Search Bar */}
              <div className="max-w-2xl">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search FAQs..."
                    className="w-full px-6 py-4 pr-12 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-electric"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Clear search"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {searchQuery && (
                  <p className="text-white/80 text-sm mt-2">
                    Searching for: "{searchQuery}"
                  </p>
                )}
              </div>
            </div>
            
            {/* Right Side - Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">{faqs.length}+</div>
                <div className="text-white/80 text-sm">Total Questions</div>
              </div>
              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">{categories.length - 1}</div>
                <div className="text-white/80 text-sm">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <Section variant="content" className="bg-gray-50 py-6 sm:py-8">
        <Container>
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base ${
                    activeCategory === cat.id
                      ? "bg-electric text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  <span className="text-sm sm:text-base">{cat.icon}</span>
                  <span>{cat.name}</span>
                  <span className={`text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full ${
                    activeCategory === cat.id ? "bg-white/20" : "bg-gray-200"
                  }`}>
                    {cat.id === "all" ? faqs.length : faqs.filter(f => f.category === cat.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ List */}
      <Section variant="content">
        <Container>
          <div className="max-w-4xl mx-auto px-4 sm:px-0">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-8 sm:py-10 md:py-12">
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <Text className="text-gray-500 text-base sm:text-lg">No FAQs found matching your search.</Text>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-3 sm:mt-4 text-electric hover:underline text-sm sm:text-base"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <Text className="text-sm sm:text-base text-gray-600">
                    Showing {filteredFAQs.length} {filteredFAQs.length === 1 ? 'question' : 'questions'}
                    {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.name}`}
                    {searchQuery && ` matching "${searchQuery}"`}
                  </Text>
                  {(searchQuery || activeCategory !== "all") && (
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setActiveCategory("all");
                      }}
                      className="text-xs sm:text-sm text-electric hover:underline flex items-center"
                    >
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Clear all filters
                    </button>
                  )}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {filteredFAQs.map((faq, index) => {
                    // Function to highlight search terms
                    const highlightText = (text, query) => {
                      if (!query) return text;
                      
                      const parts = text.split(new RegExp(`(${query})`, 'gi'));
                      return parts.map((part, i) => 
                        part.toLowerCase() === query.toLowerCase() 
                          ? <mark key={i} className="bg-yellow-200 px-1 rounded">{part}</mark>
                          : part
                      );
                    };

                    return (
                      <details key={index} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden group">
                        <summary className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-between">
                          <Text className="font-semibold text-sm sm:text-base text-navy flex items-center flex-1 min-w-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-electric mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="flex-1 min-w-0">{highlightText(faq.question, searchQuery)}</span>
                          </Text>
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-open:rotate-180 transition-transform ml-2 sm:ml-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200">
                          <Text className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {highlightText(faq.answer, searchQuery)}
                          </Text>
                        </div>
                      </details>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </Container>
      </Section>

      {/* Still Have Questions CTA */}
      <Section variant="content" className="bg-navy text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={2} className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </Heading>
            <Text className="text-gray-300 text-lg mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </Text>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <svg className="w-12 h-12 text-electric mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <Text className="text-white font-semibold mb-2">Visit Support Center</Text>
                <Link to="/support" className="text-electric hover:underline">
                  Get Help →
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <svg className="w-12 h-12 text-electric mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <Text className="text-white font-semibold mb-2">Email Support</Text>
                <a href="mailto:support@stratigo.io" className="text-electric hover:underline">
                  support@stratigo.io
                </a>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <svg className="w-12 h-12 text-electric mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <Text className="text-white font-semibold mb-2">Contact Us</Text>
                <Link to="/contact" className="text-electric hover:underline">
                  Send Message →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default FAQ;
