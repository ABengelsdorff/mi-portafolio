// src/lib/settings.ts
export const fallbackLng = 'es';
export const languages = [fallbackLng, 'pt'];

export function getOptions() {
  return {
    supportedLngs: languages,
    fallbackLng,
    defaultNS: 'common',
    ns: ['common'],
  };
}
