"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ArrowLeft } from "lucide-react";
import gsap from "gsap";

const team = [
  {
    id: 1,
    name: "Dr. Cohen",
    role: "מומחה לשיקום הפה",
    image: "/images/team/doctor-1.png",
    bio: "ד\"ר כהן הוא בוגר הצטיינות של האוניברסיטה העברית, בעל ניסיון של מעל 15 שנה בשיקום פה מורכב ואסתטיקה דנטלית.",
  },
  {
    id: 2,
    name: "Dr. Levi",
    role: "מומחית לאסתטיקה דנטלית",
    image: "/images/team/doctor-2.png",
    bio: "ד\"ר לוי מתמחה בעיצוב חיוך דיגיטלי (DSD) וציפויי חרסינה. האני מאמין שלה הוא שילוב של בריאות ויופי טבעי.",
  },
  {
    id: 3,
    name: "Dr. Golan",
    role: "כירורג פה ולסת",
    image: "/images/team/doctor-3.png",
    bio: "ד\"ר גולן מבצע את הטיפולים הכירורגיים המורכבים ביותר, כולל השתלות עצם והרמות סינוס, בגישה זעיר-פולשנית.",
  },
];

export function Team() {
  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedMember) {
      gsap.to(panelRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(panelRef.current, { x: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [selectedMember]);

  return (
    <section id="team" className="py-32 bg-background relative overflow-hidden">
      <div className="container px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">המומחים שלנו</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group cursor-pointer relative aspect-[3/4] overflow-hidden rounded-lg bg-surface"
              onClick={() => setSelectedMember(member)}
            >
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-accent">{member.role}</p>
                <div className="flex items-center text-xs text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  צפה בפרופיל <ArrowLeft className="w-3 h-3 mr-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Panel Overlay */}
      {selectedMember && (
         <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedMember(null)} />
      )}

      {/* Side Panel */}
      <div 
        ref={panelRef}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-surface z-50 shadow-2xl border-l border-white/10 translate-x-full"
      >
        {selectedMember && (
          <div className="h-full flex flex-col p-8 lg:p-12 overflow-y-auto">
            <button 
              onClick={() => setSelectedMember(null)}
              className="absolute top-6 right-6 p-2 text-white hover:text-accent"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mt-12 mb-8 relative w-full aspect-square rounded-lg overflow-hidden">
              <Image src={selectedMember.image} alt={selectedMember.name} fill className="object-cover" />
            </div>

            <h3 className="text-3xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-accent text-lg mb-6">{selectedMember.role}</p>
            <p className="text-gray-300 leading-relaxed text-lg">
              {selectedMember.bio}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
