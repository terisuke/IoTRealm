import type { Language } from './config';
import { defaultLanguage } from './config';

// Re-export Language type for use in components
export type { Language };

// Translation data type
export type TranslationData = Record<string, any>;

// Cache for loaded translations
const translationCache = new Map<string, TranslationData>();

// Import all translation files statically
import jaTranslations from './locales/ja.json';
import enTranslations from './locales/en.json';
import zhTranslations from './locales/zh.json';
import esTranslations from './locales/es.json';

// Translation data mapping
const translationData: Record<Language, TranslationData> = {
  ja: jaTranslations,
  en: enTranslations,
  zh: zhTranslations,
  es: esTranslations
};

// Load translation data for a specific language
export async function loadTranslations(language: Language): Promise<TranslationData> {
  if (translationCache.has(language)) {
    return translationCache.get(language)!;
  }

  try {
    const translations = translationData[language];
    if (!translations) {
      throw new Error(`No translations found for language: ${language}`);
    }
    translationCache.set(language, translations);
    return translations;
  } catch (error) {
    console.warn(`Failed to load translations for ${language}, falling back to ${defaultLanguage}:`, error);
    const fallbackTranslations = translationData[defaultLanguage];
    translationCache.set(language, fallbackTranslations);
    return fallbackTranslations;
  }
}

// Get nested translation value using dot notation
export function getTranslationValue(translations: TranslationData, key: string): string {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}

// Create translation function for a specific language
export function createTranslator(language: Language) {
  return async (key: string): Promise<string> => {
    const translations = await loadTranslations(language);
    return getTranslationValue(translations, key);
  };
}

// Get language from URL path
export function getLanguageFromPath(pathname: string): Language {
  if (!pathname) {
    return defaultLanguage;
  }
  
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && ['ja', 'en', 'zh', 'es'].includes(firstSegment)) {
    return firstSegment as Language;
  }
  
  return defaultLanguage;
}

// Create localized path
export function createLocalizedPath(path: string, language: Language): string {
  if (!path) {
    return language === defaultLanguage ? '/' : `/${language}`;
  }
  
  // Remove existing language prefix first
  const cleanPath = removeLanguagePrefix(path);
  
  if (language === defaultLanguage) {
    return cleanPath;
  }
  
  // Add new language prefix
  const pathWithoutLeadingSlash = cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath;
  return `/${language}${pathWithoutLeadingSlash ? `/${pathWithoutLeadingSlash}` : ''}`;
}

// Remove language prefix from path
export function removeLanguagePrefix(path: string): string {
  if (!path) {
    return '/';
  }
  
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && ['ja', 'en', 'zh', 'es'].includes(firstSegment)) {
    const remainingPath = segments.slice(1).join('/');
    return remainingPath ? `/${remainingPath}` : '/';
  }
  
  return path;
}
