"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { HiOutlineAdjustmentsHorizontal, HiOutlineChevronDown, HiOutlineArrowRight } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 6;

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All Collections");
  const [selectedAge, setSelectedAge] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All Collections", "Boys Wear", "Girls Wear", "Toddlers", "Accessories"];
  const ages = ["0-12 Months", "1-3 Years", "4-6 Years", "7-10 Years", "11+ Years"];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category Filter
      const categoryMatch = selectedCategory === "All Collections" || 
        (selectedCategory === "Boys Wear" && product.category === "boys") ||
        (selectedCategory === "Girls Wear" && product.category === "girls") ||
        (selectedCategory === "Toddlers" && product.category === "toddlers") ||
        (selectedCategory === "Accessories" && product.category === "accessories");
      
      return categoryMatch;
    });
  }, [selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleAgeToggle = (age: string) => {
    setSelectedAge(prev => 
      prev.includes(age) ? prev.filter(a => a !== age) : [...prev, age]
    );
    setCurrentPage(1);
  };

  return (
    <main className="min-h-screen pt-32 bg-[#FAF9F6]">
      <Navbar />
      
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-heading font-bold">The <span className="italic text-primary">Boutique</span></h1>
            <p className="text-foreground/60 max-w-md font-light">
              Explore our full collection of premium kids' wear. Filter by age, category, or color to find the perfect fit.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 space-y-10">
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-foreground/40">Categories</h4>
              <ul className="space-y-3">
                 {categories.map(cat => (
                   <li key={cat}>
                     <button 
                       onClick={() => handleCategoryChange(cat)}
                       className="flex items-center gap-3 cursor-pointer group w-full text-left"
                     >
                        <div className={cn(
                          "w-4 h-4 rounded border transition-all duration-300",
                          selectedCategory === cat ? "bg-primary border-primary" : "border-secondary group-hover:border-primary"
                        )} />
                        <span className={cn(
                          "text-sm transition-colors",
                          selectedCategory === cat ? "text-primary font-bold" : "text-foreground/60 group-hover:text-primary"
                        )}>{cat}</span>
                     </button>
                   </li>
                 ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-[10px] text-foreground/40">Age Group</h4>
              <ul className="space-y-3">
                 {ages.map(age => (
                   <li key={age}>
                     <button 
                       onClick={() => handleAgeToggle(age)}
                       className="flex items-center gap-3 cursor-pointer group w-full text-left"
                     >
                        <div className={cn(
                          "w-4 h-4 rounded border transition-all duration-300",
                          selectedAge.includes(age) ? "bg-primary border-primary" : "border-secondary group-hover:border-primary"
                        )} />
                        <span className={cn(
                          "text-sm transition-colors",
                          selectedAge.includes(age) ? "text-primary font-bold" : "text-foreground/60 group-hover:text-primary"
                        )}>{age}</span>
                     </button>
                   </li>
                 ))}
              </ul>
            </div>

            {(selectedCategory !== "All Collections" || selectedAge.length > 0) && (
              <button 
                onClick={() => {
                  setSelectedCategory("All Collections");
                  setSelectedAge([]);
                  setCurrentPage(1);
                }}
                className="text-[10px] font-bold uppercase tracking-widest text-primary hover:underline"
              >
                Clear Filters
              </button>
            )}
          </aside>

          {/* Grid */}
          <div className="flex-1">
             {paginatedProducts.length > 0 ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
               </div>
             ) : (
               <div className="h-96 flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-2xl font-heading font-medium text-foreground/40">No products found</p>
                  <Button variant="link" onClick={() => setSelectedCategory("All Collections")}>Reset Filters</Button>
               </div>
             )}

             {/* Pagination */}
             {totalPages > 1 && (
               <div className="mt-24 flex justify-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                    <button 
                      key={p} 
                      onClick={() => {
                        setCurrentPage(p);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300",
                        currentPage === p 
                          ? "bg-primary text-white shadow-xl scale-110" 
                          : "bg-white border border-secondary text-foreground/40 hover:border-primary hover:text-primary"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                  <button 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    className="w-12 h-12 rounded-full bg-white border border-secondary text-foreground/40 flex items-center justify-center hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:pointer-events-none"
                  >
                      <HiOutlineArrowRight size={18} />
                  </button>
               </div>
             )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
