
"use client";
import { Map } from "@/components/blocks/map/Map";
import { FaInstagram, FaPhone, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";

type Props = {
  translations: any;
}

export default function NewPageContact({ translations }: Props) {
  const handleContactClick = (method: string) => {
    sendGTMEvent({ event: "contact_click", method, location: "contacto" });
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 pt-28 pb-6 ">
      <header>
        <h1 className="text-4xl md:text-7xl font-bold pb-2 text-gold text-center" data-aos="fade-up" data-aos-duration="500">
          {translations.contact.title}
        </h1>
        <p className="text-sm md:text-base pb-5 text-white text-center font-semibold" data-aos="fade-up" data-aos-duration="750">
          {translations.contact.description}
        </p>
      </header>
      <section className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-10" data-aos="fade-up" data-aos-duration="1000">
        <address className="not-italic">
          <a
            href="https://wa.me/34614530068"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center
              bg-gray-800 text-white
              rounded-xl px-6 py-12
              transition hover:bg-gray-700
              h-full gap-5"
            onClick={() => handleContactClick("whatsapp")}
          >
            <FaWhatsapp className="text-4xl" />
            <span className="font-semibold">+34 614 53 00 68</span>
          </a> 
        </address>
        <address className="not-italic">
          <a
            href="tel:+34871612605"
            className="flex flex-col items-center justify-center
              bg-gray-800 text-white
              rounded-xl px-6 py-12
              transition hover:bg-gray-700
              h-full gap-5"
            onClick={() => handleContactClick("phone")}

          >
            <FaPhone className="text-4xl" />
            <span className="font-semibold">+34 871 612 605</span>
          </a>
        </address>
        <address className="not-italic">
          <a
            href="https://www.instagram.com/umo.calador26"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center
              bg-gray-800 text-white
              rounded-xl px-6 py-12
              transition hover:bg-gray-700
              h-full gap-5"
            onClick={() => handleContactClick("instagram")}
          >
            <FaInstagram className="text-4xl" />
            <span className="font-semibold">@umo.calador26</span>
          </a>
        </address>
        <address className="not-italic">
          <a
            href="mailto:info@umocalador.es"
            target="_blank"
            className="flex flex-col items-center justify-center
              bg-gray-800 text-white
              rounded-xl px-6 py-12
              transition hover:bg-gray-700
              h-full gap-5"
            onClick={() => handleContactClick("email")}
          >
            <FaMailBulk className="text-4xl" />
            <span className="font-semibold">info@umocalador.es</span>
          </a>
        </address>
      </section>
      <section>
        <Map />
      </section>
    </section>
  );
}
