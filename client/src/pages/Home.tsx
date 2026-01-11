import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight, 
  MessageCircle, 
  Bot, 
  Zap, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  X,
  Coffee,
  Code,
  Rocket,
  Maximize2,
  Users,
  Send
} from "lucide-react";
import logoImg from "@assets/image_1768131702952.png";
import founderImg from "@assets/image_1768131693800.png";

export default function Home() {
  const [showHelpdesk, setShowHelpdesk] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi 👋 I’m Divhanya AI Assistant. I help businesses automate bookings, leads and revenue systems. To help you best, I’ll just ask a few quick questions:\n\n1️⃣ What type of business do you run? (e.g. salon, clinic, coaching, real estate, agency, etc.)\n2️⃣ On average, how many enquiries or leads do you get per month?\n3️⃣ What's your best contact number (with country code)?\n4️⃣ What's the main problem you're facing right now? (missed calls / no bookings / low leads / slow follow-ups / something else?)" }
  ]);

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setChatInput("");

    // Smarter Scripted Response Logic
    setTimeout(() => {
      let botResponse = "";
      const input = chatInput.toLowerCase();
      
      if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        botResponse = "Hi there! 👋 I'm Divhanya's AI Assistant. I help businesses like yours automate complex workflows and recover lost revenue. What type of business are you looking to transform today?";
      } else if (input.includes("hotel") || input.includes("resort") || input.includes("booking")) {
        botResponse = "For Hotels & Resorts, we implement a Direct Booking Revenue Infrastructure. It bypasses OTA commissions (saving you 20-40%) and uses WhatsApp triggers for instant guest engagement. Would you like to know about our tiered pricing for this?";
      } else if (input.includes("clinic") || input.includes("doctor") || input.includes("dentist") || input.includes("appointment")) {
        botResponse = "Our 360° Appointment Booking System is perfect for healthcare. It automates the journey from lead capture to follow-up, significantly reducing no-shows. How many leads are you currently managing monthly?";
      } else if (input.includes("price") || input.includes("cost") || input.includes("how much") || input.includes("subscription")) {
        botResponse = "We offer flexible plans:\n• Starter: ₹3,000 - ₹5,000/mo (CRM & Basic Workflows)\n• Growth: ₹7,000 - ₹8,000/mo (Advanced Automation)\n• Pro: ₹15,000/mo (Full Revenue Growth Stack)\n\nWhich stage is your business currently in?";
      } else if (input.includes("n8n") || input.includes("workflow") || input.includes("integrate") || input.includes("connect")) {
        botResponse = "We are experts in n8n and advanced workflow integration. We can connect your CRM, Social Ads, and WhatsApp into one cohesive engine. Are you looking to automate manual data entry or lead routing?";
      } else if (input.includes("ads") || input.includes("marketing") || input.includes("facebook") || input.includes("google")) {
        botResponse = "Our Social & Ad Automation funnels are designed for high conversion. We automate retargeting and lead syncing so no ad spend is wasted. Do you already have active campaigns running?";
      } else if (input.includes("founder") || input.includes("divyansh") || input.includes("who built")) {
        botResponse = "Divhanya Modulers was founded by Divyansh Sharma, an AI & Data Science engineer from IIT Jodhpur. He built this system to democratize enterprise-grade automation for SMBs. Would you like to book an audit call with him?";
      } else if (input.includes("contact") || input.includes("call") || input.includes("whatsapp") || input.includes("number")) {
        botResponse = "You can reach our team at +91 8077073548 or via email at divhanyamodulers@gmail.com. Alternatively, I can take your number here and have a specialist call you back?";
      } else {
        botResponse = "That's interesting! 🧠 Our systems are highly customizable. To give you the best advice, could you tell me: 1) Your business type, 2) Your monthly inquiry volume, and 3) The biggest bottleneck you're facing right now?";
      }
      
      setMessages(prev => [...prev, { role: "bot", content: botResponse }]);
    }, 1000);
  };

  // Animations variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20">
      {/* Fixed Watermark Logo */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] opacity-[0.09] pointer-events-none z-0">
        <img src={logoImg} alt="Watermark" className="w-full h-full object-contain grayscale" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] backdrop-blur-sm uppercase"
          >
            <div className="w-3 h-3 rounded-full border border-primary/50 flex items-center justify-center">
              <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
            </div>
            NEXT GEN WEB DEVELOPMENT
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-[100px] font-black font-display mb-8 leading-[0.9] text-white uppercase tracking-tighter"
          >
            DIVHANYA<br />
            MODULERS —<br />
            <span className="text-primary text-glow drop-shadow-[0_0_30px_rgba(0,255,255,0.6)] brightness-125">
              AI AUTOMATIONS &<br />TECHNOLOGIES
            </span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-12 space-y-4"
          >
            <p className="text-xs md:text-sm text-white font-bold tracking-[0.05em] uppercase">
              Intelligent Revenue-Driven Automations for Small & Medium Businesses
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              We do not sell software. We deliver full-stack revenue systems that automate bookings, lead conversions, follow-ups, workflows, CRM, and digital conversions with zero headaches — empowering businesses to grow effortlessly.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-primary/20 text-primary border border-primary/40 hover:bg-primary/30 font-bold h-14 px-10 text-sm tracking-widest rounded-sm w-full sm:w-auto" asChild>
              <a href="#contact" className="flex items-center gap-2">Explore Modules <ChevronRight className="w-4 h-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 text-sm tracking-widest rounded-sm w-full sm:w-auto border-white/10 hover:bg-white/5 bg-transparent text-gray-400 font-bold">
              Start Project
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 max-w-4xl mx-auto"
          >
            {[
              { label: "Revenue Increase", value: "40%+" },
              { label: "Hours Saved", value: "24/7" },
              { label: "Automation", value: "100%" },
              { label: "Setup Time", value: "<7 Days" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold font-display text-white">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 relative bg-black/40">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black font-display mb-4 uppercase tracking-tighter">
              HOW <span className="text-secondary text-glow drop-shadow-[0_0_15px_rgba(157,0,255,0.5)]">IT WORKS</span>
            </h2>
            <p className="text-gray-500 text-sm font-medium">A streamlined process from concept to reality.</p>
          </div>

          <div className="relative mt-20">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[30px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Consultation", icon: <Coffee className="w-6 h-6" />, desc: "We discuss your vision, requirements, and business goals." },
                { name: "Strategy & Design", icon: <Users className="w-6 h-6" />, desc: "Our team crafts a blueprint and modern UI for your approval." },
                { name: "Development", icon: <Code className="w-6 h-6" />, desc: "We build your solution using cutting-edge tech stacks." },
                { name: "Launch", icon: <Rocket className="w-6 h-6" />, desc: "Deployment, testing, and handover. Your system goes live." }
              ].map((step, i) => (
                <motion.div 
                  key={step.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-black border border-secondary/30 flex items-center justify-center text-secondary shadow-[0_0_15px_rgba(157,0,255,0.2)] mb-8 group hover:scale-110 transition-transform cursor-default relative overflow-hidden">
                    <div className="absolute inset-0 bg-secondary/5"></div>
                    <span className="relative z-10">{step.icon}</span>
                  </div>
                  <div className="glass-card p-6 rounded-xl border border-white/5 w-full text-center">
                    <h3 className="text-lg font-bold tracking-wider uppercase mb-3 text-white">{step.name}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-lg">
                Scalable solutions designed to automate your workflows and maximize revenue.
              </p>
            </div>
            <Button variant="link" className="text-primary" asChild>
              <a href="#contact" className="flex items-center gap-2">View Full Pricing <ChevronRight className="w-4 h-4" /></a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Direct Booking Revenue Infrastructure"
              price="Starter: ₹4,500/mo"
              description="Mobile-first direct booking page connected to automation backend. Includes interactive mobile UI, live offers, WhatsApp triggers, guest trust blocks, and full workflow automation. Problem Solved: Hotels lose 20–40% revenue to third-party platforms. We bring direct bookings home."
              icon="hotel"
              delay={0}
            />
            <ServiceCard 
              title="WhatsApp & Chat Workflow Automation"
              price="Starter: ₹3,500/mo"
              description="Automated conversation flows, instant replies, enquiry categorization, follow-ups, and CRM sync. Includes smart auto-replies, missed-call triggers, and full chat history tracking. Problem Solved: Businesses miss inquiries due to slow replies."
              icon="whatsapp"
              delay={0.1}
            />
            <ServiceCard 
              title="Lead Capture & CRM Backends"
              price="Starter: ₹3,000/mo"
              description="Google Sheets or lightweight CRM backend tracking every lead source—forms, calls, landing pages. Real-time updates, lead scoring, and weekly performance reports. Problem Solved: Leads slip through cracks → lost revenue."
              icon="crm"
              delay={0.2}
            />
            <ServiceCard 
              title="N8N Workflow Integrations (Smart Connectors)"
              price="Starter: ₹5,000/mo"
              description="Data sync pipelines and trigger-based workflows connecting forms, CRM, WhatsApp, ads, and more into a single automated engine. Problem Solved: Manual tasks slow business growth."
              icon="workflow"
              delay={0.3}
            />
            <ServiceCard 
              title="Social & Ads Automation (Performance Funnels)"
              price="Setup: ₹8,000"
              description="Automate ad triggers, creative refresh workflows, lead syncing, and retargeting sequences across Google and Meta platforms. Problem Solved: Manual ad campaigns cost time & money."
              icon="ads"
              delay={0.4}
            />
            <ServiceCard 
              title="360° Appointment Booking System"
              price="Starter: ₹4,000/mo"
              description="Automated booking journey for healthcare & service firms—form → WhatsApp → confirmation → reminders → follow-ups. Includes patient tagging and recovery systems. Problem Solved: No shows & manual appointment chaos."
              icon="booking"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">Why Businesses Trust <span className="text-primary">Divhanya</span></h2>
              
              <div className="space-y-6">
                {[
                  { title: "Revenue First", desc: "We don't just automate; we build systems that impact your bottom line directly.", icon: TrendingUp },
                  { title: "24/7 Operations", desc: "Your business never sleeps. Our bots handle customers while you rest.", icon: Clock },
                  { title: "Rapid Deployment", desc: "Get your systems live in days, not months. Speed is our currency.", icon: Zap },
                  { title: "Reliability", desc: "Built on robust enterprise-grade infrastructure designed for scale.", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-primary border border-white/10">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl border border-white/10 bg-black/50 overflow-hidden aspect-video md:aspect-square lg:aspect-auto h-full min-h-[400px] flex items-center justify-center"
            >
               {/* Abstract futuristic graphic representation */}
               <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
               <div className="relative z-10 text-center p-8">
                 <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full blur-[50px] opacity-50 mb-8 animate-pulse"></div>
                 <h3 className="text-2xl font-bold font-display text-white mb-2">AI-Based Revamp System</h3>
                 <div className="flex justify-center gap-4 mt-8">
                    <div className="px-4 py-2 bg-white/5 rounded border border-white/10 backdrop-blur text-xs">Data Ingestion</div>
                    <div className="text-primary">→</div>
                    <div className="px-4 py-2 bg-primary/20 rounded border border-primary/50 backdrop-blur text-xs text-primary font-bold shadow-[0_0_15px_rgba(0,255,255,0.3)]">AI Processing</div>
                    <div className="text-primary">→</div>
                    <div className="px-4 py-2 bg-white/5 rounded border border-white/10 backdrop-blur text-xs">Growth Output</div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(157,0,255,0.1),transparent_50%)] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative group"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-900">
                <img 
                  src={founderImg} 
                  alt="Divyansh Sharma" 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold font-display text-white tracking-wider">DIVYANSH SHARMA</h3>
                  <p className="text-secondary font-medium text-xs tracking-[0.2em] mt-1 uppercase">Founder & Lead Architect</p>
                </div>
                {/* Decorative Frame Elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-primary/40 rounded-tl-xl"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-primary/40 rounded-br-xl"></div>
              </div>
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="mb-8">
                <div className="text-primary text-6xl font-serif mb-4">“</div>
                <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight text-white mb-6">
                  We are entering an era where manual business processes are the <span className="text-primary text-glow">biggest liability.</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Divyansh leads with a vision to simplify automation — turning complex workflows into revenue generators for small and medium businesses.
                </p>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Engineering in AI & Data Science (IIT Jodhpur)", subtitle: "Indian Institute of Technology" },
                  { title: "Advanced Diploma in Computer Applications", subtitle: "ADCA" },
                  { title: "Course on Computer Concepts (CCC)", subtitle: "Professional Certification" },
                  { title: "Professional AI Tools Certification", subtitle: "Advanced Use Cases" },
                  { title: "ISRO Space Awareness Certificate", subtitle: "Department of Space, India" },
                ].map((cert, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                    className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-xl transition-all relative overflow-hidden group"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 group-hover:bg-primary transition-colors"></div>
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,255,0.8)]"></div>
                    <div>
                      <span className="text-sm font-bold text-gray-100 block">{cert.title}</span>
                      <span className="text-[10px] text-primary/60 uppercase tracking-widest">{cert.subtitle}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Ready to Automate?</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Book your free growth audit today. Let's identify the bottlenecks in your business and fix them with AI.
              </p>
              
              <div className="space-y-8 mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full" id="faq">
                  <AccordionItem value="item-1" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">What makes Divhanya Modulers different?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      We do not sell tech — we deliver measurable revenue systems. We focus on outcome systems, not tech fragments, ensuring every lead turns into measurable revenue.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">Do you handle everything?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes. Frontend, backend, automations, CRM, WhatsApp workflows — fully managed. You focus on business, we handle the tech.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">Who is this for?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Hotels, clinics, dentists, MSMEs, service firms, coaching institutes, and e-commerce funnels.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">How soon can I see results?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Typically within 7–14 days. Our rapid deployment model ensures you start recovering missed revenue quickly.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5" className="border-white/10">
                    <AccordionTrigger className="text-white hover:text-primary">Is there onboarding support?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      Yes, free audit + guided setup. We provide smooth onboarding and weekly optimization performance reports.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* Helpdesk Toggle */}
        <AnimatePresence>
          {showHelpdesk && (
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="bg-card border border-border p-4 rounded-xl shadow-2xl mb-2 w-72"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold">Helpdesk</h4>
                <button onClick={() => setShowHelpdesk(false)}><X className="w-4 h-4" /></button>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Have a question? Our support team is here to help.</p>
              <Button size="sm" className="w-full">Open Ticket</Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Widget Toggle */}
        <AnimatePresence>
          {showChat && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="bg-black border border-primary/30 w-[380px] h-[550px] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
            >
              <div className="bg-zinc-900 p-4 border-b border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/30">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs tracking-widest uppercase">DIVHANYA AI ASSISTANT</h4>
                    <span className="text-[10px] text-primary/60 font-mono">JARVIS_LINK_ACTIVE</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-white/30 hover:text-white"><Maximize2 className="w-3 h-3" /></button>
                  <button onClick={() => setShowChat(false)} className="text-white/30 hover:text-white"><X className="w-4 h-4" /></button>
                </div>
              </div>
              <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-black scrollbar-hide">
                <div className="flex flex-col gap-6">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${
                        msg.role === 'user' 
                          ? 'bg-primary p-3 rounded-xl rounded-tr-none text-xs font-bold text-black min-w-[40px] text-center' 
                          : 'bg-zinc-800/50 p-5 rounded-2xl rounded-tl-none max-w-[95%] text-sm text-gray-200 leading-relaxed border border-white/5 shadow-xl'
                      }`}>
                        {msg.content.split('\n').map((line, i) => (
                          <p key={i} className={i > 0 ? "mt-2" : ""}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 bg-zinc-900/50 border-t border-white/5">
                <div className="flex gap-2 bg-black rounded-lg border border-white/10 p-2">
                  <input 
                    className="flex-1 bg-transparent px-2 py-1 text-sm text-white focus:outline-none placeholder:text-gray-600" 
                    placeholder="Type your requirements..." 
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="p-2 bg-primary/20 text-primary rounded-md hover:bg-primary/30 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="flex gap-3 items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowChat(!showChat)}
            className="w-12 h-12 bg-black border border-primary/50 rounded-full flex items-center justify-center text-primary shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all"
          >
            <Bot className="w-6 h-6" />
          </motion.button>

          <motion.a
            href="https://wa.me/918077073548"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg relative group"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
            <MessageCircle className="w-7 h-7 relative z-10" />
          </motion.a>
        </div>
      </div>
    </div>
  );
}
