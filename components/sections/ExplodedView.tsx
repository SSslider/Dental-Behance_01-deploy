"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { Suspense } from "react";

// Lazy load the 3D scene to avoid SSR issues and improve performance
const ImplantScene = dynamic(() => import("@/components/three/ImplantScene").then(mod => mod.ImplantScene), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white/50">Loading 3D Model...</div>
});

export function ExplodedView() {
  return (
    <section className="h-screen bg-gradient-to-b from-background to-surface relative overflow-hidden flex flex-col items-center justify-center py-20">
      <div className="absolute top-10 right-10 z-10 text-right">
        <h2 className="text-4xl font-bold mb-2">מבנה השתל</h2>
        <p className="text-accent">טכנולוגיה רפואית מתקדמת</p>
      </div>

      {/* Desktop 3D View */}
      <div className="hidden md:block w-full h-full absolute inset-0 z-0">
        <Suspense fallback={null}>
          <ImplantScene />
        </Suspense>
      </div>

      {/* Mobile Fallback */}
      <div className="md:hidden relative w-full h-[60vh]">
         <Image src="/images/implant-exploded.png" alt="Exploded View" fill className="object-contain" />
      </div>

      {/* Labels (Overlay for both) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-20">
         <div className="text-left w-64 border-l border-white/20 pl-4">
            <h4 className="text-xl font-bold">כתר (Crown)</h4>
            <p className="text-sm text-accent">חרסינה איכותית במראה טבעי, עמידה בפני שחיקה.</p>
         </div>
         <div className="text-left w-64 border-l border-white/20 pl-4">
            <h4 className="text-xl font-bold">מבנה (Abutment)</h4>
            <p className="text-sm text-accent">מחבר טיטניום מדויק המבטיח יציבות ואטימות.</p>
         </div>
         <div className="text-left w-64 border-l border-white/20 pl-4">
            <h4 className="text-xl font-bold">שתל (Implant)</h4>
            <p className="text-sm text-accent">בורג טיטניום רפואי המשתלב עם עצם הלסת (Osseointegration).</p>
         </div>
      </div>
    </section>
  );
}
