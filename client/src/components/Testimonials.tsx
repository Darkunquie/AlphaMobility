import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Alphabet Mobility transformed our legacy systems into a state-of-the-art AI infrastructure. Their team is simply world-class.",
    author: "Sarah Jenkins",
    role: "CTO, FinTech Global",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The efficiency gains we've seen with the C³ Bot are incredible. Customer satisfaction is up 40% since implementation.",
    author: "Michael Chen",
    role: "Director of Ops, RetailX",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Professional, timely, and technically superior. They didn't just build an app; they built a scalable business asset.",
    author: "Elena Rodriguez",
    role: "Founder, HealthAI",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Trusted by Industry Leaders</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 italic leading-relaxed">"{item.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={item.image} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
                />
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
