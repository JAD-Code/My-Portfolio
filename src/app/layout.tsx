import Navbar from "@/src/app/components/layout/navbar/Navbar";
import Aurora from "@/src/app/components/ui/Background/Aurora";
import "./globals.css";
import ForceDark from "./components/layout/ForceDark";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        {" "}
        <ForceDark />
        <Navbar />
        <Aurora />
        <main>{children}</main>
      </body>
    </html>
  );
}
