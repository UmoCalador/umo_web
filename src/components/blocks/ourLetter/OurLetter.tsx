import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";

export const OurLetter = () => {
  return (
    <section className="w-full py-24 bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Descubrí nuestra carta
        </h1>

        <p className="mt-4 text-white text-sm md:text-base">
          Explorá sabores únicos y experiencias culinarias diseñadas para cada
          ocasión.
        </p>

        <ButtonLink
          href="/carta"
          bgColor="bg-gradient-to-b from-[#F1DF7D] to-[#E19025]"
          hoverBgColor="hover:bg-none hover:bg-transparent"
          textColor="text-black"
          hoverTextColor="hover:text-white"
          borderColor="border border-[#F1DF7D] border-2"
          hoverBorderColor="hover:border-[#E19025] hover:border-2"
          target="_self"
        >
          Ver carta →
        </ButtonLink>
      </div>
    </section>
  );
};
