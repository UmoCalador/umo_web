"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

export const Analytics = () => {
  const { consent } = useCookieConsent();
  if (consent !== "accepted") {
    return null;
  }

  return (
    <>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
    </>
  );
};
