import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
// import { ThemeContextProvider } from "@/Context/ThemeContext";
// import ThemeProvider from "@/providers/ThemeProvider";

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
          {/* <ThemeContextProvider>
          <ThemeProvider> 
        */}

          <div className="min-h-[100vh] bg-slate-500  ">
            <div
              className="max-w-[1536px] max-2xl:max-w-[1366px] max-xl:max-w-[1024px] 
          max-lg:max-w-[768px] max-md:max-w-[640px] max-sm:max-w-[475px] mx-auto lg:px-20 bg-[#fff] "
            >
              <Navbar />

              {children}

              <Footer />
            </div>
          </div>

          {/* </ThemeProvider>
        </ThemeContextProvider>  */}
        </AuthProvider>
      </body>
    </html>
  );
}
