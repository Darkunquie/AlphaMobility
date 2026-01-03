import { useRoute, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, BarChart, Users, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import generated images
import retailImg from "@assets/generated_images/retail_analytics_dashboard_ui.png";
import healthcareImg from "@assets/generated_images/healthcare_patient_portal_mobile_app.png";
import educationImg from "@assets/generated_images/edtech_learning_platform_dashboard.png";
import fintechImg from "@assets/generated_images/fintech_investment_dashboard.png";
import manufacturingImg from "@assets/generated_images/industrial_iot_monitoring_system.png";

const caseStudies = {
  "smart-retail": {
    title: "Global Retailer Digital Transformation",
    industry: "Smart Retail",
    image: retailImg,
    challenge: "A leading fashion retailer struggled with fragmented customer data across online and offline channels, resulting in generic marketing and lost sales opportunities.",
    solution: "We implemented an AI-driven omnichannel platform that unifies customer profiles. The solution utilizes computer vision for in-store analytics and machine learning for personalized online recommendations.",
    features: [
      "Real-time inventory synchronization",
      "Smart fitting room technology",
      "Predictive demand forecasting",
      "Personalized loyalty app integration"
    ],
    results: [
      { metric: "40%", label: "Increase in Online Conversion" },
      { metric: "25%", label: "Reduction in Returns" },
      { metric: "3.5x", label: "ROI within 12 Months" }
    ]
  },
  "healthcare": {
    title: "Telehealth Platform for Rural Access",
    industry: "Healthcare",
    image: healthcareImg,
    challenge: "Healthcare providers needed a secure, reliable way to reach patients in remote areas who faced barriers to accessing specialized medical care.",
    solution: "We built a HIPAA-compliant telemedicine platform featuring high-definition video consultations, integrated remote patient monitoring (RPM), and secure electronic health record (EHR) synchronization.",
    features: [
      "HD Video Consultation with low-bandwidth mode",
      "IoT integration for vitals monitoring",
      "AI-assisted preliminary diagnosis",
      "End-to-end encryption"
    ],
    results: [
      { metric: "50k+", label: "Remote Consultations/Month" },
      { metric: "30%", label: "Reduction in Readmissions" },
      { metric: "98%", label: "Patient Satisfaction Score" }
    ]
  },
  "edtech": {
    title: "Adaptive Learning Ecosystem",
    industry: "EdTech",
    image: educationImg,
    challenge: "Educational institutions struggled to provide personalized attention to students in large remote classes, leading to disengagement and lower pass rates.",
    solution: "We developed an adaptive learning management system (LMS) that uses AI to analyze student performance in real-time and dynamically adjust curriculum difficulty and content formats.",
    features: [
      "AI-driven curriculum adaptation",
      "Gamified learning paths",
      "Real-time engagement analytics",
      "Automated grading assistance"
    ],
    results: [
      { metric: "45%", label: "Improvement in Test Scores" },
      { metric: "60%", label: "Increase in Course Completion" },
      { metric: "2x", label: "Teacher Efficiency" }
    ]
  },
  "fintech": {
    title: "Next-Gen Wealth Management App",
    industry: "Fintech",
    image: fintechImg,
    challenge: "A traditional bank wanted to attract millennial investors who found their existing tools outdated and difficult to navigate.",
    solution: "We designed and built a mobile-first wealth management application with an intuitive UI, real-time market data visualization, and robo-advisory features powered by algorithmic trading models.",
    features: [
      "Biometric security authentication",
      "Real-time portfolio visualization",
      "AI Robo-advisor integration",
      "Blockchain-based transaction ledger"
    ],
    results: [
      { metric: "200%", label: "Growth in User Base" },
      { metric: "$500M", label: "Assets Under Management" },
      { metric: "<1s", label: "Transaction Latency" }
    ]
  },
  "manufacturing": {
    title: "Smart Factory IoT Implementation",
    industry: "Manufacturing",
    image: manufacturingImg,
    challenge: "A manufacturing plant faced frequent unplanned downtime and quality control issues due to aging machinery and lack of visibility.",
    solution: "We deployed a comprehensive Industrial IoT (IIoT) solution using sensors to monitor equipment health, coupled with a predictive maintenance dashboard to alert operators before failures occur.",
    features: [
      "Predictive maintenance alerts",
      "Digital Twin technology",
      "Automated quality inspection",
      "Energy consumption optimization"
    ],
    results: [
      { metric: "85%", label: "Reduction in Downtime" },
      { metric: "15%", label: "Energy Savings" },
      { metric: "99.9%", label: "Quality Assurance Rate" }
    ]
  }
};

export default function CaseStudy() {
  const [, setLocation] = useLocation();
  const [match, params] = useRoute("/case-study/:id");
  const id = params?.id;
  const data = caseStudies[id as keyof typeof caseStudies];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Case Study Not Found</h2>
          <Button onClick={() => setLocation("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/">
            <div className="inline-flex items-center text-slate-300 hover:text-white mb-8 transition-colors cursor-pointer">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </div>
          </Link>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
            <span className="bg-blue-500/20 text-blue-200 border border-blue-500/30 px-4 py-1.5 rounded-full text-sm font-medium">
              {data.industry}
            </span>
            <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Case Study</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold font-heading leading-tight max-w-4xl"
          >
            {data.title}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="p-2 bg-rose-100 rounded-lg text-rose-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  The Challenge
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {data.challenge}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                    <Award className="h-5 w-5" />
                  </div>
                  The Solution
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {data.solution}
                </p>
                <ul className="space-y-3">
                  {data.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Column: Visuals & Results */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 group">
                <img 
                  src={data.image} 
                  alt={data.title} 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-blue-400" /> Key Results
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {data.results.map((res, i) => (
                    <div key={i} className="text-center sm:text-left">
                      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-1">
                        {res.metric}
                      </div>
                      <div className="text-sm text-slate-400 font-medium leading-snug">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to achieve similar results?</h2>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8" onClick={() => setLocation("/contact")}>
              Start Your Project
            </Button>
            <Button size="lg" variant="outline" className="bg-white hover:bg-slate-50 text-slate-900 rounded-full px-8" onClick={() => setLocation("/services")}>
              View All Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
