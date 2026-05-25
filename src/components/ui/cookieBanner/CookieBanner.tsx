"use client";

import { useCookieConsent } from "@/context/CookieConsentContext";

type Props = {
  translations: any;
}

export const CookieBanner = ({ translations }: Props) => {
  const { consent, accept, reject, isLoaded } = useCookieConsent();
  
  if (!isLoaded) return null;

  if (consent !== null) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
        <p>{translations.cookies.text}</p>

        <div className="flex gap-2">
          <button onClick={reject} className="border px-4 py-2">
            {translations.cookies.reject}
          </button>

          <button onClick={accept} className="bg-white text-black px-4 py-2">
            {translations.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
};
