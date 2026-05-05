import type { Metadata } from "next";
import NewsPageClient from "./NewPageCllient";
import { getDictionary } from "@/utils/getTranslation";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const metadata: Metadata = {
  title: "Noticias",
  description: "Enterate de todas las novedades y eventos.",
  openGraph: {
    title: "Noticias - UMO | Fire & Steakhouse",
    description: "Enterate de todas las novedades y eventos.",
    url: "https://umocalador.es/noticias",
    images: [
      {
        url: "https://umocalador.es/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

async function getInitialNews() {
  const res = await fetch(
    `${API_URL}/api/news?populate=*&sort=publishedAt:desc`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data.data || [];
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = await getDictionary(lang);
  const initialNews = await getInitialNews();
    
  return <NewsPageClient initialNews={initialNews} translations={translations} />;
}
