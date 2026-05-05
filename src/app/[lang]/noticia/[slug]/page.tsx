import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import { MarkdownRenderer } from "@/components/ui/markdownRenderer/MarkdownRenderer";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = await getNoticia(slug);
  
  if (!noticia) return {};

  return {
    title: noticia.title,
    description: noticia.excerpt,
    openGraph: {
      title: noticia.title,
      type: "article",
      url: `https://umocalador.es/noticias/${noticia.slug}`,
      description: noticia.excerpt,
      images: `https://umocalador.es${noticia.image}`,
    },
  };
}

async function getNoticia(slug: string) {
  const res = await fetch(
    `${API_URL}/api/news?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.data[0];
}

export default async function NoticiaDetalle({ params }: Props) {
  const { slug } = await params;
  const noticia = await getNoticia(slug);

  const rawUrl = noticia.image?.[0]?.url;

  const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : `${API_URL}${rawUrl}`
    : "/img/og-image.jpg";

  if (!noticia) return notFound();

  return (
    <article className="min-h-screen pt-30 pb-16 px-6 text-white max-w-4xl mx-auto">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          {noticia.title}
        </h1>

        <p className="mt-4 text-lg text-white text-center ">
          {noticia.excerpt}
        </p>
      </header>

      {noticia.image && noticia.image[0] && (
        <figure className="mt-8 mb-4 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={imageUrl}
            alt={noticia.title}
            unoptimized
            fill
            className="object-scale-down"
          />
        </figure>
      )}
      
      <time className="text-sm text-white">
        {formatDate(noticia.publishedAt)}
      </time>

      <section className="mt-4 text-white leading-relaxed space-y-4 text-sm md:text-base">
        <MarkdownRenderer content={noticia.content} />
      </section>
    </article>
  );
}
