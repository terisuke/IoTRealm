// Import all translations statically
import jaTranslations from './locales/ja.json';
import enTranslations from './locales/en.json';
import esTranslations from './locales/es.json';
import zhTranslations from './locales/zh.json';
import koTranslations from './locales/ko.json';
import type { Language } from './config';

// Export a map of all translations
export const translations: Record<Language, any> = {
  ja: jaTranslations,
  en: enTranslations,
  es: esTranslations,
  zh: zhTranslations,
  ko: koTranslations,
};

// Get translations for a specific language
export function getTranslations(language: Language) {
  return translations[language] || translations.ja;
}