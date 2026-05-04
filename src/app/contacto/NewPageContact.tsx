
"use client";
import { Map } from "@/components/blocks/map/Map";
import { FaInstagram, FaPhone, FaWhatsapp, FaMailBulk } from "react-icons/fa";
import { sendGTMEvent } from "@next/third-parties/google";

export default function NewPageContact() {
  const handleContactClick = (method: string) => {
    sendGTMEvent({ event: "contact_click", method, location: "contacto" });
  };

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 pt-28 pb-6 ">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold pb-2 text-gold text-center">
          Contacto
        </h1>
        <p className="text-sm md:text-base pb-5 text-white text-center">
          Podés encontrarnos o comunicarte con nosotros a través de los
          siguientes medios.
        </p>
      </header>
      <section className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pb-10">
        <address className="not-italic">
          <a
            href="https://wa.me/34641467880"
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
            <span>+34 641 46 78 80</span>
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
            <span>+34 871 612 605</span>
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
            <span>@umo.calador26</span>
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
            <span>info@umocalador.es</span>
          </a>
        </address>
      </section>
      <section>
        <Map />
      </section>
    </section>
  );
}
