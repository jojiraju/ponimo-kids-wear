"use client";

import { useState } from "react";

export default function SizeSelector({ product }: { product: any }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
         <div className="flex justify-between">
            <h4 className="font-bold uppercase tracking-widest text-xs">Select Size</h4>
            <button className="text-xs text-primary underline font-bold">Size Guide</button>
         </div>
         <div className="flex flex-wrap gap-3">
            {product.sizes.map((size: string) => (
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
            {product.colors.map((color: string) => (
              <button 
                key={color} 
                className="w-10 h-10 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform" 
                style={{ backgroundColor: color }}
              />
            ))}
         </div>
      </div>
    </div>
  );
}
