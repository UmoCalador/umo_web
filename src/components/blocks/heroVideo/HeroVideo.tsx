"use client";
import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";
import Image from "next/image";
import { useLoading } from "@/context/LoadingContext";

export const HeroVideo = () => {
  const { setIsLoading } = useLoading();

  return (
    <section className="relative w-full h-[90vh]">
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoading(false)}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 w-full flex-col items-center gap-6 text-center">
          <Image
            src="/img/umo_logo_652x883.png"
            alt="UMO logo"
            width={350}
            height={350}
            priority
            style={{ display: "block", margin: "0 auto" }}
          />
          <ButtonLink
            href="https://wa.me/34641467880"
            bgColor="bg-gradient-to-b from-[#F1DF7D] to-[#E19025]"
            hoverBgColor="hover:bg-none hover:bg-transparent"
            textColor="text-black"
            hoverTextColor="hover:text-white"
            borderColor="border border-[#F1DF7D] border-2"
            hoverBorderColor="hover:border-[#E19025] hover:border-2"
            target="_blank"
            eventData={{
              event: "contact_click",
              method: "whatsapp",
              location: "home",
            }}
          >
            Reservar →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
