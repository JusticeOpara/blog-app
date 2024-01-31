import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App",
  description:
    "It a platform that lets users create, edit, and publish written and multimedia content online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          
          <div className="min-h-[100vh] bg-slate-500 w-full  ">
            <div
              className="px-6 md:md-10 lg:px-20 xl:px-32 2xl:px-40 bg-[#fff] lg:bg-red-300 xl:bg-white"
            >
              <Navbar />

              {children}

              <Footer />
            </div>
          </div>

        </AuthProvider>
      </body>
    </html>
  );
}
