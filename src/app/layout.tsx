// layout.tsx
import Navbar from "@/src/app/components/layout/navbar/Navbar";
import Aurora from "@/src/app/components/ui/Background/Aurora";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {" "}
        <Navbar />
        <Aurora />
        <main>{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
