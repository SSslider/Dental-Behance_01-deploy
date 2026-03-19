"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { clsx } from "clsx";

const treatments = [
  {
    id: "implants",
    title: "השתלות שיניים",
    description: "שיקום מלא ביום אחד (All-on-4/6) בטכניקה זעיר-פולשנית, ללא כאב ועם תוצאה מיידית.",
  },
  {
    id: "aesthetics",
    title: "אסתטיקה דנטלית",
    description: "ציפויי חרסינה (Veneers) דקיקים, הלבנת שיניים בלייזר, ועיצוב חיוך דיגיטלי (DSD).",
  },
  {
    id: "ortho",
    title: "יישור שיניים",
    description: "קשתיות שקופות (Invisalign) ויישור מהיר ללא גשרים נראים לעין.",
  },
  {
    id: "surgery",
    title: "כירורגיה פה ולסת",
    description: "עקירות מורכבות, הרמות סינוס והשתלות עצם בטכנולוגיות מתקדמות.",
  },
];

export function Treatments() {
  const [activeTreatment, setActiveTreatment] = useState(treatments[0]);
  const [openId, setOpenId] = useState<string | null>(treatments[0].id);

  const toggleTreatment = (item: typeof treatments[0]) => {
    setActiveTreatment(item);
    setOpenId(openId === item.id ? null : item.id);
  };

  return (
    <section id="treatments" className="bg-white text-black py-32 relative">
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar / Header */}
        <div className="lg:col-span-4 sticky top-32 h-fit">
          <h2 className="text-5xl font-bold mb-8 tracking-tighter">טיפולים</h2>
          <p className="text-gray-500 mb-8 max-w-xs">
            אבחון מקיף וטיפול מותאם אישית בשיטות המתקדמות ביותר.
          </p>
          
          <div className="hidden lg:block p-8 bg-gray-50 rounded-2xl transition-all duration-500">
            <h4 className="font-bold mb-4">מידע נוסף</h4>
            <p className="text-sm text-gray-600 mb-4 transition-opacity duration-300">{activeTreatment.description}</p>
            <button className="flex items-center text-sm font-semibold hover:gap-2 transition-all hover:text-gray-600">
              קרא עוד <ArrowLeft className="w-4 h-4 mr-2" />
            </button>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-8 flex flex-col">
          {treatments.map((item, index) => {
            const isOpen = openId === item.id;
            return (
            <div
              key={item.id}
              className={clsx(
                "group border-b border-gray-200 py-8 md:py-12 cursor-pointer transition-all duration-500 px-4",
                isOpen ? "bg-gray-50" : "hover:bg-gray-50"
              )}
              onClick={() => toggleTreatment(item)}
            >
              <div className="flex items-center justify-between">
                <span className={clsx("text-xs font-mono transition-colors duration-300", isOpen ? "text-gray-900 font-bold" : "text-gray-400")}>0{index + 1}</span>
                <ArrowLeft className={clsx(
                  "w-6 h-6 transition-all duration-500 transform",
                  isOpen ? "opacity-100 bg-gray-200 rounded-full p-1 -rotate-90 translate-x-0" : "opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
                )} />
              </div>
              <h3 className={clsx(
                "text-3xl font-medium mt-4 transition-all duration-300",
                isOpen ? "text-black pl-4" : "group-hover:pl-4"
              )}>
                {item.title}
              </h3>
              
              {/* Accordion Content */}
              <div className={clsx(
                "grid transition-all duration-500 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                  <p className="text-gray-600 lg:hidden text-base leading-relaxed">{item.description}</p>
                  <button className="mt-6 flex lg:hidden items-center text-sm font-semibold hover:gap-2 transition-all text-black">
                    קרא עוד <ArrowLeft className="w-4 h-4 mr-2" />
                  </button>
                  {/* Visual spacer for desktop to show it's open */}
                  <div className="hidden lg:block h-4"></div>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
