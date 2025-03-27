import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

// Define the Cloudinary image ID in one place for consistency
const logoImageId = "lg_kicau_burung_rpwxal";
const cloudinaryBaseUrl = "https://res.cloudinary.com/djnquduyl/image/upload/v1743013684";

// Add a fallback placeholder image

export const metadata: Metadata = {
  title: "Kicau Burung - Download Suara Burung Kicau Terbaik Untuk Masteran",
  description: "Koleksi lengkap suara kicau burung mp3 download gratis untuk masteran, lomba, terapi relaksasi, dan pancingan. Dapatkan suara burung gacor terpopuler di Indonesia.",
  keywords: "kicau burung terbaik, kicau burung mp3 download gratis, suara kicau burung untuk masteran, burung kicau untuk lomba, kicau burung juara nasional, kicau burung hutan asli, download suara kicau burung gacor, kicau burung buat pancingan, kicau burung untuk menenangkan pikiran, burung kicau terpopuler di Indonesia",
  openGraph: {
    title: "Kicau Burung - Download Suara Burung Kicau Terbaik Untuk Masteran",
    description: "Koleksi lengkap suara kicau burung mp3 download gratis untuk masteran, lomba, terapi relaksasi, dan pancingan. Dapatkan suara burung gacor terpopuler di Indonesia.",
    url: "https://kicauburung.my.id",
    siteName: "Kicau Burung",
    images: [
      {
        url: "https://res.cloudinary.com/djnquduyl/image/upload/v1743013684/lg_kicau_burung_rpwxal.png",
        width: 1200,
        height: 630,
        alt: "Kicau Burung - Suara Burung Kicau Terbaik",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: [
      { url: `${cloudinaryBaseUrl}/${logoImageId}.png` },
      { url: `${cloudinaryBaseUrl}/${logoImageId}.png`, sizes: "16x16" },
      { url: `${cloudinaryBaseUrl}/${logoImageId}.png`, sizes: "32x32" },
    ],
    apple: {
      url: `${cloudinaryBaseUrl}/${logoImageId}.png`,
      sizes: "180x180",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="canonical" href="https://kicauburung.my.id" />
        {/* Google Search Console verification meta tag */}
        <meta name="google-site-verification" content="YOUR_ACTUAL_VERIFICATION_CODE" />
        {/* Add global styles for image placeholders */}
        <style dangerouslySetInnerHTML={{ __html: `
          .img-skeleton {
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite;
            border-radius: 4px;
          }
          @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}} />
      </head>
      <body className={`${inter.className} bg-[#FEFAE0]`}>
        <Header/>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
