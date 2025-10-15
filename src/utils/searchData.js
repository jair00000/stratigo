// Comprehensive search index for the entire Stratigo website
export const searchData = [
  // Home Page
  {
    id: "home",
    title: "Home",
    path: "/",
    category: "Page",
    keywords: ["home", "stratigo", "digital solutions", "marketing", "software", "hosting", "business growth"],
    description: "Stratigo - DESIGN with marketing that lasts. Empowering your business with software, marketing, and strategies designed to deliver meaningful results.",
    sections: [
      {
        title: "Our Services",
        content: "Software Solutions, Marketing Solutions, Hosting Solutions",
        anchor: "#services"
      },
      {
        title: "Software Solutions",
        content: "From concept to deployment, we develop custom web, mobile, and CRM applications designed for performance, scalability, and business efficiency.",
        keywords: ["web development", "mobile app", "CRM", "custom software", "API integration", "UI/UX design"]
      },
      {
        title: "Marketing Solutions",
        content: "Grow your visibility and strengthen your brand with strategic, data-driven marketing campaigns. SEO, local search visibility, and digital content strategy.",
        keywords: ["SEO", "marketing", "content strategy", "brand positioning", "digital marketing", "visibility"]
      },
      {
        title: "Hosting Solutions",
        content: "Managed Hosting Services built exclusively for Stratigo clients. Dedicated Virtual Private Server (VPS) with enterprise-grade infrastructure.",
        keywords: ["hosting", "VPS", "dedicated server", "SSL", "firewall", "backups", "managed hosting"]
      }
    ]
  },

  // About Page
  {
    id: "about",
    title: "About Stratigo",
    path: "/about",
    category: "Page",
    keywords: ["about", "company", "mission", "vision", "values", "team", "partnership", "transparency", "growth"],
    description: "Stratigo is a digital solutions company serving businesses worldwide. We provide Marketing, Software Development, and Hosting Services.",
    sections: [
      {
        title: "Who We Are",
        content: "At Stratigo, we believe that technology and strategy move forward together. Team of thinkers, builders, and creators dedicated to helping businesses achieve meaningful growth.",
        keywords: ["digital solutions", "business growth", "strategic partner"]
      },
      {
        title: "Our Mission",
        content: "To deliver innovative, reliable, and results-driven digital solutions that empower businesses to grow, adapt, and lead in their industries.",
        keywords: ["mission", "innovation", "results-driven", "business empowerment"]
      },
      {
        title: "Our Vision",
        content: "To become a trusted global partner for businesses by creating transparent, growth-oriented, and future-ready digital solutions.",
        keywords: ["vision", "global partner", "transparency", "future-ready"]
      },
      {
        title: "Our Values",
        content: "Partnership, Transparency, Growth, Trust, Security",
        keywords: ["values", "partnership", "transparency", "growth", "trust", "security", "integrity"]
      }
    ]
  },

  // Services - Marketing
  {
    id: "marketing",
    title: "Marketing Solutions",
    path: "/services/marketing",
    category: "Service",
    keywords: ["marketing", "SEO", "search engine optimization", "content strategy", "local marketing", "analytics", "branding", "visibility"],
    description: "Strategic Marketing Built for Real-World Businesses. SEO, content creation, and data-driven campaigns that deliver measurable results.",
    sections: [
      {
        title: "Search Engine Optimization (SEO)",
        content: "Improve your ranking on Google with on-page, off-page, and technical SEO. From local visibility to national reach.",
        keywords: ["SEO", "Google ranking", "on-page SEO", "technical SEO", "search visibility"]
      },
      {
        title: "Local Marketing",
        content: "Boost your reach in specific locations through local search optimization, business listings, and geo-targeted campaigns.",
        keywords: ["local SEO", "local marketing", "business listings", "geo-targeting", "local visibility"]
      },
      {
        title: "Content Strategy & Branding",
        content: "Build authority with professional copywriting, storytelling, and digital branding that connects your message to your audience.",
        keywords: ["content marketing", "copywriting", "branding", "storytelling", "brand strategy"]
      },
      {
        title: "Analytics & Reporting",
        content: "Stay in control with transparent analytics dashboards that show traffic, engagement, and growth.",
        keywords: ["analytics", "reporting", "data-driven", "traffic analysis", "performance metrics"]
      }
    ]
  },

  // Services - Software Development
  {
    id: "software",
    title: "Software Development",
    path: "/services/software-development",
    category: "Service",
    keywords: ["software", "web development", "mobile app", "CRM", "custom software", "web app", "API", "integration"],
    description: "Custom web, mobile, and CRM applications designed for performance, scalability, and business efficiency.",
    sections: [
      {
        title: "Web Development",
        content: "Custom websites and web applications built for your business needs. Corporate sites, eCommerce, and web apps.",
        keywords: ["website development", "web app", "eCommerce", "corporate website", "custom development"]
      },
      {
        title: "Mobile App Development",
        content: "iOS, Android, and cross-platform mobile applications designed for performance and user experience.",
        keywords: ["mobile app", "iOS", "Android", "cross-platform", "React Native", "native app"]
      },
      {
        title: "CRM Systems",
        content: "Custom CRM systems tailored to your business workflow. Customer relationship management made efficient.",
        keywords: ["CRM", "customer relationship management", "business automation", "workflow optimization"]
      },
      {
        title: "API & System Integration",
        content: "Connect your software with third-party services. Payment processors, analytics, marketing platforms, and more.",
        keywords: ["API integration", "system integration", "third-party integration", "automation"]
      }
    ]
  },

  // Services - Hosting
  {
    id: "hosting",
    title: "Hosting Solutions",
    path: "/services/hosting",
    category: "Service",
    keywords: ["hosting", "VPS", "managed hosting", "dedicated server", "cloud hosting", "SSL", "security", "backups", "uptime"],
    description: "Managed VPS Hosting with enterprise-grade infrastructure. 99.9% uptime guarantee, SSL, weekly backups, and 24/7 monitoring.",
    sections: [
      {
        title: "Dedicated VPS Hosting",
        content: "Virtual Private Server with guaranteed resources, enhanced security, and superior performance. No shared hosting.",
        keywords: ["VPS", "dedicated server", "private server", "guaranteed resources", "server hosting"]
      },
      {
        title: "Security & Protection",
        content: "Free SSL certificates, firewall protection, and enterprise-grade security measures to protect your data.",
        keywords: ["SSL", "security", "firewall", "data protection", "encryption", "secure hosting"]
      },
      {
        title: "Backups & Recovery",
        content: "Weekly automated backups with 4-week retention. Fast recovery and restoration when you need it.",
        keywords: ["backups", "data backup", "disaster recovery", "backup restoration", "data retention"]
      },
      {
        title: "Performance Monitoring",
        content: "24/7 system monitoring with 99.9% uptime guarantee. Real-time alerts and proactive maintenance.",
        keywords: ["monitoring", "uptime", "performance", "system monitoring", "server monitoring", "99.9% uptime"]
      }
    ]
  },

  // Projects
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
    category: "Page",
    keywords: ["projects", "portfolio", "case studies", "work", "clients", "examples"],
    description: "Explore our portfolio of successful projects. Real-world solutions for businesses across industries.",
    sections: [
      {
        title: "Our Work",
        content: "Showcase of completed projects including websites, mobile apps, marketing campaigns, and hosting solutions.",
        keywords: ["portfolio", "case studies", "project examples", "success stories"]
      }
    ]
  },

  // Contact
  {
    id: "contact",
    title: "Contact Us",
    path: "/contact",
    category: "Page",
    keywords: ["contact", "get in touch", "consultation", "quote", "email", "support", "inquiry"],
    description: "Get in touch with Stratigo. Request a quote, schedule a consultation, or contact our support team.",
    sections: [
      {
        title: "Contact Form",
        content: "Quick contact for general inquiries and callbacks. Get a response within 24 hours.",
        keywords: ["contact form", "inquiry", "callback", "general contact"]
      },
      {
        title: "Get a Quote",
        content: "Detailed project quote request. Submit your project requirements for accurate scoping and pricing.",
        keywords: ["quote", "project quote", "pricing", "estimate", "proposal"]
      },
      {
        title: "Email Support",
        content: "Email us at hello@stratigo.io for general inquiries or support@stratigo.io for technical support.",
        keywords: ["email", "hello@stratigo.io", "support@stratigo.io", "contact email"]
      }
    ]
  },

  // FAQ
  {
    id: "faq",
    title: "Frequently Asked Questions",
    path: "/faq",
    category: "Page",
    keywords: ["FAQ", "help", "questions", "answers", "support", "documentation", "help center"],
    description: "Find answers to common questions about Stratigo's services, billing, hosting, and technical support.",
    sections: [
      {
        title: "General Questions",
        content: "What services does Stratigo offer? Who is Stratigo designed for? How to get started?",
        keywords: ["general", "services overview", "getting started", "B2B"]
      },
      {
        title: "Hosting FAQs",
        content: "VPS hosting, uptime guarantee, backups, SSL certificates, hosting plans",
        keywords: ["hosting questions", "VPS", "uptime", "backups", "SSL"]
      },
      {
        title: "Software Development FAQs",
        content: "Project timelines, ownership, maintenance, integrations, technologies used",
        keywords: ["development questions", "project timeline", "code ownership", "maintenance"]
      },
      {
        title: "Marketing FAQs",
        content: "SEO services, rankings, content creation, marketing results",
        keywords: ["marketing questions", "SEO", "rankings", "content"]
      },
      {
        title: "Billing & Pricing",
        content: "Pricing, payment methods, refunds, hidden fees, payment schedules",
        keywords: ["billing", "pricing", "payments", "refunds", "costs"]
      },
      {
        title: "Technical Support",
        content: "Support hours, ticket submission, response times, 24/7 availability",
        keywords: ["support", "help desk", "technical support", "response time"]
      }
    ]
  },

  // Additional Pages
  {
    id: "blog",
    title: "Blog",
    path: "/blog",
    category: "Page",
    keywords: ["blog", "articles", "insights", "news", "updates", "resources"],
    description: "Stratigo blog with insights on digital marketing, software development, and business growth strategies.",
  },

  {
    id: "careers",
    title: "Careers",
    path: "/careers",
    category: "Page",
    keywords: ["careers", "jobs", "hiring", "employment", "work with us", "opportunities"],
    description: "Join the Stratigo team. Explore career opportunities in software development, marketing, and support.",
  },

  {
    id: "testimonials",
    title: "Testimonials",
    path: "/testimonials",
    category: "Page",
    keywords: ["testimonials", "reviews", "client feedback", "success stories", "case studies"],
    description: "What our clients say about working with Stratigo. Real testimonials from satisfied customers.",
  },

  {
    id: "support",
    title: "Support Center",
    path: "/support",
    category: "Page",
    keywords: ["support", "help center", "documentation", "technical help", "customer support"],
    description: "Stratigo Support Center. Get help with technical issues, billing, and general questions.",
  },

  // Legal Pages
  {
    id: "terms",
    title: "Terms of Service",
    path: "/terms",
    category: "Legal",
    keywords: ["terms", "terms of service", "legal", "agreement", "conditions"],
    description: "Stratigo Terms of Service. Legal terms and conditions for using our services.",
  },

  {
    id: "privacy",
    title: "Privacy Policy",
    path: "/privacy",
    category: "Legal",
    keywords: ["privacy", "privacy policy", "data protection", "GDPR", "personal data"],
    description: "Stratigo Privacy Policy. How we collect, use, and protect your personal information.",
  },

  {
    id: "cookies",
    title: "Cookie Policy",
    path: "/cookies",
    category: "Legal",
    keywords: ["cookies", "cookie policy", "tracking", "analytics"],
    description: "Stratigo Cookie Policy. Information about how we use cookies and tracking technologies.",
  },

  {
    id: "sla",
    title: "Service Level Agreement",
    path: "/sla",
    category: "Legal",
    keywords: ["SLA", "service level agreement", "uptime", "guarantees", "support commitments"],
    description: "Stratigo Service Level Agreement. Our commitments regarding uptime, support, and service quality.",
  },

  // Features & Solutions
  {
    id: "feature-ui-ux",
    title: "UI/UX Design",
    path: "/services/software-development",
    category: "Feature",
    keywords: ["UI", "UX", "user interface", "user experience", "design", "wireframes", "prototypes"],
    description: "Professional UI/UX design for web and mobile applications",
    anchor: "#design"
  },

  {
    id: "feature-responsive",
    title: "Responsive Design",
    path: "/services/software-development",
    category: "Feature",
    keywords: ["responsive", "mobile-friendly", "adaptive design", "cross-device"],
    description: "Mobile-responsive websites that work perfectly on all devices",
  },

  {
    id: "feature-ecommerce",
    title: "eCommerce Solutions",
    path: "/services/software-development",
    category: "Feature",
    keywords: ["ecommerce", "online store", "shopping cart", "payments", "Stripe", "PayPal"],
    description: "Complete eCommerce solutions with payment integration and inventory management",
  },

  {
    id: "feature-b2b",
    title: "B2B Focus",
    path: "/about",
    category: "Feature",
    keywords: ["B2B", "business to business", "enterprise", "corporate", "professional"],
    description: "Exclusive B2B partnership model for business clients only",
  },

  {
    id: "industries-contractors",
    title: "Services for Contractors",
    path: "/",
    category: "Industry",
    keywords: ["contractors", "construction", "trades", "window tinting", "auto detailing", "HVAC", "cleaning"],
    description: "Digital solutions for contractors and trade businesses",
    anchor: "#who-we-serve"
  },

  {
    id: "industries-manufacturing",
    title: "Services for Manufacturers",
    path: "/",
    category: "Industry",
    keywords: ["manufacturing", "factories", "fabrication", "logistics", "supply chain"],
    description: "Software and marketing for industrial and manufacturing firms",
    anchor: "#who-we-serve"
  },

  {
    id: "industries-service",
    title: "Services for Service Businesses",
    path: "/",
    category: "Industry",
    keywords: ["service business", "professional services", "agencies", "consultants", "creative studios"],
    description: "Solutions for professional service providers and agencies",
    anchor: "#who-we-serve"
  }
];

