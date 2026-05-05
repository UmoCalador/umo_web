"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "@/components/ui/navigation/NavLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const lang = pathname.split("/")[1] || "es";

  return (
    <nav className="w-full bg-black text-white p-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-xl font-bold">
          <Link href={`/${lang}`} className="hover:text-gray-300">
            <Image
              src="/img/logo_714x195.png"
              alt="UMO logo"
              width={150}
              height={150}
              priority
              style={{ display: "block", margin: "0 auto" }}
            />
          </Link>
        </h1>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="hidden md:flex gap-6 text-md">
          <NavLinks />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};
