"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ExplodedView() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Safety check for mobile context vs desktop
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 90%",
          scrub: 1,
        }
      });

      // Spread parts out smoothly
      tl.to(".implant-crown", { y: isMobile ? -80 : -150, duration: 1 }, 0)
        .to(".implant-screw", { y: isMobile ? 80 : 150, duration: 1 }, 0)
        .to(".label-crown", { opacity: 1, x: 0, duration: 0.5 }, 0.2)
        .to(".label-abutment", { opacity: 1, x: 0, duration: 0.5 }, 0.4)
        .to(".label-screw", { opacity: 1, x: 0, duration: 0.5 }, 0.6);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-gradient-to-b from-background to-surface relative overflow-hidden flex flex-col items-center justify-start pt-32 pb-48">
      <div className="w-full px-6 md:px-20 z-10 text-center md:text-right mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">מבנה השתל</h2>
        <p className="text-accent text-lg">טכנולוגיה רפואית מתקדמת</p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[600px] flex items-center justify-center">
        
        {/* Dynamic Floating Images */}
        <div className="relative w-40 md:w-64 h-full flex flex-col items-center justify-center z-10">
          <div className="implant-crown absolute top-1/2 -translate-y-[80%] w-full aspect-square z-20">
             <Image src="/images/implant-crown.png" alt="Crown" fill className="object-contain drop-shadow-2xl" />
          </div>
          <div className="implant-abutment absolute top-1/2 -translate-y-1/2 w-3/4 aspect-square z-10 opacity-90">
             <Image src="/images/implant-abutment.png" alt="Abutment" fill className="object-contain drop-shadow-xl" />
          </div>
          <div className="implant-screw absolute top-1/2 -translate-y-[20%] w-3/4 aspect-square z-0 opacity-80">
             <Image src="/images/implant-screw.png" alt="Screw" fill className="object-contain drop-shadow-xl" />
          </div>
        </div>

        {/* Informative Connective Labels */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-30">
           <div className="label-crown opacity-0 -translate-x-10 absolute top-[15%] md:top-[20%] left-2 md:left-20 text-left w-40 md:w-56 border-l-2 border-white/50 pl-4 bg-background/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2 md:p-0 rounded-lg">
              <h4 className="text-lg md:text-xl font-bold text-white">כתר (Crown)</h4>
              <p className="text-xs md:text-sm text-accent mt-1">חרסינה איכותית במראה טבעי, עמידה בפני שחיקה.</p>
           </div>
           
           <div className="label-abutment opacity-0 -translate-x-10 absolute top-[50%] -translate-y-1/2 left-2 md:left-20 text-left w-40 md:w-56 border-l-2 border-white/50 pl-4 bg-background/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2 md:p-0 rounded-lg">
              <h4 className="text-lg md:text-xl font-bold text-white">מבנה (Abutment)</h4>
              <p className="text-xs md:text-sm text-accent mt-1">מחבר טיטניום מדויק המבטיח יציבות ואטימות.</p>
           </div>
           
           <div className="label-screw opacity-0 -translate-x-10 absolute bottom-[15%] md:bottom-[20%] left-2 md:left-20 text-left w-40 md:w-56 border-l-2 border-white/50 pl-4 bg-background/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none p-2 md:p-0 rounded-lg">
              <h4 className="text-lg md:text-xl font-bold text-white">שתל (Implant)</h4>
              <p className="text-xs md:text-sm text-accent mt-1">בורג טיטניום המשתלב עם עצם הלסת.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
