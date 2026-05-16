"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineStar } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Categories Animation
      gsap.from(".category-card", {
        scrollTrigger: {
          trigger: ".categories-section",
          start: "top 80%",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
      });

      // New Arrivals Animation
      gsap.from(".new-arrivals-header > *", {
        scrollTrigger: {
          trigger: ".new-arrivals-section",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".product-card-reveal", {
        scrollTrigger: {
          trigger: ".new-arrivals-grid",
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
      });

      // Brand Story Parallax & Reveal
      gsap.from(".story-content > *", {
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      });

      gsap.from(".story-image", {
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 70%",
        },
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
      });

      // Testimonials Reveal
      gsap.from(".testimonial-reveal", {
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "top 80%",
        },
        scale: 0.9,
        opacity: 0,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen">
      <Navbar />
      <Hero />
      {/* Categories Grid */}
      <section className="categories-section py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Curated Collections</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold">Shop by <span className="italic text-primary">Category</span></h2>
          </div>
          <Link href="/shop" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground hover:text-primary transition-colors">
            View All Collections <HiOutlineArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.id}`}
              className="category-card group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <h3 className="text-white text-3xl font-heading font-bold mb-2">{cat.name}</h3>
                <span className="text-white/80 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                  Explore <HiOutlineArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="new-arrivals-header text-center space-y-4 mb-20">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">The Latest</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold">New Arrivals</h2>
            <p className="text-foreground/60 max-w-xl mx-auto font-light">
              Explore our newest pieces, designed with love and crafted for luxury.
              Fresh styles arriving weekly.
            </p>
          </div>

          <div className="new-arrivals-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {featuredProducts.map((product) => (
              <div key={product.id} className="product-card-reveal">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" variant="outline" className="rounded-full h-14 px-12 border-primary text-primary hover:bg-primary hover:text-white transition-all">
              Discover All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section py-32 bg-[#FAF9F6] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <Image 
                src="/boutique_mission_vision.png" 
                alt="Our Vision" 
                fill 
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </motion.div>

            <div className="space-y-16">
              <div className="space-y-6">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">The Foundation</span>
                <h2 className="text-4xl md:text-6xl font-heading font-bold leading-tight">Our <span className="italic text-primary">Purpose</span></h2>
              </div>

              <div className="grid grid-cols-1 gap-12">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-heading font-bold text-foreground">The Mission</h3>
                  <p className="text-lg text-foreground/60 font-light leading-relaxed">
                    To define the new standard of children's couture by blending timeless craftsmanship 
                    with the organic purity that childhood deserves. We create pieces that are 
                    intended to be lived in, loved, and eventually passed down.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-heading font-bold text-foreground">The Vision</h3>
                  <p className="text-lg text-foreground/60 font-light leading-relaxed">
                    To become the global destination for parents who value artisanal integrity 
                    and quiet luxury. We envision a world where every child's wardrobe is a 
                    carefully curated collection of meaningful, ethical, and beautiful stories.
                  </p>
                </motion.div>
              </div>

              <div className="pt-8">
                <div className="h-[1px] w-full bg-primary/10 mb-8" />
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary italic font-serif text-xl">P</div>
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/40">Established with Love • 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story / Parallax Section */}
      <section className="story-section relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-master.png"
            alt="Brand Story Background"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="story-content space-y-8">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Our Heritage</span>
            <h2 className="text-4xl md:text-7xl font-heading font-bold leading-tight">Crafting Moments of <span className="italic text-primary">Joy</span></h2>
            <p className="text-lg text-foreground/70 leading-relaxed font-light">
              Ponimo Kids Wear was born from a desire to blend the whimsical spirit of childhood
              with the refined elegance of luxury fashion. Our pieces are more than just clothes;
              they are vessels for memories.
            </p>
            <div className="flex gap-12">
              <div className="space-y-2">
                <span className="text-3xl font-heading font-bold text-primary">100%</span>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Organic Cotton</p>
              </div>
              <div className="space-y-2">
                <span className="text-3xl font-heading font-bold text-primary">Ethical</span>
                <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Manufacturing</p>
              </div>
            </div>
            <Button className="rounded-full h-14 px-10 bg-primary text-white">Read Our Story</Button>
          </div>
          <div className="story-image relative aspect-square">
            <div className="absolute inset-0 bg-secondary rounded-[3rem] -rotate-3" />
            <Image
              src="/images/toddlers.png"
              alt="Brand Story Image"
              fill
              className="object-cover rounded-[3rem] rotate-3 shadow-2xl transition-transform hover:rotate-0 duration-700"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Editorial Spread */}
      <section className="testimonials-section py-32 bg-[#F9F6F0] px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Main Image Spread */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <Image src="/images/hero-master.png" alt="Editorial" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 800px" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-80 rounded-[2rem] overflow-hidden shadow-2xl z-20 border-8 border-[#F9F6F0] hidden md:block">
                <Image src="/images/toddlers.png" alt="Detail" fill className="object-cover" sizes="256px" />
              </div>
              {/* Decorative Stamp */}
              <div className="absolute -top-12 -left-12 w-32 h-32 z-30 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-primary animate-[spin_20s_linear_infinite]">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                </svg>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-5 lg:pl-12 space-y-12 testimonial-reveal">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">Client Stories</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => <HiOutlineStar key={s} size={12} className="fill-primary text-primary" />)}
                </div>
              </div>

              <blockquote className="space-y-10">
                <p className="text-4xl md:text-5xl font-heading font-light text-foreground leading-[1.2] italic">
                  "There is a certain <span className="text-primary font-medium">poetry</span> in Ponimo's tailoring. It's where the innocence of youth meets the timelessness of high fashion."
                </p>
                <div className="h-[1px] w-20 bg-primary/30" />
                <footer className="space-y-2">
                  <p className="text-lg font-heading font-bold text-foreground">Sophia Montague</p>
                  <p className="text-primary/60 text-xs font-bold uppercase tracking-widest">Creative Director • London</p>
                </footer>
              </blockquote>

              <div className="pt-8 flex items-center gap-10">
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-primary">4.9/5</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Average Rating</p>
                </div>
                <div className="w-[1px] h-10 bg-primary/10" />
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-primary">500+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">Boutique Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
