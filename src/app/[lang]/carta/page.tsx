import type { Metadata } from "next";
import Image from "next/image";
import { MenuCategories } from "@/components/blocks/menuCategories/MenuCategories";
import { FaUtensils, FaWineGlass, FaIceCream } from "react-icons/fa";
import { getDictionary } from "@/utils/getTranslation";
import { normalizeLang, Lang } from "@/i18n/config";
import { Category } from "@/types/category";
import { HeroVideo } from "@/components/blocks/heroVideo/HeroVideo";

const categories: Record<Lang, Category[]> = {
  es: [
    {
      name: "Entradas",
      icon: <FaUtensils />,
      file: "/pdf/entradas.pdf",
    },
    {
      name: "Bebidas",
      icon: <FaWineGlass />,
      file: "/pdf/bebidas.pdf",
    },
    {
      name: "Postres",
      icon: <FaIceCream />,
      file: "/pdf/postres.pdf",
    },
  ],
  en: [
    {
      name: "tickets",
      icon: <FaUtensils />,
      file: "/pdf/tickets.pdf",
    },
    {
      name: "Drinks",
      icon: <FaWineGlass />,
      file: "/pdf/drinks.pdf",
    },
    {
      name: "Desserts",
      icon: <FaIceCream />,
      file: "/pdf/desserts.pdf",
    },
  ],
};

export const metadata: Metadata = {
  title: "Carta",
  description: "Descubrí nuestra carta con entradas, bebidas y postres.",
  openGraph: {
    title: "Carta  - UMO | Fire & Steakhouse",
    description: "Descubrí nuestra carta con entradas, bebidas y postres.",
    url: "https://umocalador.es/carta",
    images: [
      {
        url: "https://umocalador.es/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function CartaPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const safeLang = normalizeLang(lang);
  const translations = await getDictionary(safeLang);

  return (
    <section className="min-h-screen text-white pb-6">
      <HeroVideo translations={translations} videoSrc="/hero_video.mp4" showLogo={false} />
      {/**<header>
        <Image
          src="/img/logo_blanco_554x718.png"
          alt="UMO - Carta"
          width={250}
          height={250}
          priority
          style={{ display: "block", margin: "0 auto" }}
          data-aos="fade-up" data-aos-duration="750"/>
         
        <h2 className="flex justify-center py-5 text-sm md:text-base" data-aos="fade-up" data-aos-duration="1000">
          {translations.letter.description}
        </h2>
      </header>*/}

      <section
        className="max-w-7xl mx-auto py-20"
        data-aos="fade-up"
        data-aos-duration="1250"
      >
        <h2
          className="flex justify-center pb-10 text-sm md:text-base"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {translations.letter.description}
        </h2>
        <MenuCategories categories={categories[safeLang]} />
      </section>
    </section>
  );
}
