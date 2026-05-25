import en from "../app/dictionaries/gallery_letter/en.json";
import es from "../app/dictionaries/gallery_letter/es.json";

export const getTranslationGalleryLetter = (locale: string) => {
    return locale === "en" ? en : es;
};