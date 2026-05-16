import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Marquee from "@/components/Marquee";

export default function NewArrivals() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="text-center space-y-6 mb-20">
           <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Fresh Drop</span>
           <h1 className="text-6xl md:text-8xl font-heading font-bold">New <span className="italic text-primary">Arrivals</span></h1>
           <p className="text-xl text-foreground/60 font-light max-w-2xl mx-auto">
              The latest pieces from our studio, designed for the modern child. 
              Limited edition releases added weekly.
           </p>
        </div>

        <Marquee text="NEW COLLECTION 2026" className="-mx-6 md:-mx-12 mb-24" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
