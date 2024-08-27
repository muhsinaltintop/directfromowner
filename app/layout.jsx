import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import  Head  from "next/head";
import GPLogo from "../public/favicon.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Property",
  description: "UK Property Investment Experts",
  image: "/icon.png",
  url: "https://theglobalproperty.co.uk/",
  type: "website"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" sizes="32x32" href="/favicon.ico"/>
        </Head>
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
