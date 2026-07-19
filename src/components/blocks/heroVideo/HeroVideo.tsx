"use client";

import Image from "next/image";
import { useLoading } from "@/context/LoadingContext";
import { ScrollIndicator } from "@/components/ui/scrolledIndicator";
import { ReservationButton } from "@/components/ui/reservationModal/ReservationButton";

type Props = {
  translations: any;
  videoSrc: string;
  showLogo: boolean;
  showText?: string;
};

export const HeroVideo = ({
  translations,
  videoSrc,
  showLogo,
  showText = "",
}: Props) => {
  const { setIsLoading } = useLoading();

  return (
    <section className="relative w-full h-[100vh]">
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoading(false)}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />
      {showText && (
        <div
          className="relative z-10 flex justify-center items-center h-full"
          data-aos="fade-zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-back"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-gold">
            {showText}
          </h1>
        </div>
      )}

      {showLogo && (
        <div
          className="relative z-10 flex items-center h-full"
          data-aos="fade-zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-back"
        >
          <div className="max-w-7xl mx-auto px-6 w-full flex-col items-center gap-6 text-center">
            <Image
              src="/img/new_logo.png"
              alt="UMO logo"
              width={400}
              height={400}
              priority
              style={{ display: "block", margin: "0 auto" }}
            />
            <h1 className="text-white text-2xl font-bold">
              {translations.home.hero.text}
            </h1>
            <ReservationButton
              className="
inline-flex
items-center
mt-6
px-10
py-3
rounded-3xl
font-semibold
transition
text-sm
bg-gradient-to-b
from-[#F1DF7D]
to-[#E19025]
text-black
border
border-[#F1DF7D]
border-2
hover:bg-none
hover:bg-transparent
hover:text-white
hover:border-[#E19025]
"
            >
              {translations.home.hero.text_button} →
            </ReservationButton>
          </div>
        </div>
      )}
      <ScrollIndicator />
    </section>
  );
};
