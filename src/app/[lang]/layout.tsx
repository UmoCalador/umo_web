import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { AosProvider } from "@/components/providers/AosProvider";

const geistMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umocalador.es/"),

  title: {
    default: "UMO | Fire & Steakhouse - Cala D'Or",
    template: "%s | UMO - Fire & Steakhouse - Cala D'Or",
  },

  description:
    "Restaurante en Cala D'Or especializado en carnes a la parrilla y experiencias gastronómicas únicas.",

  keywords: [
    "restaurante cala dor",
    "steakhouse",
    "restaurante carnes",
    "umo restaurant",
  ],

  openGraph: {
    title: "UMO | Fire & Steakhouse",
    description: "Disfrutá de una experiencia gastronómica única en Cala D'Or.",
    url: "https://umocalador.es/",
    siteName: "UMO Restaurant",
    images: [
      {
        url: "https://umocalador.es/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "UMO | Fire & Steakhouse",
    description: "Restaurante en Cala D'Or",
    images: ["/img/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistMontserrat.variable} h-full antialiased`}
    >
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      <AosProvider />
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "UMO Fire & Steakhouse",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cala D'Or",
                addressCountry: "ES",
              },
              servesCuisine: "Steakhouse",
              telephone: "+34871612605",
              url: "https://umocalador.es",
            }),
          }}
        />
      </body>
    </html>
  );
}
