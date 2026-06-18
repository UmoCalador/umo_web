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
  try {
    const controller = new AbortController();

    const timeout = setTimeout(() => controller.abort(), 9000);

    const res = await fetch(
      `${API_URL}/api/news?populate=*&sort=publishedAt:desc`,
      {
        cache: "no-store",
        signal: controller.signal,
      },
    );

    clearTimeout(timeout);

    if (!res.ok) {
      console.error("Error API noticias:", res.status);
      return [];
    }

    const data = await res.json();

    return data.data || [];
  } catch (error) {
    console.error("Error obteniendo noticias:", error);

    return [];
  }
}

export default async function Page({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const translations = await getDictionary(lang);
  const initialNews = await getInitialNews();
  //const initialNews = [{"id":3,"documentId":"p7yarzxb3el9wgp4hwj8qzf3","title":"Nueva carta de temporada","excerpt":"Descubrí los nuevos sabores que incorporamos para esta temporada.","content":"# Lorem ipsum dolor sit amet\n**Lorem ipsum** dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus. \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.","slug":"nueva-carta-de-temporada","createdAt":"2026-04-29T17:46:00.574Z","updatedAt":"2026-04-29T18:57:43.384Z","publishedAt":"2026-04-29T18:57:43.468Z","image":[{"id":1,"documentId":"gxg1exr6441vsy4j5j6urmms","name":"iira116-a-restaurant-4898052_1280.jpg","alternativeText":null,"caption":null,"focalPoint":null,"width":1280,"height":905,"formats":{"large":{"ext":".jpg","url":"https://harmonious-freedom-5575cc53fa.media.strapiapp.com/large_iira116_a_restaurant_4898052_1280_65924e6fb4.jpg","hash":"large_iira116_a_restaurant_4898052_1280_65924e6fb4","mime":"image/jpeg","name":"large_iira116-a-restaurant-4898052_1280.jpg","path":null,"size":125.2,"width":1000,"height":707,"sizeInBytes":125199},"small":{"ext":".jpg","url":"https://harmonious-freedom-5575cc53fa.media.strapiapp.com/small_iira116_a_restaurant_4898052_1280_65924e6fb4.jpg","hash":"small_iira116_a_restaurant_4898052_1280_65924e6fb4","mime":"image/jpeg","name":"small_iira116-a-restaurant-4898052_1280.jpg","path":null,"size":41.34,"width":500,"height":354,"sizeInBytes":41336},"medium":{"ext":".jpg","url":"https://harmonious-freedom-5575cc53fa.media.strapiapp.com/medium_iira116_a_restaurant_4898052_1280_65924e6fb4.jpg","hash":"medium_iira116_a_restaurant_4898052_1280_65924e6fb4","mime":"image/jpeg","name":"medium_iira116-a-restaurant-4898052_1280.jpg","path":null,"size":79.63,"width":750,"height":530,"sizeInBytes":79632},"thumbnail":{"ext":".jpg","url":"https://harmonious-freedom-5575cc53fa.media.strapiapp.com/thumbnail_iira116_a_restaurant_4898052_1280_65924e6fb4.jpg","hash":"thumbnail_iira116_a_restaurant_4898052_1280_65924e6fb4","mime":"image/jpeg","name":"thumbnail_iira116-a-restaurant-4898052_1280.jpg","path":null,"size":9.79,"width":221,"height":156,"sizeInBytes":9790}},"hash":"iira116_a_restaurant_4898052_1280_65924e6fb4","ext":".jpg","mime":"image/jpeg","size":181.03,"url":"https://harmonious-freedom-5575cc53fa.media.strapiapp.com/iira116_a_restaurant_4898052_1280_65924e6fb4.jpg"}]}];

  return (
    <NewsPageClient initialNews={initialNews} translations={translations} />
  );
}
