import type { Metadata } from "next";
import NewPageContact from "./NewPageContact";
import { getDictionary } from "@/utils/getTranslation";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos para más información sobre nuestro restaurante.",
  openGraph: {
    title: "Contacto - UMO | Fire & Steakhouse",
    description: "Contáctanos para más información sobre nuestro restaurante.",
    url: "https://umocalador.es/contacto",
    images: [
      {
        url: "https://umocalador.es/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default async function ContactoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const translations = await getDictionary(lang);

  return <NewPageContact translations={translations} />;
}
