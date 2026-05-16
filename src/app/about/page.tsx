"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      {/* Immersive Hero */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] select-none pointer-events-none">
           <h1 className="text-[35vw] font-heading font-black leading-none rotate-90 origin-top-right">STORY</h1>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="lg:col-span-7 space-y-8"
              >
                 <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Brand Heritage</span>
                 <h1 className="text-7xl md:text-[9rem] font-heading font-bold leading-[0.85] tracking-tighter">
                   Modern <br />
                   <span className="italic text-primary">Luxury</span> <br />
                   Heritage
                 </h1>
                 <p className="text-xl md:text-2xl text-foreground/40 font-light leading-relaxed pt-8 max-w-xl">
                   Founded on the principles of artisanal excellence and playful innocence, 
                   Ponimo is a celebration of the moments that define a lifetime.
                 </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="lg:col-span-5 relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl"
              >
                 <Image src="/images/girls.png" alt="Heritage" fill className="object-cover" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
           <motion.div {...fadeInUp} className="relative aspect-square rounded-[4rem] overflow-hidden order-2 lg:order-1">
              <Image src="/images/hero-master.png" alt="Philosophy" fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
           </motion.div>
           <motion.div {...fadeInUp} className="space-y-10 order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight">Our <br /><span className="italic text-primary">Philosophy</span></h2>
              <div className="space-y-6 text-lg text-foreground/60 font-light leading-relaxed">
                 <p>
                    We believe that childhood is a fleeting masterpiece. Our designs are crafted 
                    to honor this magic, blending the sophisticated tailoring of adult luxury 
                    with the unbridled comfort that play demands.
                 </p>
                 <p>
                    Every stitch is a promise of quality, every fabric a testament to our commitment 
                    to the planet your children will inherit.
                 </p>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-10">
                 <div className="space-y-2">
                    <p className="text-4xl font-heading font-bold text-primary">2020</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Established</p>
                 </div>
                 <div className="space-y-2">
                    <p className="text-4xl font-heading font-bold text-primary">50+</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Countries Served</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Craftsmanship Gallery */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <motion.div {...fadeInUp} className="text-center space-y-4 mb-24">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">The Making</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold">Artisanal <span className="italic text-primary">Excellence</span></h2>
           </motion.div>
           
           <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <motion.div {...fadeInUp} className="md:col-span-8 relative h-[500px] rounded-[3rem] overflow-hidden group">
                 <Image src="/images/boys.png" alt="Craft" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
                 <div className="absolute bottom-12 left-12 text-white">
                    <h4 className="text-3xl font-heading font-bold mb-2">Sustainable Linens</h4>
                    <p className="text-sm font-light opacity-60">Sourced from historic European mills.</p>
                 </div>
              </motion.div>
              <motion.div {...fadeInUp} className="md:col-span-4 relative h-[500px] rounded-[3rem] overflow-hidden group">
                 <Image src="/images/toddlers.png" alt="Detail" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700" />
                 <div className="absolute bottom-12 left-12 text-white">
                    <h4 className="text-3xl font-heading font-bold mb-2">Organic Cotton</h4>
                    <p className="text-sm font-light opacity-60">GOTS certified for ultimate softness.</p>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Mission Signature */}
      <section className="py-48 px-6 md:px-12 max-w-5xl mx-auto text-center relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] fill-primary animate-[spin_60s_linear_infinite]">
               <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
            </svg>
         </div>
         <motion.div {...fadeInUp} className="space-y-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-heading font-light leading-tight italic">
              "We don't just dress children; we provide the <span className="text-primary font-medium not-italic">canvas</span> for their most precious memories."
            </h2>
            <div className="space-y-4">
               <div className="h-[1px] w-32 bg-primary/20 mx-auto" />
               <p className="text-xs font-bold uppercase tracking-[0.4em] text-foreground/40">The Ponimo Vision</p>
            </div>
         </motion.div>
      </section>

      <Footer />
    </main>
  );
}
