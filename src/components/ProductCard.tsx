"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/whatsapp";

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
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full px-6">
           <a 
             href={getWhatsAppUrl(name, price)}
             target="_blank"
             rel="noopener noreferrer"
             className="w-full h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all shadow-xl font-bold uppercase tracking-widest text-[10px]"
           >
              Buy Now
           </a>
           <Link href={`/product/${slug}`} className="w-full h-12 rounded-full bg-white text-foreground flex items-center justify-center hover:bg-secondary transition-all shadow-xl font-bold uppercase tracking-widest text-[10px]">
              View Details
           </Link>
        </div>

        {/* Tag */}
        <div className="absolute top-6 left-6 px-4 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-foreground">
          {category}
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1 px-2">
        <Link href={`/product/${slug}`} className="block">
           <h3 className="text-sm font-heading font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors">
             {name}
           </h3>
        </Link>
        <p className="text-lg font-bold text-primary">₹{price}</p>
      </div>
    </motion.div>
  );
}
