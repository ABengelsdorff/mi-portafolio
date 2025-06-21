'use client';

import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings'; 

void i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) =>
      import(`../../public/locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: 'es',
  });

export default i18n;
