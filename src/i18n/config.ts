export const locales = ["es", "en", "de"] as const;

export type Lang = (typeof locales)[number];

export const defaultLang: Lang = "es";

export const normalizeLang = (lang: string | undefined): Lang => {
  return locales.includes(lang as Lang) ? (lang as Lang) : defaultLang;
};