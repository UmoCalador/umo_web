'use client';
import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";
import { usePathname } from "next/navigation";

type Props = {
  translations: any;
}

export const OurLetter = ({ translations }: Props) => {
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "es";


  return (
    <section className="w-full py-24 bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          {translations.home.our_letter.title}
        </h1>

        <p className="mt-4 text-white text-sm md:text-base">
          {translations.home.our_letter.description}
        </p>

        <ButtonLink
          href={`/${lang}/carta`}
          bgColor="bg-gradient-to-b from-[#F1DF7D] to-[#E19025]"
          hoverBgColor="hover:bg-none hover:bg-transparent"
          textColor="text-black"
          hoverTextColor="hover:text-white"
          borderColor="border border-[#F1DF7D] border-2"
          hoverBorderColor="hover:border-[#E19025] hover:border-2"
          target="_self"
          eventData={{
            event: "contact_click",
            method: "letter_open",
            location: "home",
          }}
        >
          {translations.home.our_letter.text_button} →
        </ButtonLink>
      </div>
    </section>
  );
};