// Search function
export const searchContent = (query) => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const results = [];

  searchData.forEach(item => {
    let relevance = 0;
    const highlights = [];

    // Check title (highest priority)
    if (item.title.toLowerCase().includes(searchTerm)) {
      relevance += 10;
      highlights.push('title');
    }

    // Check keywords (high priority)
    if (item.keywords && item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))) {
      relevance += 8;
      highlights.push('keywords');
    }

    // Check description (medium priority)
    if (item.description && item.description.toLowerCase().includes(searchTerm)) {
      relevance += 5;
      highlights.push('description');
    }

    // Check sections (medium priority)
    if (item.sections) {
      item.sections.forEach(section => {
        if (section.title.toLowerCase().includes(searchTerm)) {
          relevance += 6;
          highlights.push('section');
        }
        if (section.content && section.content.toLowerCase().includes(searchTerm)) {
          relevance += 3;
          highlights.push('content');
        }
        if (section.keywords && section.keywords.some(kw => kw.toLowerCase().includes(searchTerm))) {
          relevance += 4;
          highlights.push('section-keywords');
        }
      });
    }

    // If there's any relevance, add to results
    if (relevance > 0) {
      results.push({
        ...item,
        relevance,
        highlights: [...new Set(highlights)] // Remove duplicates
      });
    }
  });

  // Sort by relevance (highest first)
  return results.sort((a, b) => b.relevance - a.relevance);
};

// Get search suggestions (autocomplete)
export const getSearchSuggestions = (query) => {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.toLowerCase().trim();
  const suggestions = new Set();

  searchData.forEach(item => {
    // Add matching titles
    if (item.title.toLowerCase().includes(searchTerm)) {
      suggestions.add(item.title);
    }

    // Add matching keywords
    if (item.keywords) {
      item.keywords.forEach(keyword => {
        if (keyword.toLowerCase().includes(searchTerm)) {
          suggestions.add(keyword);
        }
      });
    }

    // Add matching section titles
    if (item.sections) {
      item.sections.forEach(section => {
        if (section.title.toLowerCase().includes(searchTerm)) {
          suggestions.add(section.title);
        }
      });
    }
  });

  return Array.from(suggestions).slice(0, 5); // Limit to 5 suggestions
};

