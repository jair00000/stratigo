import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import './App.css'

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Careers = lazy(() => import("./pages/Careers"));
const Hosting = lazy(() => import("./pages/Hosting"));
const Marketing = lazy(() => import("./pages/Marketing"));
const SoftwareDevelopment = lazy(() => import("./pages/SoftwareDevelopment"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Cookies = lazy(() => import("./pages/Cookies"));
const SLA = lazy(() => import("./pages/SLA"));
const Support = lazy(() => import("./pages/Support"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-electric"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/marketing" element={<Marketing />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/hosting" element={<Hosting />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/sla" element={<SLA />} />
            <Route path="/support" element={<Support />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
