import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { AccessibilityWidget } from "@/components/ui/AccessibilityWidget";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "White Dental - רפואת שיניים אסתטית",
  description: "מרפאת שיניים פרימיום בתל אביב. השתלות המחשב, אסתטיקה ושיקום הפה.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <AccessibilityWidget />
      </body>
    </html>
  );
}
