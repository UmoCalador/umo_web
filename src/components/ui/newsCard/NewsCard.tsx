"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";
import { formatDate } from "@/utils/formatDate";

type Props = {
  item: NewsItem;
};

export const NewsCard = ({ item }: Props) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [isLoaded, setIsLoaded] = useState(false);

  const rawUrl = item.image?.[0]?.url;

  const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : `${API_URL}${rawUrl}`
    : "/img/og-image.jpg";

  return (
    <article className="w-full sm:w-[320px] lg:w-[360px] group text-white">
      <Link href={`/noticia/${item.slug}`} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={item.title}
            fill
            unoptimized
            onLoad={() => setIsLoaded(true)}
            className={`
    object-cover transition-all duration-700
    ${isLoaded ? "opacity-100 blur-0" : "opacity-0 blur-md"}
  `}
          />
        </div>

        <div className="mt-4">
          <p className="text-sm text-white">{formatDate(item?.publishedAt)}</p>

          <h3 className="mt-2  text-base md:text-lg font-bold group-hover:underline">
            {item.title}
          </h3>

          <p className="mt-2 text-white line-clamp-2 text-sm md:text-base">
            {item?.excerpt}
          </p>

          <span className="inline-block mt-4 text-sm text-white group-hover:text-gray-300 transition">
            Leer más →
          </span>
        </div>
      </Link>
    </article>
  );
};
