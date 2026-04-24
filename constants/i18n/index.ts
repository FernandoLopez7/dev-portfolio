import { es } from "./es";
import { en } from "./en";

export const languages = {
  es,
  en,
};

export type Lang = "es" | "en";

export const getDictionary = (lang: Lang) => {
  return languages[lang] || languages.es;
};