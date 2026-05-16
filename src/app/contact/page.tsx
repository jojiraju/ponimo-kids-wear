"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin, HiOutlinePaperAirplane } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  };

  const contactMethods = [
    {
      icon: <HiOutlineEnvelope size={24} />,
      label: "Digital Inquiry",
      value: "concierge@ponimo.com",
      color: "bg-primary/5 text-primary"
    },
    {
      icon: <HiOutlinePhone size={24} />,
      label: "Direct Dial",
      value: "+1 (888) PONIMO-KIDS",
      color: "bg-[#E8F1F2] text-[#1B4965]"
    },
    {
      icon: <HiOutlineMapPin size={24} />,
      label: "The Studio",
      value: "75 Fashion Avenue, NYC",
      color: "bg-[#F7EFE9] text-[#7E6B5A]"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] select-none pointer-events-none">
           <h1 className="text-[30vw] font-heading font-black leading-none rotate-90 origin-top-right">HELLO</h1>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
           <motion.div {...fadeIn} className="space-y-6 max-w-3xl">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Concierge Service</span>
              <h1 className="text-7xl md:text-[10rem] font-heading font-bold leading-[0.8] tracking-tighter">
                Speak <br />
                <span className="italic text-primary">With Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/40 font-light leading-relaxed pt-8">
                Whether you're seeking styling advice or have a question about our collections, 
                our dedicated concierge team provides a personalized experience tailored to your needs.
              </p>
           </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
           {/* Form Section */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05)] border border-foreground/5 relative overflow-hidden"
           >
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
              
              <div className="space-y-10 relative z-10">
                 <div className="space-y-2">
                    <h2 className="text-4xl font-heading font-bold tracking-tight">The Message <span className="italic text-primary">Studio</span></h2>
                    <p className="text-[10px] text-foreground/30 font-bold uppercase tracking-[0.3em]">Estimated response: 120 Minutes</p>
                 </div>

                 <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Full Name</label>
                          <input type="text" placeholder="e.g. Alexander Knight" className="w-full h-16 px-8 rounded-3xl bg-secondary/30 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all text-lg font-light" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Email Address</label>
                          <input type="email" placeholder="alex@studio.com" className="w-full h-16 px-8 rounded-3xl bg-secondary/30 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all text-lg font-light" />
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Inquiry Subject</label>
                       <input type="text" placeholder="How can we assist you?" className="w-full h-16 px-8 rounded-3xl bg-secondary/30 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all text-lg font-light" />
                    </div>
                    <div className="space-y-3">
                       <label className="text-[10px] font-black uppercase tracking-widest text-foreground/40 ml-4">Your Message</label>
                       <textarea placeholder="Describe your request in detail..." className="w-full h-40 p-8 rounded-[2rem] bg-secondary/30 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all text-lg font-light resize-none" />
                    </div>
                    
                    <div className="mb-0">
                       <Button className="w-full md:w-auto h-20 px-16 rounded-full bg-primary text-white text-xl font-bold gap-4 group hover:scale-[1.02] active:scale-95 transition-all shadow-2xl shadow-primary/20">
                          Send Inquiry 
                          <HiOutlinePaperAirplane size={22} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                       </Button>
                    </div>
                 </form>
              </div>
           </motion.div>

           {/* Contact Cards & Details */}
           <div className="lg:col-span-5 space-y-12 pt-12 lg:pt-0">
              <div className="grid grid-cols-1 gap-6">
                 {contactMethods.map((method, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1, duration: 0.8 }}
                     className="p-10 rounded-[3rem] bg-white border border-foreground/5 flex items-center gap-8 group hover:shadow-xl transition-all duration-500"
                   >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${method.color}`}>
                         {method.icon}
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30">{method.label}</p>
                         <p className="text-xl font-heading font-medium">{method.value}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>

              {/* Artistic Studio Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/5] rounded-[4rem] overflow-hidden group"
              >
                 <Image src="/images/hero-master.png" alt="Our Studio" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 <div className="absolute bottom-12 left-12 right-12 space-y-4">
                    <div className="w-12 h-[1px] bg-primary" />
                    <h3 className="text-3xl text-white font-heading font-bold">The London Studio</h3>
                    <p className="text-white/60 text-sm font-light leading-relaxed">
                      Visit us in the heart of the fashion district for a private viewing of our 
                      latest artisanal pieces. By appointment only.
                    </p>
                    <button className="text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary/30 pb-1 hover:border-primary transition-colors">Book a Viewing</button>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
