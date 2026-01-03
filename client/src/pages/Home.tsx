import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Smartphone, Cloud, CheckCircle, Globe, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import heroBg from "@assets/generated_images/futuristic_city_data_interface_hero_background.png";
import teamImg from "@assets/generated_images/professional_software_engineering_team_collaborating.png";
import aiImg from "@assets/generated_images/artificial_intelligence_neural_network_concept.png";
import mobileImg from "@assets/generated_images/mobile_and_web_development_abstract_concept.png";
import cloudImg from "@assets/generated_images/cloud_computing_and_server_abstract.png";
import retailImg from "@assets/generated_images/futuristic_smart_retail_store_concept.png";
import healthcareImg from "@assets/generated_images/digital_healthcare_and_telemedicine_concept.png";
import educationImg from "@assets/generated_images/smart_education_and_edtech_concept.png";
import fintechImg from "@assets/generated_images/fintech_and_digital_banking_concept.png";
import manufacturingImg from "@assets/generated_images/smart_manufacturing_and_iot_concept.png";
import { Testimonials } from "@/components/Testimonials";
import { ClientLogos } from "@/components/ClientLogos";

export default function Home() {
  const [, setLocation] = useLocation();
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
        >
          <img 
            src={heroBg} 
            alt="Futuristic Digital City" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white pt-20">
          <motion.div 
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-200">Leading the AI Revolution</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold font-heading leading-tight tracking-tight">
              Powering the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Mobility</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light">
              Alphabet Mobility delivers enterprise-grade AI solutions and software engineering excellence. We transform complex data into actionable intelligence.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/services">
                <div className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white border-none rounded-full shadow-lg shadow-blue-900/20 transition-all hover:scale-105 btn-hover-effect flex items-center justify-center cursor-pointer">
                  Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Link>
              <Link href="/contact">
                <div className="h-14 px-8 text-lg text-white border border-slate-600 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-white rounded-full transition-all btn-hover-effect flex items-center justify-center cursor-pointer">
                  Schedule Consultation
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ClientLogos />

      {/* Stats Section */}
      <section className="py-10 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience", icon: <Globe className="h-5 w-5 text-blue-500" /> },
              { number: "200+", label: "Projects Delivered", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
              { number: "50+", label: "AI Experts", icon: <Users className="h-5 w-5 text-purple-500" /> },
              { number: "24/7", label: "Global Support", icon: <Zap className="h-5 w-5 text-yellow-500" /> },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 font-heading">{stat.number}</div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-[2rem] -z-10 rotate-3"></div>
              <img 
                src={teamImg} 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl border-4 border-white"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <p className="text-slate-900 font-bold text-lg mb-2">"Innovation is in our DNA."</p>
                <div className="flex items-center gap-2">
                  <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-slate-500">CEO, Alphabet Mobility</span>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Who We Are</h2>
                <h3 className="text-4xl font-bold text-slate-900 font-heading leading-tight">
                  Bridging the Gap Between <br />
                  <span className="text-slate-400">Complex Problems</span> & <span className="text-blue-600">Intelligent Solutions</span>
                </h3>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                Alphabet Mobility is more than just a software company. We are a collective of visionaries, engineers, and data scientists dedicated to pushing the boundaries of what's possible with Artificial Intelligence.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "Strategic Innovation", desc: "We align technology with your business goals." },
                  { title: "Technical Excellence", desc: "ISO 9001:2015 certified development processes." },
                  { title: "Global Delivery", desc: "Seamless execution across US and India time zones." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="mt-4" onClick={() => setLocation("/about")}>Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-heading mb-6">Engineered for Growth</h3>
            <p className="text-slate-600 text-lg">
              We leverage cutting-edge technologies to build scalable, robust, and intelligent solutions that drive business value.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={aiImg} alt="AI Services" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <Brain className="h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-slate-900 mb-3">AI & ML Solutions</h4>
                <p className="text-slate-600 mb-6">Advanced neural networks, predictive analytics, and natural language processing models tailored to your data.</p>
                <Link href="/services">
                  <div className="inline-flex items-center text-blue-600 font-semibold hover:gap-2 transition-all cursor-pointer">
                    Explore AI Services <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={mobileImg} alt="App Development" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <Smartphone className="h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-slate-900 mb-3">App Development</h4>
                <p className="text-slate-600 mb-6">Native and cross-platform mobile applications with stunning UI/UX designed for modern digital consumers.</p>
                <Link href="/services">
                  <div className="inline-flex items-center text-purple-600 font-semibold hover:gap-2 transition-all cursor-pointer">
                    View Mobile Solutions <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={cloudImg} alt="Cloud Services" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 text-cyan-600">
                  <Cloud className="h-6 w-6" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-slate-900 mb-3">Cloud Infrastructure</h4>
                <p className="text-slate-600 mb-6">Scalable cloud architecture, migration strategies, and serverless computing for enterprise resilience.</p>
                <Link href="/services">
                  <div className="inline-flex items-center text-cyan-600 font-semibold hover:gap-2 transition-all cursor-pointer">
                    Cloud Capabilities <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Industries We Serve</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-heading mb-6">Transforming Every Sector</h3>
            <p className="text-slate-600 text-lg">
              Our technology expertise spans across diverse industries, bringing innovation and efficiency to traditional business models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Retail",
                desc: "Reimagining shopping with AI-driven personalization and seamless checkout experiences.",
                img: retailImg,
                color: "text-rose-600",
                bgColor: "bg-rose-50",
                id: "smart-retail"
              },
              {
                title: "Healthcare",
                desc: "Empowering providers with predictive diagnostics and secure telemedicine platforms.",
                img: healthcareImg,
                color: "text-teal-600",
                bgColor: "bg-teal-50",
                id: "healthcare"
              },
              {
                title: "EdTech",
                desc: "Revolutionizing learning through adaptive platforms and immersive digital classrooms.",
                img: educationImg,
                color: "text-amber-600",
                bgColor: "bg-amber-50",
                id: "edtech"
              },
              {
                title: "Fintech",
                desc: "Securing financial futures with blockchain and next-gen banking solutions.",
                img: fintechImg,
                color: "text-indigo-600",
                bgColor: "bg-indigo-50",
                id: "fintech"
              },
              {
                title: "Manufacturing",
                desc: "Optimizing production with IoT sensors and automated quality control systems.",
                img: manufacturingImg,
                color: "text-slate-600",
                bgColor: "bg-slate-50",
                id: "manufacturing"
              }
            ].map((industry, i) => (
              <Link key={i} href={`/case-study/${industry.id}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all border border-slate-100 bg-white cursor-pointer h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={industry.img} 
                      alt={industry.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                  <div className="p-6">
                    <h4 className={`text-xl font-bold font-heading mb-3 ${industry.color}`}>{industry.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {industry.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Case Studies</span>
                      <ArrowRight className={`h-4 w-4 ${industry.color} transform group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
            
            {/* Call to Action Card for Industries */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all bg-gradient-to-br from-blue-600 to-cyan-600 flex flex-col justify-center items-center text-center p-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold font-heading text-white mb-3">Your Industry?</h4>
              <p className="text-blue-100 mb-6">
                Don't see your sector? We build custom solutions for unique challenges across all domains.
              </p>
              <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => setLocation("/contact")}>
                  Discuss Your Needs
                </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-8">Ready to Transform Your Business?</h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-10">
            Join hundreds of forward-thinking companies that trust Alphabet Mobility for their technology needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <div className="bg-blue-600 text-white hover:bg-blue-700 font-bold px-8 h-12 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center cursor-pointer">
                Get Started Now
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
