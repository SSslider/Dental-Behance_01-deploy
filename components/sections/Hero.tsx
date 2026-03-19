"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scrollToContact = () => {
    // Scroll to the contact section with GSAP for smoothness
    const contactSection = document.getElementById("contact");
    if (contactSection) {
        gsap.to(window, { duration: 1.5, scrollTo: { y: contactSection, offsetY: 50 }, ease: "power4.inOut" });
    } else {
        // Fallback if GSAP plugin issues
        document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Text
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2,
      });

      // Video Fade In
      gsap.from(videoRef.current, {
        opacity: 0,
        duration: 2.5,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-portrait.webp"
          className="w-full h-full object-cover opacity-60 contrast-110 grayscale-[10%]"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 h-full flex flex-col justify-between py-24 md:py-32 w-full">
        {/* Top/Right section */}
        <div className="flex flex-col items-center md:items-start w-full">
          <div ref={textRef} className="overflow-hidden mb-2">
            <h2 className="hero-line text-sm md:text-base font-medium tracking-[0.3em] text-white/80 border-b border-white/20 pb-2 mb-2 inline-block">
              רפואת שיניים אסתטית מתקדמת
            </h2>
          </div>
          
          <div className="overflow-hidden">
            <h1 className="hero-line text-[18vw] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mix-blend-overlay opacity-90 text-white">
              חיוך מושלם
            </h1>
          </div>
        </div>

        {/* Bottom/Left section */}
        <div className="flex flex-col items-center md:items-end w-full mt-auto text-center md:text-left">
          <div className="overflow-hidden mb-8 md:mb-12">
            <h1 className="hero-line text-[18vw] md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mix-blend-overlay opacity-90 text-white">
              מתחיל כאן.
            </h1>
          </div>

          <div className="hero-line flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-center md:items-end md:justify-end w-full">
            <div className="flex flex-col text-center md:text-left text-sm text-white/70 justify-center md:border-l border-white/30 md:pl-6 md:ml-6 h-full min-h-[60px]">
              <span className="font-mono tracking-widest">03-555-1234</span>
              <span>שדרות רוטשילד 1, תל אביב</span>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-black hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] text-lg px-8 py-6 h-auto rounded-full w-full md:w-auto" 
              onClick={scrollToContact}
            >
              קבע פגישה עכשיו
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
        <span className="block w-[1px] h-24 bg-gradient-to-b from-white to-transparent"></span>
      </div>
    </section>
  );
}
