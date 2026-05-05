"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/utils/getTranslation";

export const NavLinks = () => {
  const pathname = usePathname();

  const lang = pathname.split("/")[1] || "es";
  const translations = getDictionary(lang);

  const isActive = (path: string) => {
    if (path === "/noticias") {
      return pathname === `/${lang}/noticias` || pathname.startsWith(`/${lang}/noticia/`);
    }
    return pathname === `/${lang}${path}`;
  };

  const linkClass = (path: string) =>
    `font-semibold hover:text-gold ${
      isActive(path) ? "text-gold" : "text-white"
    }`;

  return (
    <>
      <Link href={`/${lang}/carta`} className={linkClass("/carta")}>
        {translations.navigation.letter}
      </Link>
      <Link href={`/${lang}/contacto`} className={linkClass("/contacto")}>
        {translations.navigation.contact}
      </Link>
      <Link href={`/${lang}/noticias`} className={linkClass("/noticias")}>
        {translations.navigation.news}
      </Link>
    </>
  );
};
