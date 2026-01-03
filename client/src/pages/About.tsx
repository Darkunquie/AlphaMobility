import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Award, ArrowRight, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import visionImg from "@assets/generated_images/visionary_futuristic_horizon_concept.png";
import missionImg from "@assets/generated_images/mission_focused_team_collaboration.png";
import teamImg from "@assets/generated_images/professional_software_engineering_team_collaborating.png";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-white mb-6">
              Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Future of Intelligence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Alphabet Mobility is a global technology leader dedicated to solving the world's most complex challenges through Artificial Intelligence and software innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-6">
                From Startup to Global Innovator
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Founded in 2015, Alphabet Mobility began with a simple yet ambitious goal: to democratize access to enterprise-grade AI technologies. What started as a small team of data scientists in a garage has grown into a multinational corporation serving Fortune 500 clients across the globe.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We believe that technology should be an enabler, not a barrier. Our diverse team of over 500 engineers, designers, and strategists works tirelessly to bridge the gap between human potential and digital capability.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Award className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Award Winning</div>
                    <div className="text-xs text-slate-500">Industry recognized</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <Globe className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Global Reach</div>
                    <div className="text-xs text-slate-500">Clients in 30+ countries</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl -z-10 -rotate-3"></div>
              <img 
                src={teamImg} 
                alt="Alphabet Mobility Team" 
                className="rounded-xl shadow-lg w-full object-cover h-[500px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={visionImg} 
                  alt="Our Vision" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">"The future belongs to those who build it."</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                <Lightbulb className="h-4 w-4" /> Our Vision
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-6">
                Empowering a Smarter World
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We envision a world where Artificial Intelligence seamlessly augments human capabilities, solving the most pressing challenges in healthcare, environment, and commerce.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our vision is to be the catalyst for this transformation, building the digital infrastructure that will support the next century of human advancement. We strive to create technology that is ethical, accessible, and transformative.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                <Target className="h-4 w-4" /> Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading mb-6">
                Innovation with Purpose
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Our mission is to deliver high-impact digital solutions that drive tangible value for our clients and society. We are committed to:
              </p>
              <ul className="space-y-4">
                {[
                  "Accelerating digital transformation for businesses of all sizes.",
                  "Fostering a culture of continuous learning and innovation.",
                  "Maintaining the highest standards of data security and ethics.",
                  "Creating sustainable technology that benefits the planet."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Shield className="h-3 w-3 text-blue-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img 
                  src={missionImg} 
                  alt="Our Mission" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Join Us on Our Journey</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Whether you're looking to transform your business or build a career in tech, there's a place for you at Alphabet Mobility.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
              onClick={() => setLocation("/contact")}
            >
              Work With Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-slate-600 hover:bg-slate-800 rounded-full px-8"
              onClick={() => setLocation("/careers")}
            >
              Join Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
