import type { Metadata } from "next";
import Image from "next/image";
import { MenuCategories } from "@/components/blocks/menuCategories/MenuCategories";
import { FaUtensils, FaWineGlass, FaIceCream } from "react-icons/fa";
import { getDictionary } from "@/utils/getTranslation";
import { normalizeLang, Lang } from "@/i18n/config";
import { Category } from "@/types/category";

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
    <section className="min-h-screen text-white max-w-7xl mx-auto px-6 pt-28 pb-6">
      <header>
        <Image
          src="/img/logo_blanco_554x718.png"
          alt="UMO - Carta"
          width={250}
          height={250}
          priority
          style={{ display: "block", margin: "0 auto" }}
        />

        <h2 className="flex justify-center py-5 text-sm md:text-base">
          {translations.letter.description}
        </h2>
      </header>

      <section>
        <MenuCategories categories={categories[safeLang]} />
      </section>
    </section>
  );
}
