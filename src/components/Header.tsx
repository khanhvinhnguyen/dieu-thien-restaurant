"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import intl from "react-intl-universal";
import useLanguageStore from "@/stores/languageStore";
import { initIntl } from "@/utils/intlHelper";

const Header = () => {
  const { lang, setLang } = useLanguageStore();

  useEffect(() => {
    initIntl(lang);
  }, [lang]);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLang(event.target.value);
  };
  return (
    <header>
      {/* Logo */}
      <a href="/">
        <img id="Logo" src="/images/logo.svg" alt="logo" />
      </a>

      {/* Navigation */}
      <div
        className="header__nav"
        style={{
          display: "flex",
          gap: "24px",
          color: "#31363F",
          fontSize: "18px",
        }}
      >
        <a href="/">Trang chủ</a>
        <a href="/">Về chúng tôi</a>
        <a href="/">Thực đơn</a>
        <a href="/contact">Liên hệ</a>
      </div>

      {/* Language & Order */}
      <div className="header__language_order">
        {/* Language */}
        <div className="header__button--language">
          <Image
            src={
              lang === "vi"
                ? "/images/flags/Vietnam.svg"
                : lang === "en"
                ? "/images/flags/England.svg"
                : "/images/flags/China.svg"
            }
            height={24}
            width={32}
            alt="lang"
          />
          <div className="custom-select-wrapper">
            <select value={lang} onChange={handleLanguageChange}>
              <option value="vi">VN</option>
              <option value="en">EN</option>
              <option value="zh">CN</option>
            </select>
          </div>
        </div>

        {/* Order */}
        <a href="/order" className="header__button--order">
          {intl.get("nav.order")}
        </a>
      </div>
    </header>
  );
};

export default Header;
