"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10">
      <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
           <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            WHITE<span className="text-accent">DENTAL</span>
          </Link>
          <p className="text-accent max-w-sm">
            מרפאת שיניים פרימיום המתמחה באסתטיקה, שיקום והשתלות. אנו מחויבים למצוינות רפואית ושירות אישי.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-6">ניווט</h4>
          <ul className="space-y-4 text-accent">
            <li><Link href="#about" className="hover:text-white transition-colors">אודות</Link></li>
            <li><Link href="#treatments" className="hover:text-white transition-colors">טיפולים</Link></li>
            <li><Link href="#team" className="hover:text-white transition-colors">הצוות</Link></li>
            <li><Link href="#cases" className="hover:text-white transition-colors">מקרים</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-6">צור קשר</h4>
          <ul className="space-y-4 text-accent">
            <li>שדרות רוטשילד 1, תל אביב</li>
            <li>03-555-1234</li>
            <li>clinic@whitedental.co.il</li>
            <li className="flex gap-4 mt-6">
               <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
               <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-accent/50">
        <p>&copy; {new Date().getFullYear()} White Dental Clinic. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
