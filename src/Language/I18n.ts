import I18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as en from "./en.json";
import * as ar from "./ar.json";

I18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en", // Default language
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
});

export default I18n;
