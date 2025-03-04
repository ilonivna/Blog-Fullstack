import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Killua the Fluff",
  description: "The best blog app of Killua the Cat, the Fluff, the Pig!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          
        
          <div className="wrapper"><Navbar/>{children}<Footer/></div>
        </div>
      </body>
    </html>
  );
}
