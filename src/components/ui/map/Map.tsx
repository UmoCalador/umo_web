import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";

export const Map = () => {
  return (
    <div className="w-full" data-aos="fade-up" data-aos-duration="500">
      <div className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d431.2238102620696!2d3.221613486923317!3d39.371416734665964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x129651786694dd7b%3A0x4ce649f79b577f2f!2sUMO%20FIRE%20%26%20STEAKHOUSE%20CALA%20D&#39;OR!5e1!3m2!1sen!2sar!4v1778096704157!5m2!1sen!2sar"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="text-center">
        <ButtonLink
          href="https://maps.app.goo.gl/twc3S37DtQomMRjw7"
          bgColor="bg-gradient-to-b from-[#F1DF7D] to-[#E19025]"
          hoverBgColor="hover:bg-none hover:bg-transparent"
          textColor="text-black"
          hoverTextColor="hover:text-white"
          borderColor="border border-[#F1DF7D] border-2"
          hoverBorderColor="hover:border-[#E19025] hover:border-2"
          target="_blank"
        >
          Abrir en Google Maps
        </ButtonLink>
      </div>
    </div>
  );
};
