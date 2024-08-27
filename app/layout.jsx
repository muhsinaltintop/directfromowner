import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import  Head  from "next/head";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" sizes="32x32" href="/favicon.ico"/>
        <meta property="og:title" content="Global Property, UK Property Investment Experts" />
        <meta property="og:description" content="We provide high-performance property investments in the UK, offering end-to-end support, from financial analysis to portfolio building, tailored to client needs." />
        <meta property="og:image" content="https://panel.theglobalproperty.co.uk/uploads/icon_9ba4bcda9c.png" />
        <meta property="og:url" content="https://theglobalproperty.co.uk/" />
        <meta property="og:type" content="website" />

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
