import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import SideMenu from "./_components/SideMenu";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Property",
  description: "Best way to trade properties, cars and others...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="flex">
          <div className="w-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
