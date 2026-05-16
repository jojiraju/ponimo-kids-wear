"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  text: string;
  className?: string;
}

export default function Marquee({ text, className }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;
    if (!marquee || !content) return;

    const width = content.offsetWidth;
    
    gsap.to(content, {
      x: -width / 2,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div ref={marqueeRef} className={`overflow-hidden whitespace-nowrap bg-primary py-4 ${className}`}>
      <div ref={contentRef} className="inline-block">
        <span className="text-white text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mx-4">
          {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}
        </span>
      </div>
    </div>
  );
}
