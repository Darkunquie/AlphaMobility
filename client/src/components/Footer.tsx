import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-2xl text-white font-heading">
              <Rocket className="h-6 w-6" />
              <span>Alphabet Mobility</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Transforming businesses with cutting-edge AI technology and software outsourcing solutions. Learn. Innovate. Excel.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/"><span className="hover:text-primary cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="hover:text-primary cursor-pointer">About Us</span></Link></li>
              <li><Link href="/services"><span className="hover:text-primary cursor-pointer">Services</span></Link></li>
              <li><Link href="/products"><span className="hover:text-primary cursor-pointer">Products</span></Link></li>
              <li><Link href="/careers"><span className="hover:text-primary cursor-pointer">Careers</span></Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>AI & ML Development</li>
              <li>Software Outsourcing</li>
              <li>Web & Mobile App Dev</li>
              <li>Cloud Solutions</li>
              <li>Quality Assurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@alphabetmobility.org</span>
              </li>
            
            
              
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Hyderabad, India & USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Alphabet Mobility. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
