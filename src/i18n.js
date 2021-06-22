import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      /* translation file path */
      loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
      // loadPath: 'https://textsi18n-ist.apps.stg.azr-cc-pcf.cloud.bns/country/{{lng}}',
      allowMultiLoading: true,
      // crossDomain      : false
    },
    lng: 'es-CO',
    fallbackLng: 'es-CO',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
