import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription (integrate with your backend)
      console.log("Newsletter subscription:", email);
      setSubscribeStatus("success");
      setEmail("");
      setTimeout(() => setSubscribeStatus(null), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="w-full px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            
            {/* Brand Block */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-white mb-4">Stratigo</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Digital solutions for Marketing, Software Development, and Hosting — built to help businesses grow with precision, performance, security, and purpose.
              </p>
              <p className="text-gray-400 italic text-sm">
                "Built for businesses who expect more than hosting."
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-electric transition-colors">
                    About Stratigo
                  </Link>
                </li>
                <li>
                  <Link to="/who-we-serve" className="text-gray-300 hover:text-electric transition-colors">
                    Who We Serve
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-gray-300 hover:text-electric transition-colors">
                    Process
                  </Link>
                </li>
                <li>
                  <span className="text-gray-500 cursor-not-allowed">
                    Careers (Coming Soon)
                  </span>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-electric transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/marketing" className="text-gray-300 hover:text-electric transition-colors">
                    Marketing Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services/software-development" className="text-gray-300 hover:text-electric transition-colors">
                    Software Solutions
                  </Link>
                  <div className="text-sm text-gray-400 mt-1 ml-4">
                    Web · App · CRM
                  </div>
                </li>
                <li>
                  <Link to="/services/hosting" className="text-gray-300 hover:text-electric transition-colors">
                    Hosting Solutions
                  </Link>
                  <div className="text-sm text-gray-400 mt-1 ml-4">
                    Managed VPS
                  </div>
                </li>
              </ul>
            </div>

            {/* Resources & Legal Combined */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <Link to="/blog" className="text-gray-300 hover:text-electric transition-colors">
                    Blog / Insights
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-gray-300 hover:text-electric transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-300 hover:text-electric transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-300 hover:text-electric transition-colors">
                    Support Center
                  </Link>
                </li>
              </ul>

              <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-electric transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-electric transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-300 hover:text-electric transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/sla" className="text-gray-300 hover:text-electric transition-colors">
                    Service Level & Uptime
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 pt-12 border-t border-gray-700">
            
            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-electric mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">General: <a href="mailto:hello@stratigo.io" className="text-electric hover:underline">hello@stratigo.io</a></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-electric mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">Sales: <a href="mailto:bookings@stratigo.io" className="text-electric hover:underline">bookings@stratigo.io</a></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-electric mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">Support: <a href="mailto:support@stratigo.io" className="text-electric hover:underline">support@stratigo.io</a></p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-electric mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-300">Business Hours:</p>
                    <p className="text-gray-400 text-sm">Mon–Fri, 9:00–18:00 (CST)</p>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a href="https://linkedin.com/company/stratigo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://facebook.com/stratigo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com/stratigo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="https://youtube.com/@stratigo" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-electric transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Stay in the Loop</h4>
              <p className="text-gray-300 mb-4">
                Strategies, product updates, and best practices for growing your business online.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-electric focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-electric hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
                {subscribeStatus === "success" && (
                  <p className="text-green-400 text-sm">Successfully subscribed!</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Badges Strip */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-gray-300 text-sm font-medium">Free SSL & Backups</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
              <span className="text-gray-300 text-sm font-medium">Managed VPS Hosting</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-electric" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-gray-300 text-sm font-medium">Data Protection & Security-First</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Stratigo. All rights reserved.
            </div>
            
            {/* Utility Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link to="/accessibility" className="hover:text-electric transition-colors">
                Accessibility Statement
              </Link>
              <Link to="/do-not-sell" className="hover:text-electric transition-colors">
                Do Not Sell My Information
              </Link>
              <Link to="/sitemap" className="hover:text-electric transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

