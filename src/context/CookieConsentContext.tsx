"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Consent = "accepted" | "rejected" | null;

type ContextType = {
  consent: Consent;
  accept: () => void;
  reject: () => void;
  isLoaded: boolean
};

const CookieContext = createContext<ContextType | null>(null);

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  const [consent, setConsent] = useState<Consent>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie-consent");

    if (saved === "accepted" || saved === "rejected") {
      setConsent(saved);
    }
    setIsLoaded(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setConsent("accepted");
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setConsent("rejected");
  };

  return (
    <CookieContext.Provider
      value={{
        consent,
        accept,
        reject,
        isLoaded
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieContext);

  if (!context) {
    throw new Error("Missing provider");
  }

  return context;
};
