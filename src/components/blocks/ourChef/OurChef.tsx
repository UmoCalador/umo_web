import { MarkdownRenderer } from "@/components/ui/markdownRenderer/MarkdownRenderer";
import Image from "next/image";

type Props = {
  translations: any;
};

export const OurChef = ({ translations }: Props) => {
  return (
    <section className="w-full py-30 our_chef relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/100 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="hidden md:flex">
            <div className="relative w-full max-w-md h-[500px] overflow-hidden">
              <Image
                src="/img/presentation.jpeg"
                alt="Our Chef"
                fill
                className="object-cover object-center" data-aos="fade-right" data-aos-offset="300"
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-offset="300">
            <h1 className="text-4xl md:text-7xl font-bold text-gold">
              {translations.home.our_chef.title}
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold text-white">
              {translations.home.our_chef.name}
            </h2>

            <div className="flex justify-center md:hidden my-8">
              <div className="relative w-full max-w-md h-[400px] overflow-hidden">
                <Image
                  src="/img/presentation.jpeg"
                  alt="Our Chef"
                  fill
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
