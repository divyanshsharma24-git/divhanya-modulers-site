import { Link } from "wouter";
import { Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoImg from "@assets/image_1768131702952.png";

export function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Divhanya Modulers" className="w-10 h-10 rounded-full border border-primary/30" />
              <span className="text-xl font-bold font-display tracking-wider text-white">
                DIVHANYA<span className="text-primary">.AI</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              © 2026 Divhanya Modulers — AI Automations & Technologies — Built by Divyansh Sharma
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Stakeholders: Janhvi Sharma • Divyansh Sharma
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/divhanya-modulers-ai-automations-and-technologies-19a4373a4" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/divhanyamods" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/divhanyamodulers.in" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Sambhal , Uttar Pradesh , India , 244302</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:divhanyamodulers@gmail.com" className="hover:text-primary">divhanyamodulers@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="https://wa.me/918077073548" target="_blank" rel="noopener noreferrer" className="hover:text-primary">+91 8077073548</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-muted-foreground">
          <p>© 2026 Divhanya Modulers. All rights reserved. Built with AI.</p>
        </div>
      </div>
    </footer>
  );
}
