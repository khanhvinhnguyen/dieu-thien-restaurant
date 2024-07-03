'use client';
import { create } from 'zustand'

interface LanguageState {
  lang: string;
  setLang: (lang: string) => void;
}

const useLanguageStore = create<LanguageState>((set) => ({
  lang: typeof window !== 'undefined' ? localStorage.getItem('lang') || 'vi' : 'vi',
  setLang: (lang: string) => {
    localStorage.setItem('lang', lang);
    set({ lang });
  },
}));

export default useLanguageStore;
