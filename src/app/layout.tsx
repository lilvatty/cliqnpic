import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Anton, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300","400","600","700"],
  subsets: ['latin']
});

const anton = Anton({
  variable: "--font-anton",
  weight: ["400"],
  subsets:['latin']
})

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"]
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cliqnpic | photobooth",
  description: "Bali based high quality photobooth services",
  icons: [
    { rel: "icon", url: "/favicon.ico"},
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml"},
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png"},
  ]
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta title="cliqnpic" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${anton.variable} ${inter.variable} bg-primary-white antialiased`}
      >
        <header>
          <Navbar/>
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
