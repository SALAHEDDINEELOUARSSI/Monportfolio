import dynamic from "next/dynamic";

import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
const ScrollToTop = dynamic(() => import("../components/ScrollToTop"), { ssr: false });
import Navbar from "./components/navbar";

import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of ELOUARSSI Salaheddine - Software engineer ",
  description:
    "My name is Salaheddine Elouarssi. I am a final-year Computer Engineering student with strong expertise in full-stack development and artificial intelligence. Passionate about technological innovation and business process automation, I am eager to apply my skills to real-world challenges. I am actively seeking opportunities to contribute to ambitious technology projects, where I can deliver creative solutions and drive meaningful impact in the IT sector.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
