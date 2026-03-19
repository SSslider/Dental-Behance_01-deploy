"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "טיפולים", href: "#treatments", index: "01" },
  { label: "הטכנולוגיה", href: "#trust", index: "02" },
  { label: "צוות", href: "#team", index: "03" },
  { label: "מקרים", href: "#cases", index: "04" },
  { label: "אודות", href: "#about", index: "05" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Lock body scroll
      document.body.style.overflow = "hidden";
      
      const ctx = gsap.context(() => {
        // Menu Reveal
        gsap.to(menuRef.current, {
          y: "0%",
          duration: 1,
          ease: "power4.inOut",
        });

        // Items Stagger
        gsap.from(".menu-item", {
          y: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.4,
        });

        // Line
        gsap.from(".menu-line", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "expo.out",
          delay: 0.6,
        });

      }, menuRef);
      return () => ctx.revert();
    } else {
      document.body.style.overflow = "";
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
        <Link href="/" className="text-2xl font-bold tracking-tighter relative z-50">
          WHITE<span className="opacity-50">DENTAL</span>
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 group flex items-center gap-3 uppercase text-sm tracking-widest hover:opacity-70 transition-opacity"
        >
          {isOpen ? "סגור" : "תפריט"}
          <div className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </div>
        </button>
      </header>

      {/* Full Screen Menu */}
      <div 
        ref={menuRef}
        className="fixed inset-0 bg-[#0A0A0A] z-40 translate-y-[-100%] flex items-center justify-center"
      >
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 h-full py-32">
           
           {/* Navigation List */}
           <div className="flex flex-col justify-center" ref={itemsRef}>
             {navItems.map((item) => (
               <Link
                 key={item.label}
                 href={item.href}
                 onClick={() => setIsOpen(false)}
                 className="group relative border-b border-white/10 py-6 overflow-hidden menu-line"
               >
                 <div className="menu-item flex items-baseline justify-between">
                   <span className="text-xs text-accent font-mono">{item.index}</span>
                   <span className="text-5xl md:text-7xl font-light group-hover:font-medium transition-all duration-300">
                     {item.label}
                   </span>
                   <ArrowLeft className="w-8 h-8 opacity-0 -translate-x-10 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
                 </div>
               </Link>
             ))}
           </div>

           {/* Info Side */}
           <div className="hidden lg:flex flex-col justify-between text-right menu-item">
             <div className="space-y-8">
               <h3 className="text-2xl font-bold">צור קשר</h3>
               <p className="text-xl text-accent">
                 שדרות רוטשילד 1,<br /> תל אביב
               </p>
               <p className="text-4xl">03-555-1234</p>
               <a href="mailto:clinic@whitedental.co.il" className="text-xl underline">clinic@whitedental.co.il</a>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                 <div className="aspect-video bg-white/5 rounded-lg relative overflow-hidden">
                    {/* Placeholder for menu image - video or team photo */}
                    <img src="/images/team/doctor-1.webp" alt="Clinic" className="object-cover w-full h-full opacity-50 grayscale" />
                 </div>
                 <div className="flex items-end">
                    <Button onClick={() => setIsOpen(false)} size="lg" className="w-full">
                        קבע פגישה
                    </Button>
                 </div>
             </div>
           </div>

        </div>
      </div>
    </>
  );
}
