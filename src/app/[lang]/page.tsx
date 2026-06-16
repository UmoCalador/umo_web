import { HeroVideo } from "@/components/blocks/heroVideo/HeroVideo";
import { Presentation } from "@/components/blocks/presentation/Presentation";
import { OurLetter } from "@/components/blocks/ourLetter/OurLetter";
import { Map } from "@/components/blocks/map/Map";
import { LatestNews } from "@/components/blocks/latestNews/LatestNews";
import { LoadingProvider } from "@/context/LoadingContext";
import { Preloader } from "@/components/ui/preloader/Preloader";
import { Gallery } from "@/components/blocks/gallery/Gallery";
import { getDictionary } from "@/utils/getTranslation";
import { getTranslationGalleryHome } from "@/utils/getTranslationGalleryHome";
import { OurChef } from "@/components/blocks/ourChef/OurChef";


export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params; 
  const translations = await getDictionary(lang);
  const translationGalleryHome = await getTranslationGalleryHome(lang);

  return (
    <>
      <LoadingProvider>
        {/* <Preloader /> */} 
        <HeroVideo translations={translations} videoSrc="/umo_hero.mp4" showLogo={true} />
        <Presentation translations={translations}/>
        <OurLetter translations={translations}/>
        <OurChef translations={translations}/>
        <Gallery items={translationGalleryHome} />
        <LatestNews translations={translations}/>
        <Map />
      </LoadingProvider>
    </>
  );
}
