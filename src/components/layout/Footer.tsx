"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp, FaPhone, FaMailBulk } from "react-icons/fa";
import { NavLinks } from "@/components/ui/navigation/NavLinks";
import { sendGTMEvent } from "@next/third-parties/google";
import Image from "next/image";
import { getDictionary } from "@/utils/getTranslation";
import { usePathname } from "next/navigation";

export const Footer = () => {
  const pathname = usePathname();

  const lang = pathname.split("/")[1] || "es";
  const translations = getDictionary(lang);

  const handleContactClick = (method: string) => {
    sendGTMEvent({ event: "contact_click", method, location: "footer" });
  };
  return (
    <footer className="w-full bg-black text-white mt-6">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center text-lg  gap-2">
          <NavLinks />
        </div>

        <div className="flex justify-center h-full">
          <h2 className="text-2xl font-bold">
            <Link href={`/${lang}`} className="hover:text-gray-300">
              <Image
                src="/img/logo-new-colors.png"
                alt="UMO logo"
                width={250}
                height={250}
                priority
                style={{ display: "block", margin: "0 auto" }}
              />
            </Link>
          </h2>
        </div>

        <div>
          <h2 className="pb-4 font-semibold text-lg text-center">
            {translations.footer.contact}
          </h2>
          <div className="flex gap-4 text-center pb-8 justify-center">
            <a
              href="https://www.instagram.com/umo.calador26"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              onClick={() => handleContactClick("instagram")}
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/34641467880"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              onClick={() => handleContactClick("whatsapp")}
            >
              <FaWhatsapp />
            </a>
            <a
              href="tel:+34871612605"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
              onClick={() => handleContactClick("phone")}
            >
              <FaPhone />
            </a>
            <a
              href="mailto:info@umocalador.es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 text-xl"
              onClick={() => handleContactClick("email")}
            >
              <FaMailBulk />
            </a>
          </div>
          <h2 className="pt-4 font-semibold text-lg text-center border-t-1">
            {translations.footer.location}
          </h2>
          <p className="text-sm text-center">
            <b>UMO FIRE STEAKHOUSE CALA D'OR</b> <br />
            Calle de Sa Fonteta, 11, 07660 Cala d'Or, Balearic Islands
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-t pt-6">
          {/* Columna izquierda */}
          <div className="text-sm text-center md:text-left font-semibold">
            © {new Date().getFullYear()} UMO FIRE & STEAKHOUSE
          </div>

          {/* Columna derecha */}
          <div
            className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-4 
        text-sm 
        text-center 
        md:text-right
      "
          >
            <Link
              href={`/${lang}/legal/aviso-legal`}
              className="hover:text-gray-300 font-semibold"
            >
              {translations.legal["aviso-legal"].title}
            </Link>
            <Link
              href={`/${lang}/legal/politica-de-privacidad`}
              className="hover:text-gray-300 font-semibold"
            >
              {translations.legal["politica-de-privacidad"].title}
            </Link>

            <Link
              href={`/${lang}/legal/politica-de-cookies`}
              className="hover:text-gray-300 font-semibold"
            >
              {translations.legal["politica-de-cookies"].title}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
