import { Switch, Route } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";
import About from "@/pages/About";
import CaseStudy from "@/pages/CaseStudy";
import NotFound from "@/pages/not-found";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/careers" component={Careers} />
        <Route path="/case-study/:id" component={CaseStudy} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
