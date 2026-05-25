import en from "../app/dictionaries/gallery_home/en.json";
import es from "../app/dictionaries/gallery_home/es.json";

export const getTranslationGalleryHome = (locale: string) => {
    return locale === "en" ? en : es;
};