"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { NewsCard } from "@/components/ui/newsCard/NewsCard";
import { NewsItem } from "@/types/news";
import { SkeletonCard } from "@/components/ui/skeletons/SkeletonCard";

const ITEMS_PER_PAGE = 6;

export default function NewsPageClient( { initialNews, translations }: { initialNews: NewsItem[]; translations: any } ) {
  const [allNews] = useState<NewsItem[]>(initialNews);
  const [visibleItems, setVisibleItems] = useState<NewsItem[]>(initialNews.slice(0, ITEMS_PER_PAGE));
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(() => {
    if (loading) return;
    if (visibleItems.length >= allNews.length) return;

    setLoading(true);

    setTimeout(() => {
      const nextItems = allNews.slice(0, visibleItems.length + ITEMS_PER_PAGE);

      setVisibleItems(nextItems);
      setLoading(false);
    }, 1000);
  }, [loading, visibleItems, allNews]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !loading) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px",
      },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loadMore, loading]);

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 pt-28 pb-6">
      <header>
        <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-5 text-gold" data-aos="fade-up" data-aos-duration="500">
          {translations.news.title}
        </h1>
        <p className="flex justify-center pb-5 text-sm md:text-base text-white font-semibold" data-aos="fade-up" data-aos-duration="750">
          {translations.news.description}
        </p>
      </header>

      {!loading && allNews.length === 0 && (
        <div className="text-center text-white py-10 font-semibold" data-aos="fade-up" data-aos-duration="750">
          {translations.news.no_news}
        </div>
      )}

      { !loading && allNews.length > 0 && (
        <section
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            justify-items-center"
            data-aos="fade-up" data-aos-duration="1000"
        >
          {visibleItems.map((item) => (
            <div key={item.id} className="animate-fadeIn" data-aos="fade-up" data-aos-duration="1000">
              <NewsCard item={item} translations={translations} />
            </div>
          ))}
        </section>
      )}

      {loading && (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </section>
      )}

      <div ref={loaderRef} className="h-10" />
    </section>
  );
}
