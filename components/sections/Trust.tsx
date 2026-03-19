"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export function Trust() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".trust-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-surface text-foreground relative">
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual - 3D Chair */}
        <div className="relative h-[600px] w-full flex items-center justify-center">
          <div className="absolute inset-0 bg-radial-gradient from-accent/10 to-transparent opacity-50 blur-3xl" />
          <Image
            src="/images/dental-chair-3d.webp"
            alt="Premium Dental Chair"
            width={800}
            height={800}
            className="object-contain relative z-10 drop-shadow-2xl"
          />
        </div>

        {/* Content */}
        <div className="space-y-12">
           <div className="trust-item border-b border-white/10 pb-8">
             <span className="text-xs text-accent uppercase tracking-widest block mb-2">01</span>
             <h3 className="text-2xl font-semibold mb-2">מומחיות</h3>
             <p className="text-accent">צוות רופאים מוביל עם ניסיון בינלאומי בשיקום ואסתטיקה.</p>
           </div>
           
           <div className="trust-item border-b border-white/10 pb-8">
             <span className="text-xs text-accent uppercase tracking-widest block mb-2">02</span>
             <h3 className="text-2xl font-semibold mb-2">טכנולוגיה</h3>
             <p className="text-accent">שימוש בציוד המתקדם ביותר בעולם: CT וסורקים אינטרה-אוראליים.</p>
           </div>

           <div className="trust-item border-b border-white/10 pb-8">
             <span className="text-xs text-accent uppercase tracking-widest block mb-2">03</span>
             <h3 className="text-2xl font-semibold mb-2">שירות</h3>
             <p className="text-accent">חווית מטופל VIP, ליווי אישי 24/7 בסטנדרט מלונאי.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
