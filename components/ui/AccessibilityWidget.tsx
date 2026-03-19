"use client";

import { useState, useEffect } from "react";
import { Accessibility, Type, Glasses, Palette, Link as LinkIcon, Minus, Plus, RefreshCw, X } from "lucide-react";
import { clsx } from "clsx";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  
  // States for options
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  // Apply styles when state changes
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("high-contrast-mode");
    } else {
      document.body.classList.remove("high-contrast-mode");
    }
  }, [highContrast]);

  useEffect(() => {
    if (grayscale) {
      document.body.style.filter = "grayscale(100%)";
    } else {
      document.body.style.filter = "none";
    }
  }, [grayscale]);

  useEffect(() => {
    if (highlightLinks) {
      document.body.classList.add("highlight-links");
    } else {
      document.body.classList.remove("highlight-links");
    }
  }, [highlightLinks]);

  useEffect(() => {
    if (readableFont) {
      document.body.style.fontFamily = "Arial, sans-serif";
    } else {
      document.body.style.fontFamily = "";
    }
  }, [readableFont]);

  const resetAll = () => {
    setFontSize(100);
    setHighContrast(false);
    setGrayscale(false);
    setHighlightLinks(false);
    setReadableFont(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="פתח תפריט נגישות"
        title="הצהרת נגישות"
      >
        <Accessibility className="w-8 h-8" />
      </button>

      {/* Widget Panel */}
      <div 
        className={clsx(
          "fixed bottom-24 right-6 z-50 bg-white shadow-2xl rounded-2xl w-[320px] max-w-[calc(100vw-3rem)] overflow-hidden transition-all duration-300 border border-gray-100",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-8 pointer-events-none"
        )}
        dir="rtl"
      >
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <h3 className="font-bold flex items-center gap-2">
            <Accessibility className="w-5 h-5" /> תפריט נגישות
          </h3>
          <button onClick={() => setIsOpen(false)} aria-label="סגור תפריט" className="hover:bg-blue-700 p-1 rounded transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[60vh] overflow-y-auto text-black">
          
          {/* Text Size */}
          <div className="space-y-2">
            <p className="font-semibold text-sm">גודל טקסט</p>
            <div className="flex gap-2">
              <button onClick={() => setFontSize(prev => Math.min(prev + 10, 150))} className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 rounded flex items-center justify-center gap-1 transition-colors">
                <Plus className="w-4 h-4" /> הגדל
              </button>
              <button onClick={() => setFontSize(prev => Math.max(prev - 10, 80))} className="flex-1 bg-gray-100 hover:bg-gray-200 py-2 rounded flex items-center justify-center gap-1 transition-colors">
                <Minus className="w-4 h-4" /> הקטן
              </button>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Toggles */}
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => setHighContrast(!highContrast)} 
              className={clsx("p-3 rounded-xl border transition-all text-sm flex flex-col items-center text-center gap-2", highContrast ? "bg-blue-50 border-blue-600 text-blue-700" : "border-gray-200 hover:bg-gray-50")}
            >
              <Palette className="w-6 h-6" />
              ניגודיות גבוהה
            </button>
            
            <button 
              onClick={() => setGrayscale(!grayscale)} 
              className={clsx("p-3 rounded-xl border transition-all text-sm flex flex-col items-center text-center gap-2", grayscale ? "bg-blue-50 border-blue-600 text-blue-700" : "border-gray-200 hover:bg-gray-50")}
            >
              <Glasses className="w-6 h-6" />
              גווני אפור
            </button>
            
            <button 
              onClick={() => setHighlightLinks(!highlightLinks)} 
              className={clsx("p-3 rounded-xl border transition-all text-sm flex flex-col items-center text-center gap-2", highlightLinks ? "bg-blue-50 border-blue-600 text-blue-700" : "border-gray-200 hover:bg-gray-50")}
            >
              <LinkIcon className="w-6 h-6" />
              הדגשת קישורים
            </button>
            
            <button 
              onClick={() => setReadableFont(!readableFont)} 
              className={clsx("p-3 rounded-xl border transition-all text-sm flex flex-col items-center text-center gap-2", readableFont ? "bg-blue-50 border-blue-600 text-blue-700" : "border-gray-200 hover:bg-gray-50")}
            >
              <Type className="w-6 h-6" />
              פונט קריא
            </button>
          </div>

          <hr className="border-gray-100" />

          <button onClick={resetAll} className="w-full text-blue-600 font-semibold py-2 hover:bg-blue-50 rounded transition-colors flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4" /> אפס הגדרות
          </button>

          <p className="text-xs text-center text-gray-400 mt-2">
            בהתאם לתקנות נגישות לשירות בישראל.
          </p>
        </div>
      </div>
    </>
  );
}
