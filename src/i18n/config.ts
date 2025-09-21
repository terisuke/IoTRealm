export const languages = {
  ja: '日本語',
  en: 'English',
  zh: '中文',
  es: 'Español'
} as const;

export const defaultLanguage = 'ja' as const;

export type Language = keyof typeof languages;
