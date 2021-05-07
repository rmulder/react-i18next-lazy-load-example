import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,

    interpolation: {
      escapeValue: false,
      /**
       * Add interpolation format method to customize the formatting
       */
      format: (value, format, lng) => {
        if (format === "uppercase") {
          return value.toUpperCase();
        }

        return value;
      }
    },
    backend: {
      loadPath: "/locales/{{ns}}/{{lng}}.json"
    }
  });
  