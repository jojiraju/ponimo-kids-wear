import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Offers() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
        <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-center space-y-8 mb-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/accessories.png')] bg-cover bg-center" />
           <div className="relative z-10">
              <span className="text-white/80 font-bold tracking-[0.2em] uppercase text-xs">Seasonal Sale</span>
              <h1 className="text-6xl md:text-9xl font-heading font-bold text-white mb-6">Up to <span className="italic">40% Off</span></h1>
              <p className="text-white/60 text-xl max-w-2xl mx-auto font-light">
                 Our mid-season sale is here. Discover premium pieces at exceptional prices. 
                 Limited time only.
              </p>
           </div>
        </div>

        <div className="space-y-12">
           <h2 className="text-4xl font-heading font-bold">Featured <span className="italic text-primary">Offers</span></h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
             {products.slice(0, 4).map((product) => (
               <div key={product.id} className="relative">
                  <ProductCard {...product} />
                  <div className="absolute top-6 right-6 w-14 h-14 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xs shadow-lg animate-bounce">
                     -30%
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
