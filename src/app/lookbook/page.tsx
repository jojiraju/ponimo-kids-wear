import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const lookbookImages = [
  "/images/boys.png",
  "/images/girls.png",
  "/images/toddlers.png",
  "/images/party-skirt.png",
  "/images/denim-jacket.png",
  "/images/accessories.png",
];

export default function Lookbook() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      
      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
           <div className="space-y-4">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Editorial</span>
              <h1 className="text-6xl md:text-8xl font-heading font-bold italic text-primary">Lookbook</h1>
           </div>
           <p className="text-xl text-foreground/60 font-light max-w-md italic">
              "A visual journey through our Summer 2026 collection, celebrating the elegance of childhood."
           </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="space-y-8">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group">
                 <Image src={lookbookImages[0]} alt="Look 1" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-heading italic text-2xl">Look 01</span>
                 </div>
              </div>
              <div className="relative aspect-[1/1] rounded-[3rem] overflow-hidden group">
                 <Image src={lookbookImages[3]} alt="Look 2" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-heading italic text-2xl">Look 02</span>
                 </div>
              </div>
           </div>
           
           <div className="space-y-8 lg:pt-24">
              <div className="relative aspect-[1/1] rounded-[3rem] overflow-hidden group">
                 <Image src={lookbookImages[1]} alt="Look 3" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-heading italic text-2xl">Look 03</span>
                 </div>
              </div>
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group">
                 <Image src={lookbookImages[4]} alt="Look 4" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-heading italic text-2xl">Look 04</span>
                 </div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group">
                 <Image src={lookbookImages[2]} alt="Look 5" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-heading italic text-2xl">Look 05</span>
                 </div>
              </div>
              <div className="relative aspect-[1/1] rounded-[3rem] overflow-hidden group">
                 <Image src={lookbookImages[5]} alt="Look 6" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-heading italic text-2xl">Look 06</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
