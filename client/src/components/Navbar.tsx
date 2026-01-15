import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/image_1768131702952.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "SERVICES", href: "#services" },
    { name: "HOW IT WORKS", href: "#process" },
    { name: "PRICING", href: "#services" },
    { name: "ABOUT", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-primary/50 group-hover:border-primary transition-colors">
            <img src={logoImg} alt="Divhanya Modulers" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tighter text-white font-display group-hover:text-primary transition-colors uppercase">
            DIVHANYA MODULERS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold text-white/70 hover:text-primary transition-all tracking-[0.1em]"
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            className="bg-transparent text-primary border border-primary/50 hover:bg-primary/10 transition-all duration-300 rounded-sm px-6 h-9 text-[11px] font-bold tracking-wider"
          >
            <a href="#contact">GET STARTED</a>
          </Button>
          <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:border-primary transition-colors cursor-pointer">
            <Phone className="w-4 h-4" />
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/90 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="w-full bg-primary text-black font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                <a href="#contact">Book Audit</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
