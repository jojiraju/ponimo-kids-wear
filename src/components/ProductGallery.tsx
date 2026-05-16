"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductGallery({ mainImage, name }: { mainImage: string, name: string }) {
  const [activeImage, setActiveImage] = useState(mainImage);

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-secondary/30 shadow-2xl"
      >
        <Image src={activeImage} alt={name} fill className="object-cover" />
      </motion.div>
      <div className="flex gap-4">
        {[mainImage, "/images/boys.png", "/images/girls.png"].map((img, i) => (
          <button 
            key={i} 
            onClick={() => setActiveImage(img)}
            className={`relative w-24 aspect-square rounded-2xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary' : 'border-transparent opacity-60'}`}
          >
            <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
