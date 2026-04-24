"use client";

import { useState } from "react";

export type Language = "es" | "en";

export const useLanguage = () => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window === "undefined") return "es";
    return (localStorage.getItem("lang") as Language) || "es";
  });

  const changeLanguage = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return {
    lang,
    changeLanguage,
  };
};