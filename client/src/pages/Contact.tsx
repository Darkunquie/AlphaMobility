import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import contactHero from "@assets/generated_images/futuristic_global_communication_network.png";
import officeImg from "@assets/generated_images/modern_office_reception_concept.png";

export default function Contact() {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white h-[400px] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={contactHero} 
            alt="Global Connectivity" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-medium text-blue-200 uppercase tracking-wider">We're Online</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
              Let's Build the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Future Together</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              Ready to transform your business with AI? Our team of experts is standing by to discuss your unique challenges and opportunities.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                Contact Info
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-blue-100 p-3 rounded-full shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-1">Email Us</h4>
                    <a href="mailto:info@alphabetmobility.org" className="text-slate-600 hover:text-blue-600 transition-colors block">info@alphabetmobility.com</a>
                    <a href="mailto:careers@alphabetmobility.org" className="text-slate-600 hover:text-blue-600 transition-colors block">careers@alphabetmobility.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="bg-cyan-100 p-3 rounded-full shrink-0">
                    <Clock className="h-5 w-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm uppercase tracking-wide mb-1">Business Hours</h4>
                    <p className="text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-500 text-sm">Support available 24/7</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors"></div>
              <img src={officeImg} alt="Office" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-400" />
                  Global Offices
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-bold text-lg mb-1">United States</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      123 Tech Park, Innovation Blvd<br/>
                      New Jersey, NJ 08817
                    </p>
                  </div>
                  
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-bold text-lg mb-1">India</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      Aditi Arcade, SAP Street, Ameerpet<br/>
                      Hyderabad, Telangana ,500038
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 font-heading mb-2">Send us a Message</h2>
              <p className="text-slate-600">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">First Name</label>
                  <Input placeholder="John" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Last Name</label>
                  <Input placeholder="Doe" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <Input type="email" placeholder="john@company.com" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Phone Number (Optional)</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Industry</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Smart Retail</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="edtech">Education Technology</SelectItem>
                      <SelectItem value="fintech">Fintech</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Service Interest</label>
                  <Select>
                    <SelectTrigger className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors">
                      <SelectValue placeholder="What are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                      <SelectItem value="app-dev">Mobile App Development</SelectItem>
                      <SelectItem value="cloud">Cloud Infrastructure</SelectItem>
                      <SelectItem value="consulting">IT Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project goals, timeline, and requirements..." 
                  className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none" 
                />
              </div>

              <div className="pt-4">
                <Button type="submit" size="lg" className="w-full md:w-auto h-14 px-8 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-blue-900/20 transition-all">
                  Send Message <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
