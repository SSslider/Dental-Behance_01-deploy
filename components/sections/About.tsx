"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
        y: 100,
        opacity: 0.5,
      });

      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative py-32 bg-background overflow-hidden">
      <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h3 className="about-text text-accent uppercase tracking-widest mb-6 text-sm">המשימה שלנו</h3>
          <h2 className="about-text text-4xl md:text-5xl font-light leading-tight mb-8">
            אנו מאמינים שרפואת שיניים היא <span className="text-accent font-serif italic">אמנות</span>.
          </h2>
          <p className="about-text text-lg text-accent/80 leading-relaxed max-w-lg">
            השילוב בין טכנולוגיה מתקדמת לאסתטיקה בלתי מתפשרת מאפשר לנו ליצור חיוכים טבעיים, בריאים ומושלמים. 
            כל מטופל הוא יצירה בפני עצמה, ואנו מתייחסים לכל פרט ופרט בחרדת קודש.
          </p>
        </div>

        {/* Visual */}
        <div ref={imageRef} className="order-1 md:order-2 relative h-[500px] w-full">
           <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
           <Image
            src="/images/gloves-hands.png"
            alt="Dental precision"
            fill
            className="object-cover grayscale opacity-80"
          />
          {/* Decorative frame */}
          <div className="absolute inset-4 border border-white/10 z-20" />
        </div>
      </div>
    </section>
  );
}
