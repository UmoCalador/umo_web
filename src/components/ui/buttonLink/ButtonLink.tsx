"use client";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";

type GTMEvent = {
  event: string;
  method?: string;
  location?: string;
  section?: string;
  slug?: string;
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  target?: "_blank" | "_self";
  eventData?: GTMEvent | null;
};

export const ButtonLink = ({
  href,
  children,
  bgColor = "bg-transparent",
  textColor = "text-black",
  borderColor = "border border-transparent border-2",
  hoverBgColor = "hover:bg-black",
  hoverTextColor = "",
  hoverBorderColor = "",
  target = "_self",
  eventData = null,
}: ButtonLinkProps) => {
  const baseStyles = `
    inline-flex items-center mt-6 px-10 py-3 rounded-3xl font-semibold transition text-sm
    ${bgColor} ${textColor} ${borderColor} ${hoverBgColor} ${hoverTextColor} ${hoverBorderColor}
  `;
  const handleClick = () => {
    if (eventData) {
      sendGTMEvent(eventData);
    }
  };

  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseStyles}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={baseStyles}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};
