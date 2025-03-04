import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Killua the Fluff",
  description: "The best blog app of Killua the Cat, the Fluff, the Pig!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
