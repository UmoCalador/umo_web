"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { NewsCard } from "@/components/ui/newsCard/NewsCard";
import { NewsItem } from "@/types/news";
import { SkeletonCard } from "@/components/ui/skeletons/SkeletonCard";

const ITEMS_PER_PAGE = 6;

export default function NewsPageClient( { initialNews }: { initialNews: NewsItem[] } ) {
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
        <h1 className="text-4xl md:text-6xl font-bold flex justify-center pb-5 text-gold">
          Noticias
        </h1>
        <p className="flex justify-center pb-5 text-sm md:text-base text-white">
          Enterate de todas las novedades y eventos.
        </p>
      </header>

      {!loading && allNews.length === 0 && (
        <div className="text-center text-white py-10">
          No hay noticias disponibles
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
            justify-items-center
          "
        >
          {visibleItems.map((item) => (
            <div key={item.id} className="animate-fadeIn">
              <NewsCard item={item} />
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
