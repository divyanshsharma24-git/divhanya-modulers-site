import { motion } from "framer-motion";
import { ArrowRight, Bot, Database, MessageSquare, Workflow, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  title: string;
  price: string;
  description: string;
  icon: "hotel" | "whatsapp" | "crm" | "workflow" | "ads" | "booking" | "full";
  delay: number;
}

const icons = {
  hotel: BarChart3,
  whatsapp: MessageSquare,
  crm: Database,
  workflow: Workflow,
  ads: Users,
  booking: Bot,
  full: Bot,
};

export function ServiceCard({ title, price, description, icon, delay }: ServiceProps) {
  const Icon = icons[icon];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative h-full flex flex-col p-6 rounded-2xl glass-card hover:bg-white/5 transition-colors border border-white/5">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 text-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 font-display text-white group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="text-lg font-bold text-secondary mb-3">{price}</div>
        
        <p className="text-muted-foreground text-sm flex-grow mb-6 leading-relaxed">
          {description}
        </p>
        
        <Button 
          variant="outline" 
          className="w-full mt-auto border-white/10 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all group-hover:border-primary"
          asChild
        >
          <a href="#contact" className="flex items-center justify-center gap-2">
            Details <ArrowRight className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
