import type { Metadata } from "next";
import Image from "next/image";
import { MenuCategories } from "@/components/blocks/menuCategories/MenuCategories";
import { FaUtensils, FaWineGlass, FaIceCream } from "react-icons/fa";
import { getDictionary } from "@/utils/getTranslation";
import { normalizeLang, Lang } from "@/i18n/config";
import { Category } from "@/types/category";
import { HeroVideo } from "@/components/blocks/heroVideo/HeroVideo";
import { Gallery } from "@/components/blocks/gallery/Gallery";
import { getTranslationGalleryLetter } from "@/utils/getTranslationGalleryLetter";

const categories: Record<Lang, Category[]> = {
  es: [
    {
      name: "Menú",
      icon: <FaUtensils />,
      file: "/carta/pdf/menu/es.pdf",
    },
    {
      name: "Bebidas",
      icon: <FaWineGlass />,
      file: "/carta/pdf/bebidas/bebidas.pdf",
    }
  ],
  en: [
    {
      name: "Tickets",
      icon: <FaUtensils />,
      file: "/carta/pdf/menu/en.pdf",
    },
    {
      name: "Drinks",
      icon: <FaWineGlass />,
      file: "/carta/pdf/bebidas/bebidas.pdf",
    }
  ],
  de: [
    {
      name: "Tickets",
      icon: <FaUtensils />,
      file: "/carta/pdf/menu/de.pdf",
    },
    {
      name: "Drinks",
      icon: <FaWineGlass />,
      file: "/carta/pdf/bebidas/bebidas.pdf",
    }
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
  const translationGalleryLetter = await getTranslationGalleryLetter(lang);

  return (
    <section className="min-h-screen text-white">
      <HeroVideo translations={translations} videoSrc="/hero_video_letter.mp4" showLogo={false} showText={translations.letter.title} />
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
        className="max-w-7xl mx-auto py-20 px-6"
        data-aos="fade-up"
        data-aos-duration="1250"
      >
        <p
          className="flex justify-center pb-10 text-sm md:text-base font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {translations.letter.description}
        </p>
        <MenuCategories categories={categories[safeLang]} />
      </section>
      <Gallery items={translationGalleryLetter} />
    </section>
  );
}
