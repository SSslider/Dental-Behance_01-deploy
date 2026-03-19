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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 h-full flex flex-col justify-end pb-12 md:pb-16 w-full max-w-none">
        <div className="flex flex-col md:flex-row items-end justify-between w-full gap-6 md:gap-12">
          {/* Big Text Group */}
          <div className="flex flex-col text-right w-full md:w-auto">
            <div ref={textRef} className="overflow-hidden mb-2">
              <h2 className="hero-line text-xs font-medium tracking-[0.2em] text-white/80 border-b border-white/20 pb-2 mb-1 inline-block">
                רפואת שיניים אסתטית מתקדמת
              </h2>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-line text-5xl md:text-7xl lg:text-[7rem] font-bold leading-[0.9] tracking-tighter mix-blend-overlay opacity-90 text-white">
                חיוך מושלם<br className="md:hidden" /> מתחיל כאן.
              </h1>
            </div>
          </div>

          {/* CTA Group */}
          <div className="hero-line flex flex-col-reverse lg:flex-row gap-4 lg:gap-8 items-center lg:items-end lg:justify-end w-full md:w-auto pb-2 md:pb-4">
            <div className="flex flex-row lg:flex-col text-center lg:text-right text-xs text-white/70 justify-center lg:border-l border-white/30 p-2 lg:p-0 lg:pl-6 w-full lg:w-auto gap-4 lg:gap-1 h-auto lg:h-full lg:min-h-[40px]">
              <span className="font-mono tracking-widest leading-none">03-555-1234</span>
              <span className="leading-none">שדרות רוטשילד 1, ת"א</span>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-black hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] text-base px-8 py-5 h-auto rounded-full w-full lg:w-auto flex-shrink-0" 
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
