"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus, HiOutlineMagnifyingGlass, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqCategories = [
  { id: "orders", name: "Orders & Shipping" },
  { id: "products", name: "Product & Sizing" },
  { id: "returns", name: "Returns & Exchanges" },
  { id: "care", name: "Care & Quality" }
];

const faqs = [
  {
    category: "products",
    question: "How do I choose the right size for my child?",
    answer: "We provide a comprehensive size guide on each product page. Our garments generally follow standard international sizing, but if you're between sizes, we recommend sizing up for comfort and growth."
  },
  {
    category: "care",
    question: "What materials do you use in your garments?",
    answer: "We prioritize natural, high-quality fabrics. Our main materials include GOTS-certified organic cotton, premium Belgian linen, and mulberry silk. All materials are hypoallergenic and gentle on sensitive skin."
  },
  {
    category: "orders",
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping usually takes 5-10 business days depending on the destination. Shipping costs and duties are calculated at checkout."
  },
  {
    category: "returns",
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of purchase for items in their original, unworn condition with tags attached. Please note that for hygiene reasons, swimwear and accessories cannot be returned."
  },
  {
    category: "care",
    question: "Are your clothes machine washable?",
    answer: "Most of our organic cotton and linen items are machine washable on a gentle cycle. However, for silk and delicate tulle pieces, we recommend professional dry cleaning or careful hand washing."
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      
      {/* Search Hero */}
      <section className="pt-48 pb-20 px-6 md:px-12 bg-white border-b border-foreground/5">
        <div className="max-w-7xl mx-auto text-center space-y-12">
           <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Client Concierge</span>
              <h1 className="text-6xl md:text-8xl font-heading font-bold">How can we <span className="italic text-primary">assist you?</span></h1>
           </div>
           
           <div className="max-w-2xl mx-auto relative group">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30 group-focus-within:text-primary transition-colors">
                 <HiOutlineMagnifyingGlass size={24} />
              </div>
              <input 
                type="text" 
                placeholder="Search for sizing, shipping, returns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-20 pl-16 pr-8 rounded-full bg-secondary/30 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:outline-none transition-all text-lg font-light shadow-inner"
              />
           </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
           
           {/* Sidebar Categories */}
           <aside className="lg:col-span-3 space-y-10">
              <div className="space-y-6">
                 <h4 className="font-bold uppercase tracking-[0.3em] text-[10px] text-foreground/40">Knowledge Base</h4>
                 <nav className="flex flex-col gap-2">
                    <button 
                      onClick={() => setActiveCategory("all")}
                      className={`h-12 px-6 rounded-full text-left font-bold text-sm transition-all ${activeCategory === 'all' ? 'bg-primary text-white shadow-lg' : 'hover:bg-white text-foreground/60'}`}
                    >
                      All Inquiries
                    </button>
                    {faqCategories.map(cat => (
                      <button 
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`h-12 px-6 rounded-full text-left font-bold text-sm transition-all ${activeCategory === cat.id ? 'bg-primary text-white shadow-lg' : 'hover:bg-white text-foreground/60'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                 </nav>
              </div>

              {/* Instant Help Card */}
              <div className="p-8 rounded-[2.5rem] bg-white border border-foreground/5 shadow-sm space-y-6">
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <HiOutlineChatBubbleLeftRight size={24} />
                 </div>
                 <div className="space-y-2">
                    <h5 className="font-heading font-bold text-lg">Instant Chat</h5>
                    <p className="text-xs text-foreground/40 leading-relaxed">Our fashion consultants are online and ready to help.</p>
                 </div>
                 <Link href="/contact" className="block w-full h-12 rounded-full bg-foreground text-white flex items-center justify-center text-[10px] font-bold uppercase tracking-widest hover:bg-primary transition-all">
                    Start Conversation
                 </Link>
              </div>
           </aside>

           {/* FAQ Accordions */}
           <div className="lg:col-span-9 space-y-6">
              <AnimatePresence mode="popLayout">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, i) => (
                    <motion.div 
                      layout
                      key={faq.question}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-white rounded-[2rem] border border-foreground/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                       <button 
                         onClick={() => setOpenIndex(openIndex === i ? null : i)}
                         className="w-full p-8 md:p-10 flex items-center justify-between text-left group"
                       >
                          <div className="space-y-2">
                             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/40">{faq.category}</span>
                             <h3 className={`text-xl md:text-2xl font-heading font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-foreground'}`}>
                                {faq.question}
                             </h3>
                          </div>
                          <div className={`w-10 h-10 rounded-full border border-foreground/5 flex items-center justify-center transition-all shrink-0 ml-6 ${openIndex === i ? 'bg-primary border-primary text-white rotate-180' : 'text-foreground/30'}`}>
                             <HiOutlinePlus size={18} className={openIndex === i ? 'hidden' : 'block'} />
                             <HiOutlineMinus size={18} className={openIndex === i ? 'block' : 'hidden'} />
                          </div>
                       </button>
                       <AnimatePresence>
                          {openIndex === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            >
                               <div className="px-8 md:px-10 pb-10">
                                  <div className="h-[1px] w-full bg-foreground/5 mb-8" />
                                  <p className="text-lg text-foreground/60 font-light leading-relaxed max-w-3xl">
                                     {faq.answer}
                                  </p>
                               </div>
                            </motion.div>
                          )}
                       </AnimatePresence>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20 space-y-4"
                  >
                    <p className="text-2xl font-heading font-bold">No results found</p>
                    <p className="text-foreground/40">Try searching with different keywords or browse all categories.</p>
                  </motion.div>
                )}
              </AnimatePresence>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
