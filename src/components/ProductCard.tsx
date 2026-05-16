"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  category: string;
  className?: string;
}

export default function ProductCard({ id, slug, name, price, image, category, className }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("group relative", className)}
    >
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary/30 mb-6">
        {/* Image */}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Subtle Overlay for Aesthetic */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Tag */}
        <div className="absolute top-6 left-6 px-4 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
          {category}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1 px-4 text-center">
         <h3 className="text-base font-heading font-bold text-foreground tracking-tight uppercase group-hover:text-primary transition-colors duration-500">
           {name}
         </h3>
         <div className="h-[1px] w-8 bg-primary/20 mx-auto mt-2 transition-all duration-500 group-hover:w-16" />
      </div>
    </motion.div>
  );
}
