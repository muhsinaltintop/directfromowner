import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import SideMenu from "./_components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Direct From the Owner",
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
      </body>
    </html>
  );
}
