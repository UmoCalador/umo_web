import Image from "next/image";

type Props = {
  translations: any;
}

export const Presentation = ({ translations }: Props) => {
  
  return (
    <section className="w-full py-20" >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div data-aos="fade-right" data-aos-offset="300">
            <h1 className="text-4xl md:text-6xl font-bold text-gold">{translations.home.presentation.title}</h1>

            <p className="mt-4 text-white leading-relaxed text-sm md:text-base">
              { translations.home.presentation.description }
            </p>
          </div>

          <div className="flex justify-center" data-aos="fade-left" data-aos-offset="300">
            <div className="relative aspect-square w-full sm:w-[70%] overflow-hidden">
              <Image
                src="/img/presentation.jpg"
                alt="Sobre nosotros"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
