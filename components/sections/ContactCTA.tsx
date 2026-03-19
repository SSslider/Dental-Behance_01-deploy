"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

export function ContactCTA() {
  return (
    <section id="contact" className="py-32 bg-white text-black relative">
       <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
         <div className="lg:pr-12">
           <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
             הגיע הזמן<br />לחייך.
           </h2>
           <p className="text-xl text-gray-500 mb-8 max-w-md">
             הצטרפו למשפחת המטופלים שלנו ותהנו מרפואת שיניים ברמה אחרת.
           </p>
           <ul className="space-y-4 text-lg font-medium">
             <li className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-black" />
               ייעוץ ראשוני ללא התחייבות
             </li>
             <li className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-black" />
               תוכנית טיפול מותאמת אישית
             </li>
             <li className="flex items-center gap-3">
               <span className="w-2 h-2 rounded-full bg-black" />
               ליווי אישי לכל אורך הדרך
             </li>
           </ul>
         </div>

         {/* Form Card */}
         <div className="bg-black text-white p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
           
           <h3 className="text-3xl font-bold mb-8">השאר פרטים</h3>
           <form className="space-y-6 relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="שם מלא" className="bg-white/10 border-white/10" />
                <Input placeholder="טלפון" className="bg-white/10 border-white/10" />
             </div>
             <Input placeholder="סוג טיפול (לא חובה)" className="bg-white/10 border-white/10" />
             <Textarea placeholder="הערות נוספות" className="bg-white/10 border-white/10" />
             
             <Button variant="primary" className="w-full bg-white text-black hover:bg-gray-200">
               שלח פרטים
             </Button>
           </form>
         </div>

       </div>
    </section>
  );
}
