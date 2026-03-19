"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const cases = [
  {
    id: 1,
    title: "שיקום פה מלא",
    desc: "השתלות דנטליות מורכבות בשילוב כתרי זירקוניה.",
    before: "/images/cases/case-1-before.webp",
    after: "/images/cases/case-1-after.webp",
  },
  {
    id: 2,
    title: "עיצוב חיוך",
    desc: "ציפויי חרסינה (Veneers) לתיקון צבע ומבנה.",
    before: "/images/cases/case-2-before.webp",
    after: "/images/cases/case-2-after.webp",
  },
];

export function Cases() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCase = () => {
    setCurrentIndex((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[currentIndex];

  return (
    <section id="cases" className="py-32 bg-surface text-foreground relative">
      <div className="container px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">סיפורי הצלחה</h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-12 z-20 hidden md:block">
            <button onClick={prevCase} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-12 z-20 hidden md:block">
            <button onClick={nextCase} className="p-4 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             {/* Text */}
             <div className="order-2 md:order-1 text-center md:text-right">
               <span className="text-accent uppercase tracking-widest text-xs block mb-4">Case 0{currentIndex + 1}</span>
               <h3 className="text-3xl font-bold mb-4">{currentCase.title}</h3>
               <p className="text-accent mb-8">{currentCase.desc}</p>
               <div className="flex justify-center md:justify-start gap-4">
                 <Button variant="secondary" size="default">
                   צפה במקרה המלא
                 </Button>
               </div>
             </div>

             {/* Images (Comparison) */}
             <div className="order-1 md:order-2 relative aspect-video rounded-2xl overflow-hidden bg-background">
               <div className="absolute inset-0 flex">
                 <div className="w-1/2 relative border-l border-white/10">
                   <Image src={currentCase.before} alt="Before" fill className="object-cover" />
                   <span className="absolute bottom-4 right-4 bg-black/50 px-2 py-1 text-xs rounded">לפני</span>
                 </div>
                 <div className="w-1/2 relative">
                   <Image src={currentCase.after} alt="After" fill className="object-cover" />
                   <span className="absolute bottom-4 left-4 bg-black/50 px-2 py-1 text-xs rounded">אחרי</span>
                 </div>
               </div>
             </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center gap-6 mt-8 md:hidden">
            <button onClick={prevCase} className="p-3 rounded-full border border-white/10">
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={nextCase} className="p-3 rounded-full border border-white/10">
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
