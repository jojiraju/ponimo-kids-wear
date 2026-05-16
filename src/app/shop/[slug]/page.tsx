"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineStar, HiOutlineShare, HiOutlineShieldCheck, HiOutlineTruck, HiOutlineArrowRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";

export default function ProductDetails() {
  const params = useParams();
  const slug = params?.slug as string;
  
  // Find product by slug
  const product = products.find((p) => p.slug === slug);
  
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0]);
      setActiveImage(product.image);
    }
  }, [product, slug]);

  if (!product) {
    return (
      <main className="min-h-screen pt-32 flex flex-col items-center justify-center bg-white">
        <Navbar />
        <div className="text-center space-y-6">
           <h1 className="text-4xl font-heading font-bold">Product Not Found</h1>
           <p className="text-foreground/40">The product you are looking for does not exist or has been moved.</p>
           <Link href="/shop" className="inline-block h-14 px-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              Back to Boutique
           </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 bg-white">
      <Navbar />
      
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-secondary/30 shadow-2xl"
            >
              <Image src={activeImage || product.image} alt={product.name} fill className="object-cover" />
            </motion.div>
            <div className="flex gap-4">
              {[product.image, "/images/boys.png", "/images/girls.png"].map((img, i) => (
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

          {/* Info */}
          <div className="space-y-10 py-6">
            <div className="space-y-4">
               <div className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase">
                 <HiOutlineStar size={14} className="fill-primary" /> Top Rated • {product.category}
               </div>
               <h1 className="text-4xl md:text-6xl font-heading font-bold">{product.name}</h1>
               <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                  <div className="h-6 w-[1px] bg-secondary" />
                  <div className="flex items-center gap-1">
                     {[1, 2, 3, 4, 5].map(s => <HiOutlineStar key={s} size={16} className="fill-primary text-primary" />)}
                     <span className="text-xs text-foreground/40 ml-2">(24 Reviews)</span>
                  </div>
               </div>
            </div>

            <p className="text-foreground/60 text-lg font-light leading-relaxed">
              {product.description} Crafted with meticulous attention to detail, this piece combines 
              premium materials with a playful design that your child will love.
            </p>

            {/* Selectors */}
            <div className="space-y-6">
               <div className="space-y-3">
                  <div className="flex justify-between">
                     <h4 className="font-bold uppercase tracking-widest text-xs">Select Size</h4>
                     <button className="text-xs text-primary underline font-bold">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                     {product.sizes.map(size => (
                       <button 
                         key={size}
                         onClick={() => setSelectedSize(size)}
                         className={`h-12 px-6 rounded-full border font-bold text-sm transition-all ${selectedSize === size ? 'bg-foreground text-white border-foreground' : 'border-secondary hover:border-primary text-foreground/60'}`}
                       >
                         {size}
                       </button>
                     ))}
                  </div>
               </div>

               <div className="space-y-3">
                  <h4 className="font-bold uppercase tracking-widest text-xs">Colors</h4>
                  <div className="flex gap-4">
                     {product.colors.map(color => (
                       <button 
                         key={color} 
                         className="w-10 h-10 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform" 
                         style={{ backgroundColor: color }}
                       />
                     ))}
                  </div>
               </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <a 
                 href={getWhatsAppUrl(product.name, product.price)}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex-1 h-16 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-all shadow-xl font-bold gap-3"
               >
                  <FaWhatsapp size={20} /> Buy Now
               </a>
               <Button variant="outline" className="h-16 w-16 rounded-full border-secondary">
                  <HiOutlineShare size={20} />
               </Button>
            </div>

            {/* Shipping Info */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-secondary">
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-primary">
                     <HiOutlineTruck size={18} />
                  </div>
                  <div className="space-y-1">
                     <p className="text-xs font-bold uppercase tracking-widest">Free Shipping</p>
                     <p className="text-[10px] text-foreground/40">On orders over $150</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-primary">
                     <HiOutlineShieldCheck size={18} />
                  </div>
                  <div className="space-y-1">
                     <p className="text-xs font-bold uppercase tracking-widest">Safe Payment</p>
                     <p className="text-[10px] text-foreground/40">100% secure checkout</p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-32 space-y-12">
           <div className="flex justify-between items-end">
              <h2 className="text-4xl font-heading font-bold">You may also <span className="italic text-primary">like</span></h2>
              <Link href="/shop" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">
                View All <HiOutlineArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.slice(0, 4).map(p => <ProductCard key={p.id} {...p} />)}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
