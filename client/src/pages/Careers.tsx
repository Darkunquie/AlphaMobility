import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Upload, Linkedin, Mail, User, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@assets/generated_images/diverse_team_collaborating_in_a_modern_office.png";

const jobs = [
  {
    title: "Senior AI Engineer",
    location: "Hyderabad / Remote",
    type: "Full-time",
    dept: "Engineering",
    desc: "We are looking for an experienced AI Engineer to lead our NLP initiatives. Proficiency in Python, TensorFlow/PyTorch, and LLMs is required."
  },
  {
    title: "Full Stack Developer",
    location: "Hyderabad, India",
    type: "Full-time",
    dept: "Engineering",
    desc: "Join our core product team to build scalable web applications. Expertise in React, Node.js, and Cloud services is essential."
  },
  {
    title: "Business Development Manager",
    location: "USA (Remote)",
    type: "Full-time",
    dept: "Sales",
    desc: "Drive growth in the US market. We need a results-oriented sales professional with experience in B2B software services."
  },
  {
    title: "UI/UX Designer",
    location: "Hyderabad, India",
    type: "Full-time",
    dept: "Design",
    desc: "Create beautiful, intuitive interfaces for our AI products. Strong portfolio demonstrating web and mobile app design skills required."
  }
];

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Capture job title before clearing state
    const jobTitle = selectedJob?.title || "this";

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedJob(null);
      setResumeName(null);
      toast({
        title: "Application submitted successfully",
        description: `Thank you for applying to the ${jobTitle} position. We will be in touch soon.`,
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/60 z-10" />
        <img 
          src={heroImage} 
          alt="Diverse team collaborating" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight"
          >
            Shape the Future of AI
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-200 max-w-2xl font-light"
          >
            Join a team of innovators, dreamers, and builders at Alphabet Mobility.
          </motion.p>
        </div>
      </div>

      {/* Benefits / Values Section - Brief */}
      <div className="bg-white py-16 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Impactful Work</h3>
              <p className="text-slate-600">Work on cutting-edge technologies that solve real-world problems.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Growth Culture</h3>
              <p className="text-slate-600">Continuous learning opportunities, mentorship, and career advancement.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-slate-900">Work-Life Balance</h3>
              <p className="text-slate-600">Flexible working hours and remote options to support your lifestyle.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">Open Positions</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We are constantly growing. Check out our current openings below.
            </p>
          </div>

          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">{job.title}</h3>
                        <span className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wide border border-blue-100">{job.dept}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-slate-400" /> {job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-slate-400" /> {job.type}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-base">{job.desc}</p>
                  </div>
                  <div className="flex items-center">
                    <Button 
                      size="lg"
                      className="w-full md:w-auto bg-slate-900 hover:bg-primary text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl"
                      onClick={() => setSelectedJob(job)}
                    >
                      Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Dialog */}
      <Dialog open={!!selectedJob} onOpenChange={(open) => !open && setSelectedJob(null)}>
        <DialogContent className="sm:max-w-[800px] w-[95vw] max-h-[90vh] p-0 gap-0 border border-slate-200 shadow-2xl bg-white sm:rounded-xl overflow-hidden flex flex-col">
          <form onSubmit={handleSubmit} className="flex flex-col h-full min-h-0 w-full">
            <div className="bg-slate-900 px-6 py-4 relative shrink-0 overflow-hidden">
              {/* Abstract Background Shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl pointer-events-none" />
              
              <DialogHeader className="relative z-10 flex flex-row items-center justify-between gap-4 text-left">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/10 text-white/90 text-[10px] font-medium backdrop-blur-md border border-white/10 shadow-sm">
                      <Briefcase className="w-3 h-3" />
                      <span>{selectedJob?.dept}</span>
                    </div>
                    <span className="text-slate-400 text-xs font-light tracking-wide uppercase">Job ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                  </div>
                  <DialogTitle className="text-xl font-bold text-white font-heading tracking-tight">Apply for {selectedJob?.title}</DialogTitle>
                  <div className="flex items-center gap-3 text-slate-300 text-xs mt-1 font-light">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {selectedJob?.location}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {selectedJob?.type}</span>
                  </div>
                </div>
              </DialogHeader>
            </div>
            
            <div className="p-6 bg-white overflow-y-auto custom-scrollbar flex-1 min-h-0">
              <div className="grid grid-cols-12 gap-5">
                {/* Personal Info - Row 1 */}
                <div className="col-span-12 md:col-span-6 space-y-1.5">
                  <Label htmlFor="firstName" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">First Name</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      className="pl-9 h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 rounded-lg text-sm" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-1.5">
                  <Label htmlFor="lastName" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Last Name</Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      className="pl-9 h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 rounded-lg text-sm" 
                      required 
                    />
                  </div>
                </div>

                {/* Contact Info - Row 2 */}
                <div className="col-span-12 md:col-span-6 space-y-1.5">
                  <Label htmlFor="email" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Email</Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="pl-9 h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 rounded-lg text-sm" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 space-y-1.5">
                  <Label htmlFor="phone" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Phone</Label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 000-0000" 
                      className="pl-9 h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 rounded-lg text-sm" 
                      required 
                    />
                  </div>
                </div>

                {/* Links & Resume - Row 3 */}
                <div className="col-span-12 md:col-span-6 space-y-1.5">
                  <Label htmlFor="linkedin" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">LinkedIn</Label>
                  <div className="relative group">
                    <Linkedin className="absolute left-3 top-2.5 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <Input 
                      id="linkedin" 
                      type="url" 
                      placeholder="linkedin.com/in/johndoe" 
                      className="pl-9 h-10 bg-slate-50 border-slate-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-200 rounded-lg text-sm" 
                    />
                  </div>
                </div>
                
                <div className="col-span-12 md:col-span-6 space-y-1.5">
                  <Label htmlFor="resume" className="text-slate-700 font-semibold text-xs uppercase tracking-wider">Resume / CV</Label>
                  <div className="relative group cursor-pointer">
                    <div className={`border-2 border-dashed rounded-lg px-4 flex items-center gap-3 transition-all duration-300 h-10 ${resumeName ? 'border-primary bg-primary/5' : 'border-slate-300 hover:bg-slate-50 hover:border-primary/50'}`}>
                      <Input 
                        id="resume" 
                        type="file" 
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required={!resumeName}
                      />
                      
                      {resumeName ? (
                        <>
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                            <Briefcase className="h-3 w-3" />
                          </div>
                          <span className="text-sm font-medium text-slate-900 truncate flex-1">{resumeName}</span>
                          <span className="text-[10px] text-primary font-bold uppercase tracking-wider shrink-0 bg-white px-2 py-0.5 rounded-full border border-primary/20">Change</span>
                        </>
                      ) : (
                        <>
                          <Upload className="h-4 w-4 text-slate-400" />
                          <span className="text-sm text-slate-500 truncate">Upload Resume (PDF/DOCX)</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 shrink-0 flex items-center gap-4 z-20">
               <Button 
                type="button" 
                variant="ghost" 
                onClick={() => setSelectedJob(null)}
                className="text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 font-medium"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                size="lg"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 transition-all duration-300 rounded-xl h-12 text-base font-bold tracking-wide" 
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Submit Application <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
