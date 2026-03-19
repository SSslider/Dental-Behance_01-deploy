"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";

const treatments = [
  {
    id: "implants",
    title: "השתלות שיניים",
    description: "שיקום מלא ביום אחד (All-on-4/6) בטכניקה זעיר-פולשנית, ללא כאב ועם תוצאה מיידית.",
    longDescription: "טיפול השתלות שיניים מאפשר לכם לחזור לחייך בביטחון מלא. אנו משתמשים בשתלי טיטניום מהמתקדמים בעולם, המשתלבים טבעית בעצם הלסת ומעניקים יציבות מקסימלית ותחושה של שן טבעית לכל דבר.",
    image: "/images/cases/case-1-after.png"
  },
  {
    id: "aesthetics",
    title: "אסתטיקה דנטלית",
    description: "ציפויי חרסינה (Veneers) דקיקים, הלבנת שיניים בלייזר, ועיצוב חיוך דיגיטלי (DSD).",
    longDescription: "עיצוב חיוך אישי ומדויק באמצעות ציפויי חרסינה (Veneers) שקופים למחצה או הלבנה ממוחשבת. הטכנולוגיה הדיגיטלית שלנו מאפשרת לך לראות את התוצאה הסופית עוד לפני תחילת הטיפול.",
    image: "/images/cases/case-2-after.png"
  },
  {
    id: "ortho",
    title: "יישור שיניים",
    description: "קשתיות שקופות (Invisalign) ויישור מהיר ללא גשרים נראים לעין.",
    longDescription: "יישור שיניים מתקדם בשיטת הקשתיות השקופות, המאפשר יישור דיסקרטי ונוח. ללא סמכי מתכת, ללא הפרעה בדיבור או באכילה, ועם תוצאות מהירות ומדויקות.",
    image: "/images/gloves-hands.png"
  },
  {
    id: "surgery",
    title: "כירורגיה פה ולסת",
    description: "עקירות מורכבות, הרמות סינוס והשתלות עצם בטכנולוגיות מתקדמות.",
    longDescription: "טיפולים כירורגיים מתקדמים בסביבה סטרילית ומרגיעה. צוות הכירורגים שלנו מתמחה בהליכים מורכבים כמו עקירות שיני בינה קלואות, הרמות סינוס והשתלות עצם בטכניקות זעיר-פולשניות להחלמה מהירה.",
    image: "/images/dental-chair-3d.png"
  },
];

export function Treatments() {
  const [openId, setOpenId] = useState<string | null>(treatments[0].id);

  const toggleTreatment = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="treatments" className="bg-white text-black py-32 relative">
      <div className="container px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar / Header */}
        <div className="lg:col-span-4 sticky top-32 h-fit">
          <h2 className="text-5xl font-bold mb-8 tracking-tighter">טיפולים</h2>
          <p className="text-gray-500 mb-8 max-w-xs text-lg">
            אבחון מקיף וטיפול מותאם אישית בשיטות המתקדמות ביותר, בגישה הוליסטית המתייחסת גם לבריאות וגם לאסתטיקה.
          </p>
        </div>

        {/* List */}
        <div className="lg:col-span-8 flex flex-col">
          {treatments.map((item, index) => {
            const isOpen = openId === item.id;
            return (
            <div
              key={item.id}
              className={clsx(
                "group border-b border-gray-200 py-6 md:py-10 cursor-pointer transition-all duration-500 px-4",
                isOpen ? "bg-gray-50 rounded-2xl md:rounded-3xl shadow-sm border-transparent my-4" : "hover:bg-gray-50"
              )}
              onClick={() => toggleTreatment(item.id)}
            >
              <div className="flex items-center justify-between">
                <span className={clsx("text-sm font-mono transition-colors duration-300", isOpen ? "text-gray-900 font-bold" : "text-gray-400")}>0{index + 1}</span>
                <ArrowLeft className={clsx(
                  "w-8 h-8 transition-all duration-700 transform",
                  isOpen ? "opacity-100 bg-black text-white rounded-full p-2 -rotate-90 translate-x-0" : "opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 text-gray-500"
                )} />
              </div>
              <h3 className={clsx(
                "text-3xl md:text-4xl font-medium mt-4 transition-all duration-300",
                isOpen ? "text-black pl-4 mb-2" : "group-hover:pl-4 text-gray-700"
              )}>
                {item.title}
              </h3>
              
              {/* Accordion Content */}
              <div className={clsx(
                "grid transition-all duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)]",
                isOpen ? "grid-rows-[1fr] opacity-100 mt-6 md:mt-8" : "grid-rows-[0fr] opacity-0"
              )}>
                <div className="overflow-hidden">
                   <div className="flex flex-col md:flex-row gap-8 pb-4 px-2 md:px-4">
                     <div className="md:w-1/2 flex flex-col justify-center">
                       <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-light">{item.longDescription}</p>
                       <p className="text-black font-medium">{item.description}</p>
                       
                       <button className="mt-8 flex items-center w-fit text-sm font-semibold hover:gap-3 transition-all text-black border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600">
                         קרא עוד על הטיפול <ArrowLeft className="w-4 h-4 mr-2" />
                       </button>
                     </div>
                     <div className="md:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-md">
                       <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-[2000ms] hover:scale-105" />
                     </div>
                   </div>
                </div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
