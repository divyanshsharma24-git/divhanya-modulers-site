import { motion } from "framer-motion";
import { BarChart3, MessageSquare, Database, Workflow, Users, Bot, Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  title: string;
  price: string;
  description: string;
  icon: "hotel" | "whatsapp" | "crm" | "workflow" | "ads" | "booking" | "full";
  delay: number;
}

const icons = {
  hotel: Globe,
  whatsapp: MessageSquare,
  crm: Database,
  workflow: Workflow,
  ads: Users,
  booking: Bot,
  full: Bot,
};

const serviceFeatures = {
  hotel: [
    "Interactive mobile-friendly booking UI",
    "Live offers & seasonal pricing blocks",
    "Click-to-WhatsApp + call triggers",
    "Service + Amenity highlights",
    "Guest trust blocks & reviews",
    "Backend automation connected to workflows"
  ],
  whatsapp: [
    "Smart auto-replies",
    "Quick replies for prices/availability",
    "Missed-call WhatsApp triggers",
    "Chat history CRM sync"
  ],
  crm: [
    "Real-time updates",
    "Lead scoring & tagging",
    "Status & follow-up timestamps",
    "Weekly performance reports"
  ],
  workflow: [
    "Data sync pipelines",
    "Trigger-based workflows",
    "Automated notifications",
    "Intelligent lead routing"
  ],
  ads: [
    "Google Ads automation",
    "Meta Ads integration",
    "IG automation",
    "Retargeting workflows"
  ],
  booking: [
    "Auto reminders",
    "No-show recovery system",
    "Patient tagging",
    "Daily schedules synced"
  ],
  full: [
    "Full funnel automation",
    "Chat automation + CRM",
    "Analytics dashboard",
    "Weekly optimization"
  ]
};

export function ServiceCard({ title, price, description, icon, delay }: ServiceProps) {
  const Icon = icons[icon];
  const features = serviceFeatures[icon] || [];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative h-full flex flex-col p-8 rounded-2xl bg-zinc-950/50 hover:bg-zinc-900/50 transition-all duration-300 border border-white/5 shadow-2xl">
        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4 font-display text-white leading-tight min-h-[3rem]">
          {title}
        </h3>
        
        <div className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">
          <span className="text-sm font-medium text-gray-400 mr-2">Starter:</span>
          {price.replace("Starter: ", "").replace("Pro: ", "")}
          <span className="text-xs text-gray-500 ml-1 font-normal italic">/ month</span>
        </div>
        
        <div className="space-y-4 mb-10 flex-grow">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <Check className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
              <span className="text-xs text-gray-400 leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline" 
          className="w-full h-12 rounded-lg border-white/10 hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 font-bold tracking-widest text-xs uppercase transition-all duration-300"
          asChild
        >
          <a href="#contact" className="flex items-center justify-center gap-2">
            SELECT MODULE
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
