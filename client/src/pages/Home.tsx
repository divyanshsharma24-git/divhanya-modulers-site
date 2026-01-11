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
import { ChevronRight, MessageCircle, Bot, Zap, TrendingUp, Clock, ShieldCheck, X } from "lucide-react";
import logoImg from "@assets/image_1768131702952.png";
import founderImg from "@assets/image_1768131693800.png";

export default function Home() {
  const [showHelpdesk, setShowHelpdesk] = useState(false);
  const [showChat, setShowChat] = useState(false);

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
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium tracking-wide backdrop-blur-sm"
          >
            INTELLIGENT BUSINESS AUTOMATION
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/50"
          >
            Divhanya Modulers<br />
            <span className="text-primary text-glow">AI Automations & Tech</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build intelligent, revenue-driven automation systems for small & medium businesses. 
            Stop wasting time on manual tasks. Start scaling.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="neon-button bg-primary text-black font-bold h-14 px-8 text-lg w-full sm:w-auto" asChild>
              <a href="#contact">Book Growth Audit</a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto border-white/20 hover:bg-white/5" asChild>
              <a href="#services">Explore Services</a>
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
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              {["Discovery", "Audit", "Build", "Connect", "Test", "Live", "Insights"].map((step, i) => (
                <motion.div 
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-background border border-primary/50 flex items-center justify-center text-primary font-bold shadow-[0_0_15px_rgba(0,255,255,0.3)] mb-4 group hover:scale-110 transition-transform cursor-default">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-bold tracking-wider uppercase">{step}</h3>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Direct Booking Revenue System"
              price="₹4,500/mo"
              description="Cut OTA commissions. Automated booking engine for hotels & resorts that drives direct revenue. Includes interactive mobile UI, WhatsApp triggers, and backend automation."
              icon="hotel"
              delay={0}
            />
            <ServiceCard 
              title="WhatsApp & Chat Automation"
              price="₹3,500/mo"
              description="Smart conversation flows, instant replies, and enquiry categorization. Never miss a lead with automated 24/7 engagement and CRM sync."
              icon="whatsapp"
              delay={0.1}
            />
            <ServiceCard 
              title="Lead Capture & CRM Systems"
              price="₹3,000/mo"
              description="Track every lead source (forms, calls, WhatsApp) with real-time updates and score-based prioritization. Zero leads slip through the cracks."
              icon="crm"
              delay={0.2}
            />
            <ServiceCard 
              title="N8N Workflow Integrations"
              price="₹5,000/mo"
              description="Smart connectors that link your entire tech stack—forms, CRM, WhatsApp, ads—into a single automated engine for maximum efficiency."
              icon="workflow"
              delay={0.3}
            />
            <ServiceCard 
              title="Social & Ads Automation"
              price="₹8,000"
              description="Performance funnels that automate ad triggers, lead syncing, and retargeting sequences across Google and Meta platforms."
              icon="ads"
              delay={0.4}
            />
            <ServiceCard 
              title="Appointment Booking"
              price="₹4,000/mo"
              description="360° journey for healthcare & service firms. Automated booking, confirmations, and no-show recovery systems live in days."
              icon="booking"
              delay={0.5}
            />
            <ServiceCard 
              title="Full Revenue Growth System"
              price="₹15,000/mo"
              description="The complete plug-and-play powerhouse. Direct booking + workflows + chat + CRM + ads automation. A total business transformation."
              icon="full"
              delay={0.6}
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
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="glass-card rounded-3xl p-8 md:p-12 border-l-4 border-l-secondary">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-white/10 shrink-0 relative group">
                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={founderImg} alt="Divyansh Sharma" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-sm font-bold text-secondary uppercase tracking-widest mb-2">Meet The Founder</h3>
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Divyansh Sharma</h2>
                <div className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs font-mono mb-6 border border-white/10">
                  Engineering in Artificial Intelligence & Data Science — IIT Jodhpur
                </div>
                <div className="space-y-2 mb-8 text-sm text-gray-300">
                  <div className="flex items-center gap-2">✔ Advanced Diploma in Computer Applications</div>
                  <div className="flex items-center gap-2">✔ Course on Computer Concepts (CCC)</div>
                  <div className="flex items-center gap-2">✔ Applicable Uses of Professional AI Tools</div>
                  <div className="flex items-center gap-2">✔ ISRO Space Awareness Certificate</div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Divyansh leads with a vision to simplify automation — turning complex workflows into revenue generators for small and medium businesses. 
                  "We don't just write code; we engineer systems that work tirelessly to grow your business."
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['AI Strategy', 'Workflow Architecture', 'Data Science', 'Business Logic'].map(skill => (
                    <span key={skill} className="px-3 py-1 bg-black/40 border border-white/10 rounded text-xs text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
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
              className="bg-zinc-900 border border-primary/30 w-80 h-96 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
            >
              <div className="bg-primary/10 p-4 border-b border-primary/20 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-primary" />
                  <span className="font-bold text-white text-sm">Divhanya AI Assistant</span>
                </div>
                <button onClick={() => setShowChat(false)} className="text-white/50 hover:text-white"><X className="w-4 h-4" /></button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                <div className="bg-white/5 p-3 rounded-xl rounded-tl-none max-w-[80%] text-sm text-gray-300">
                  Hi 👋 I’m Divhanya AI. I help businesses automate bookings, leads and revenue systems. What type of business do you run?
                </div>
              </div>
              <div className="p-3 border-t border-white/10">
                <div className="flex gap-2">
                  <input className="flex-1 bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50" placeholder="Type a message..." />
                  <button className="p-2 bg-primary/20 text-primary rounded-md hover:bg-primary/30"><ChevronRight className="w-4 h-4" /></button>
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
