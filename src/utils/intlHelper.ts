'use client';
import intl from 'react-intl-universal';
import en from '../locales/en.json';
import vi from '../locales/vi.json';
import zh from '../locales/zh.json';

const locales = {
  en,
  vi,
  zh,
};

export const initIntl = async (lang: string) => {
  await intl.init({
    currentLocale: lang,
    locales,
  });
};
