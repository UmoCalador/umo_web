"use client";

import { useEffect } from "react";
import AOS from "aos";

export const AosProvider = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return null;
};