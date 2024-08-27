import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import  Head  from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Property: UK Property Investment Experts",
  description: "We provide high-performance property investments in the UK, offering end-to-end support, from financial analysis to portfolio building, tailored to client needs.",
  openGraph: {
    title: "Global Property: UK Property Investment Experts",
    description: "We provide high-performance property investments in the UK, offering end-to-end support, from financial analysis to portfolio building, tailored to client needs.",
    url: "https://theglobalproperty.co.uk/",
    images: [
      {
        url: "https://panel.theglobalproperty.co.uk/uploads/icon_579502c12f.png",
        width: 600,
        height: 600,
        alt: "Global Property Logo",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Property: UK Property Investment Experts",
    description: "We provide high-performance property investments in the UK, offering end-to-end support, from financial analysis to portfolio building, tailored to client needs.",
    images: ["https://panel.theglobalproperty.co.uk/uploads/icon_579502c12f.png"],
  },
  icons: {
    icon: "/favicon.ico", // Path to your favicon
    sizes: "32x32",
  },
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
