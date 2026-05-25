"use client";

import { useEffect, useState } from "react";
import { NewsCard } from "@/components/ui/newsCard/NewsCard";
import { NewsItem } from "@/types/news";

type Props = {
  translations: any;
};

export const LatestNews = ({ translations }: Props) => {
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [visibleItems, setVisibleItems] = useState<NewsItem[]>([]);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${API_URL}/api/news?populate=*&sort=publishedAt:desc`,
        );
        if (!res.ok) {
          console.error("Error API noticias:", res.status);
          return [];
        }
        const data = await res.json();
        setAllNews(data.data);
        setVisibleItems(data.data.slice(0, 3));
      } catch (err) {
        console.error("Error fetching news:", err);
        return [];
      }
    };

    fetchNews();
  }, []);

  const news = allNews.slice(0, 3);

  if (!news.length) return null;

  return (
    <section
      className="w-full py-20"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10 text-gold">
          {translations.home.latest_news.title}
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} translations={translations} />
          ))}
        </div>
      </div>
    </section>
  );
};
