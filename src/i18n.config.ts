import i18n from 'i18next';
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi)
  .init({
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,
    backend: {
      loadPath: "/locales/{{ns}}/{{lng}}.json" // The URL to download the locales
    },

    interpolation: {
      escapeValue: false,
      /**
       * Add interpolation format method to customize the formatting
       */
      format: (value, format, lng) => {
        if (format === 'uppercase') {
          return value.toUpperCase();
        }

        return value;
      }
    }
  });
  