import { Switch, Route, Router as WouterRouter } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Markets from "@/pages/Markets";
import Certifications from "@/pages/Certifications";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-6xl font-bold text-gray-900 mb-4">404</p>
        <p className="text-gray-500 mb-8">Page not found.</p>
        <a href="/" className="btn-gold">Go Home</a>
      </div>
    </div>
  );
}

function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/markets" component={Markets} />
        <Route path="/certifications" component={Certifications} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <WouterRouter>
      <Router />
    </WouterRouter>
  );
}
