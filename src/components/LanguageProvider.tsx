"use client";
import React, { createContext, useState, useEffect } from "react";
import intl from "react-intl-universal";

export const SettingContext = createContext({
  language: "vi",
  changeLanguage: (lang: string) => {},
});

export const SettingProvider = ({ children }) => {
  const [language, setLanguage] = useState("vi");

  useEffect(() => {
    loadLocale(language);
  }, [language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const loadLocale = async (locale: string) => {
    let localeData;

    if (locale === "en") {
      localeData = await import("@/locales/en.json");
    } else if (locale === "vi") {
      localeData = await import("@/locales/vi.json");
    } else if (locale === "zh") {
      localeData = await import("@/locales/zh.json");
    }

    intl.init({
      currentLocale: locale,
      locales: {
        [locale]: localeData.default,
      },
    });
  };

  return (
    <SettingContext.Provider
      value={{
        language,
        changeLanguage,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
