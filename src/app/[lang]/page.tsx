import { HeroVideo } from "@/components/blocks/heroVideo/HeroVideo";
import { Presentation } from "@/components/blocks/presentation/Presentation";
import { OurLetter } from "@/components/blocks/ourLetter/OurLetter";
import { Map } from "@/components/blocks/map/Map";
import { LatestNews } from "@/components/blocks/latestNews/LatestNews";
import { LoadingProvider } from "@/context/LoadingContext";
import { Preloader } from "@/components/ui/preloader/Preloader";
import { getDictionary } from "@/utils/getTranslation";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params; 
  const translations = await getDictionary(lang);
  
  return (
    <>
      <LoadingProvider>
        {/* <Preloader /> */} 
        <HeroVideo translations={translations} />
        <Presentation translations={translations}/>
        <OurLetter translations={translations}/>
        <LatestNews translations={translations}/>
        <Map />
      </LoadingProvider>
    </>
  );
}
