import { Map } from "@/components/ui/map/Map";

type Props = {
  translations: any;
};

export const MapHome = ({ translations }: Props) => {
  return (
    <section >
      <h1 className="text-4xl md:text-7xl font-bold flex justify-center pb-10 text-white" data-aos="fade-up" data-aos-duration="500">
        {translations.home.map.title}
      </h1>
      <Map />
    </section>
  );
};
