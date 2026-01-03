import { motion } from "framer-motion";
import { Check, ArrowRight, Bot, Video, UserCheck, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import sreshaLogo from "@assets/sreshta_edutech_logo.jpg";
import fresherLogo from "@assets/fresher_logo.png";

const products = [
  {
    icon: <Bot className="h-10 w-10 text-blue-500" />,
    title: "C³ Bot",
    category: "AI Chatbot",
    description: "An advanced conversational AI powered by ChatGPT integration. Enhance customer support and engagement with intelligent, natural language processing capabilities.",
    features: ["24/7 Support", "Multi-language", "Custom Knowledge Base"]
  },
  {
    icon: <Video className="h-10 w-10 text-purple-500" />,
    title: "USGT Toolkit",
    category: "Video Tools",
    description: "Universal Subtitle Generator Toolkit. Automatically generate accurate subtitles for videos in multiple languages, improving accessibility and reach.",
    features: ["High Accuracy", "Multi-format Export", "Time-sync"]
  },
  {
    icon: <UserCheck className="h-10 w-10 text-emerald-500" />,
    title: "Talent Scan AI",
    category: "HR Tech",
    description: "AI-powered recruitment platform that screens candidates, parses resumes, and matches the best talent to your job requirements instantly.",
    features: ["Resume Parsing", "Candidate Ranking", "Bias Reduction"]
  },
  {
    icon: <BarChart className="h-10 w-10 text-orange-500" />,
    title: "Work Efficiency Tracker",
    category: "Productivity",
    description: "Monitor and analyze employee productivity with AI-driven insights. Identify bottlenecks and optimize workflows for better performance.",
    features: ["Real-time Analytics", "Time Tracking", "Performance Reports"]
  },
  {
    icon: <img src={fresherLogo} alt="FresherReady" className="h-16 w-auto object-contain" />,
    title: "FresherReady",
    category: "EduTech",
    description: "Fresher Ready is an AI-powered self-paced learning platform that helps fresh graduates bridge the gap between their degree and employment through technical training, communication coaching, aptitude preparation, and direct job placement opportunities.",
    features: ["Self-paced Learning", "Communication Coaching", "Job Placement", "Aptitude Preparation", "Technical Training"]
  },
  {
    icon: <img src={sreshaLogo} alt="Sreshta Edutech" className="h-16 w-auto object-contain" />,
    title: "Sreshta Edutech",
    category: "EduTech",
    description: "Sreshta Edutech is an innovative educational platform focused on providing comprehensive learning solutions for students and educators. It offers interactive courses, real-time assessments, and personalized learning paths to enhance educational outcomes.",
    features: ["Self-Paced Learning", "Exams Preparation", "Interactive Content", "Personalized Learning" ,"Real-Time Assessments", "Educator Resources"]
  }
];

export default function Products() {
  const [, setLocation] = useLocation();

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">Product Suite</h1>
            <p className="text-slate-300 max-w-2xl text-lg leading-relaxed">
              Our shelf-ready AI products are designed to solve specific industry challenges immediately. Deploy intelligent tools without the wait.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="p-8 flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="px-6 py-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                    {product.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-heading">{product.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-6 pt-4 border-t border-slate-100">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <Button 
                  className="w-full bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:border-primary/50 group"
                  onClick={() => setLocation("/contact")}
                >
                  Request Demo <ArrowRight className="ml-2 h-4 w-4 text-primary" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
