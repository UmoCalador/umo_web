"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "@/components/ui/navigation/NavLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/ui/languageSwitcher/LanguageSwitcher ";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "es";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full text-white px-6 py-2 fixed top-0 z-50 transition-colors duration-300 ${scrolled || isOpen ? "bg-black" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3">
        <h1 className="text-xl font-bold justify-self-start font-cormorant text-[60px]" data-aos="fade-right" data-aos-delay="100">
          <Link href={`/${lang}`} className="hover:text-gray-300">
            <Image
              src="/img/umo_logo_text.png"
              alt="UMO logo"
              width={200}
              height={200}
              priority
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>
        </h1>

        <div className="hidden items-center md:flex gap-6 text-md justify-self-center" data-aos="fade-down" data-aos-delay="100">
          <NavLinks />
        </div>

        <div className="hidden items-center md:flex gap-6 text-md justify-self-end" data-aos="fade-left" data-aos-delay="100">
          <LanguageSwitcher />
        </div>
        <button
          className="md:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLinks />
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
};
