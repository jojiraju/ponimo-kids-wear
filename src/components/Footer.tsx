"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowRight } from "react-icons/hi2";

const footerLinks = {
  collections: [
    { name: "Boys Couture", href: "/shop?category=boys" },
    { name: "Girls Boutique", href: "/shop?category=girls" },
    { name: "Toddler Essentials", href: "/shop?category=toddlers" },
  ],
  atelier: [
    { name: "Our Heritage", href: "/about" },
    { name: "The Studio", href: "/contact" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Journal", href: "/blog" },
  ],
  assistance: [
    { name: "Concierge", href: "/contact" },
    { name: "Shipping & Boutique Returns", href: "/shipping" },
    { name: "Size Atelier", href: "/size-guide" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Text */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.03] select-none pointer-events-none text-[25vw] font-heading font-black leading-none text-white whitespace-nowrap">
        PONIMO
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Brand & Newsletter Section */}
          <div className="lg:col-span-5 space-y-12">
            <Link href="/" className="inline-block">
              <div className="w-40 h-20 relative brightness-0 invert">
                <Image src="/logo.png" alt="Ponimo Logo" fill className="object-contain" />
              </div>
            </Link>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-light max-w-sm leading-relaxed">
                Join our world for <span className="italic text-primary">exclusive boutique</span> updates and artisanal collections.
              </h3>
              <div className="relative max-w-md group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-lg font-light focus:outline-none focus:border-primary transition-colors"
                />
                <button className="absolute right-0 bottom-4 text-primary group-hover:translate-x-2 transition-transform">
                  <HiOutlineArrowRight size={24} />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 group">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <FaFacebookF size={20} />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500">
                <FaXTwitter size={20} />
              </Link>
            </div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="space-y-8">
                <h4 className="font-heading text-xs font-bold uppercase tracking-[0.4em] text-white/40">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/60 hover:text-white transition-all text-sm font-light hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Ponimo Atelier
            </p>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
              <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Concierge Online</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
