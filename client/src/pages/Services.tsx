import { motion } from "framer-motion";
import { Brain, Code, Smartphone, Cloud, Database, Shield, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import aiImg from "@assets/generated_images/artificial_intelligence_neural_network_concept.png";
import mobileImg from "@assets/generated_images/mobile_and_web_development_abstract_concept.png";
import cloudImg from "@assets/generated_images/cloud_computing_and_server_abstract.png";

export default function Services() {
  const [, setLocation] = useLocation();

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">Our Services</h1>
            <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
              We deliver end-to-end technology solutions designed to scale. From concept to deployment, our expertise drives your digital success.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Services - Alternating Layout */}
      <div className="py-24 space-y-24">
        {/* Service 1: AI */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Brain className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6">AI & Machine Learning</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Unlock the hidden potential of your data. We build custom machine learning models that predict trends, automate complex processes, and personalize user experiences.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Natural Language Processing (NLP)",
                  "Computer Vision Systems",
                  "Predictive Analytics & Forecasting",
                  "Custom Chatbots & Virtual Assistants"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check className="h-5 w-5 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={() => setLocation("/contact")}>Discuss Your AI Project</Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 bg-blue-600/10 rounded-3xl -z-10 rotate-3"></div>
              <img src={aiImg} alt="AI Visualization" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </section>

        {/* Service 2: Web/Mobile */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-600/10 rounded-3xl -z-10 -rotate-3"></div>
              <img src={mobileImg} alt="Mobile Development" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                <Smartphone className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6">Web & Mobile Development</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                We craft intuitive, high-performance applications that users love. Whether it's a complex enterprise platform or a consumer-facing mobile app, we prioritize UX and scalability.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "React / Next.js Web Applications",
                  "iOS & Android Native Apps",
                  "Cross-Platform Solutions (Flutter/React Native)",
                  "Progressive Web Apps (PWA)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check className="h-5 w-5 text-purple-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setLocation("/contact")}>Start Building</Button>
            </motion.div>
          </div>
        </section>

        {/* Service 3: Cloud */}
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600">
                <Cloud className="h-8 w-8" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 font-heading mb-6">Cloud & Infrastructure</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Modernize your infrastructure for the cloud-native era. We help you migrate, optimize, and manage your cloud environments for maximum efficiency and security.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "AWS / Azure / GCP Architecture",
                  "DevOps & CI/CD Pipelines",
                  "Serverless Computing",
                  "Cloud Security & Compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check className="h-5 w-5 text-cyan-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-cyan-600 hover:bg-cyan-700" onClick={() => setLocation("/contact")}>Optimize Your Cloud</Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative"
            >
              <div className="absolute -inset-4 bg-cyan-600/10 rounded-3xl -z-10 rotate-3"></div>
              <img src={cloudImg} alt="Cloud Infrastructure" className="rounded-2xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Additional Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-heading text-slate-900">More Capabilities</h2>
            <p className="text-slate-600 mt-4">Comprehensive solutions for every stage of your growth.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="h-8 w-8 text-indigo-500" />,
                title: "Software Outsourcing",
                desc: "Dedicated development teams integrated seamlessly into your workflow."
              },
              {
                icon: <Database className="h-8 w-8 text-emerald-500" />,
                title: "Data Engineering",
                desc: "Robust data pipelines and warehousing solutions for big data processing."
              },
              {
                icon: <Shield className="h-8 w-8 text-rose-500" />,
                title: "Quality Assurance",
                desc: "Automated testing frameworks ensuring zero-defect delivery."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.desc}</p>
                <div className="mt-6 pt-6 border-t border-slate-50">
                  <Link href="/contact">
                    <div className="text-sm font-bold text-primary flex items-center gap-1 hover:gap-2 transition-all cursor-pointer">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
