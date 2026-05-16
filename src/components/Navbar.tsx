"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import gsap from "gsap";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(250, 249, 246, 0.8)",
        backdropFilter: "blur(12px)",
        paddingTop: "12px",
        paddingBottom: "12px",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        duration: 0.3,
      });
    } else {
      gsap.to(navRef.current, {
        backgroundColor: "rgba(250, 249, 246, 0)",
        backdropFilter: "blur(0px)",
        paddingTop: "24px",
        paddingBottom: "24px",
        boxShadow: "none",
        duration: 0.3,
      });
    }
  }, [isScrolled]);

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12",
        "flex items-center justify-between py-6"
      )}
    >
      {/* Logo */}
      <Link href="/" className="relative z-50 flex items-center group">
        <div className="w-32 h-16 relative">
          <Image src="/logo.png" alt="Ponimo Logo" fill className="object-contain" sizes="128px" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-12">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground/60 hover:text-primary transition-all relative group"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </div>

      {/* Action Button (Desktop) */}
      <div className="hidden lg:block">
        <Link 
          href="/shop"
          className="px-8 py-3 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
        >
          Shop Collection
        </Link>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden w-12 h-12 rounded-full border border-secondary flex items-center justify-center text-foreground hover:bg-secondary transition-all"
      >
        <HiOutlineBars3BottomRight size={24} />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 h-screen w-screen bg-[#0a0a0a] z-[100] flex flex-col lg:hidden overflow-hidden"
          >
            {/* Background Branding */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none text-[80vw] font-heading font-black text-white whitespace-nowrap">
               PO
            </div>

            {/* Mobile Header */}
            <div className="flex items-center justify-between p-8 relative z-10">
               <div className="w-24 h-12 relative brightness-0 invert">
                 <Image src="/logo.png" alt="Ponimo Logo" fill className="object-contain" sizes="96px" />
               </div>
               <button 
                 onClick={() => setMobileMenuOpen(false)}
                 className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500"
               >
                 <HiOutlineXMark size={28} />
               </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 space-y-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="group flex flex-col"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-bold text-[10px] tracking-widest">0{i + 1}</span>
                      <h2 className="text-5xl font-heading font-bold text-white group-hover:text-primary group-hover:pl-4 transition-all duration-500">
                        {link.name}
                      </h2>
                    </div>
                    <div className="h-[1px] w-0 bg-primary/30 mt-2 group-hover:w-full transition-all duration-700" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <div className="p-8 pb-12 space-y-8 relative z-10 border-t border-white/5">
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Concierge</p>
                     <p className="text-sm text-white/70">studio@ponimo.com</p>
                  </div>
                  <div className="space-y-2">
                     <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Follow Us</p>
                     <div className="flex gap-4">
                        <Link href="#" className="text-xs text-primary hover:text-white transition-colors">Instagram</Link>
                        <Link href="#" className="text-xs text-primary hover:text-white transition-colors">Pinterest</Link>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
