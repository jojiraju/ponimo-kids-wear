import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { categories } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Categories() {
  return (
    <main className="min-h-screen pt-32 bg-white">
      <Navbar />
      
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="space-y-4 mb-20">
           <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Curated</span>
           <h1 className="text-5xl md:text-7xl font-heading font-bold">Shop by <br /><span className="italic text-primary">Category</span></h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {categories.map((cat) => (
             <Link 
               key={cat.id} 
               href={`/shop?category=${cat.id}`}
               className="group block space-y-6"
             >
               <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-secondary/20 shadow-sm transition-shadow hover:shadow-xl">
                 <Image 
                   src={cat.image} 
                   alt={cat.name} 
                   fill 
                   className="object-cover transition-transform duration-700 group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500" />
               </div>
               
               <div className="flex justify-between items-end px-4">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-heading font-bold text-foreground">{cat.name}</h2>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">Discover Collection</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300">
                    <HiOutlineArrowRight size={18} />
                  </div>
               </div>
             </Link>
           ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
