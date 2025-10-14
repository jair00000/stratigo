import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Hosting from "./pages/Hosting";
import Marketing from "./pages/Marketing";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import SLA from "./pages/SLA";
import Support from "./pages/Support";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import './App.css'

function App() {
  return (
    <Router>
      <MainLayout>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
