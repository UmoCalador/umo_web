import { MarkdownRenderer } from "@/components/ui/markdownRenderer/MarkdownRenderer";
import Image from "next/image";

type Props = {
  translations: any;
};

export const OurChef = ({ translations }: Props) => {
  return (
    <section className="w-full py-30 our_chef relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/100 to-transparent"></div>
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 items-center">
          <div className="hidden xl:flex justify-center">
            <div className="relative w-full max-w-xl min-[1440px]:max-w-2xl h-[700px] overflow-hidden">
              <Image
                src="/img/our_chef/our_chef.png"
                alt="Our Chef"
                fill
                sizes="(min-width: 1440px) 672px, (min-width: 1280px) 576px, 100vw"
                className="object-cover object-center"
                data-aos="fade-right"
                data-aos-offset="300"
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300">
            <h1 className="text-4xl md:text-5xl font-bold text-gold text-center xl:text-left">
              {translations.home.our_chef.name}
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-white text-center xl:text-left">
              {translations.home.our_chef.title}
            </h2>

            <div className="flex justify-center xl:hidden my-8">
              <div className="relative w-full max-w-md h-[400px] overflow-hidden">
                <Image
                  src="/img/our_chef/our_chef.png"
                  alt="Our Chef"
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="mt-4 text-white leading-relaxed text-sm md:text-base font-semibold">
              <MarkdownRenderer
                content={translations.home.our_chef.description}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
