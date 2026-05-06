"use client"
import { getDictionary } from "@/utils/getTranslation";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "es";
  const translations = getDictionary(lang);
    
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">{translations["404"].description}</p>

      <a
        href={`/${lang}`}
        className="px-6 py-3 bg-gold text-black rounded-lg text-white font-semibold"
      >
        {translations["404"].button_text}
      </a>
    </section>
  );
}
