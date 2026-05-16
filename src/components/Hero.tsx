"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { HiOutlineArrowRight, HiOutlinePlay } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import TextType from "./animations/TextType";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(imageRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 2,
        ease: "expo.out",
      });

      gsap.from(".hero-text-item", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.5,
      });

      // Subtle floating animation for elements
      gsap.to(".floating-item", {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random"
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen md:min-h-[110vh] bg-[#FAF9F6] flex items-center justify-center overflow-hidden pt-32 pb-20 md:py-20 px-6"
    >
      {/* Background Text (Kinetic) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] md:opacity-[0.05] select-none pointer-events-none">
        <h2 className="text-[40vw] md:text-[25vw] font-heading font-black whitespace-nowrap">
          PONIMO
        </h2>
      </div>

      {/* Main Focal Point - Large Center Image */}
      <motion.div
        style={{ y: y1, scale }}
        ref={imageRef}
        className="relative w-full max-w-4xl aspect-[3/4] md:aspect-[21/9] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] z-10"
      >
        <Image
          src="/images/hero-master.png"
          alt="Cinematic Kids Fashion"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />
        {/* Black Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/40 md:bg-black/30" />
      </motion.div>

      {/* Floating Typography Over Image */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pb-6 md:pb-6 pointer-events-none pt-6 md:pt-0">
        <motion.div style={{ y: y2 }} className="text-center w-full px-4">
          <div className="hero-text-item inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full bg-white/80 backdrop-blur-xl border border-white/50 shadow-xl mb-4 md:mb-8">
            <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
              Summer Editorial • 2026
            </span>
          </div>

          <h1 className="hero-text-item text-5xl md:text-8xl lg:text-[10rem] font-heading font-bold text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)] leading-[0.85] tracking-tight mb-6 md:mb-8">
            The New <br />
            <span className="italic font-light text-primary">Standard</span>
          </h1>

          <div className="hero-text-item flex items-center justify-center gap-3 md:gap-6 flex-wrap pointer-events-auto">
            <span className="text-xl md:text-4xl font-heading text-white italic drop-shadow-md">In</span>
            <div className="px-6 py-3 md:px-10 md:py-4 rounded-2xl md:rounded-[2rem] bg-white text-primary shadow-2xl border border-white/50">
              <TextType
                text={["Elegance", "Comfort", "Purity", "Joy"]}
                typingSpeed={80}
                pauseDuration={2000}
                className="text-xl md:text-5xl font-heading italic font-light"
                cursorCharacter="|"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Actions & Details Bar */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] max-w-6xl z-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] md:rounded-[3rem] p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)]"
        >
          <div className="flex items-center gap-4 md:gap-8 px-2 md:px-4">
            {/* Rotating Stamp Badge */}
            <div className="relative hidden sm:flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="text-center">
                <p className="text-[8px] md:text-[10px] font-black text-primary leading-tight">EST.<br />2020</p>
              </div>
            </div>

            <div className="max-w-xs text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-1.5 md:mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-white overflow-hidden bg-secondary">
                      <Image src={`/images/avatars/avatar-${i}.png`} alt="User" width={24} height={24} className="object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-primary/60">Loved by 5k+ Families</span>
              </div>
              <p className="text-[10px] md:text-xs text-foreground/60 leading-relaxed font-light">
                Luxury for the next generation.
              </p>
            </div>
          </div>

          <div className="relative group w-full md:w-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Button size="lg" className="relative w-full md:w-auto rounded-full h-14 md:h-16 px-10 md:px-16 text-lg md:text-xl group bg-primary hover:bg-primary/90 shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              Explore Collection
              <HiOutlineArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <div className="hidden lg:flex items-center gap-8 px-6">
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Materials</p>
              <p className="text-xs font-bold">100% Organic</p>
            </div>
            <div className="w-[1px] h-8 bg-foreground/10" />
            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-foreground/30">Craft</p>
              <p className="text-xs font-bold">Hand-Finished</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-16 pointer-events-none">
        {[1, 2, 3].map(i => (
          <div key={i} className="floating-item relative w-24 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-lg rotate-[-10deg]">
            <Image
              src={i === 1 ? '/images/girls.png' : i === 2 ? '/images/accessories.png' : '/images/boys.png'}
              alt="Product"
              fill
              className="object-cover"
              sizes="96px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}




