"use client";
import Image from "next/image";
import React, { useContext } from "react";
import intl from "react-intl-universal";
import { SettingContext } from "./LanguageProvider";

const Header = () => {
  const { language, changeLanguage } = useContext(SettingContext);
  console.log("header", language);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    console.log("event: ", event.target.value);
    changeLanguage(event.target.value);
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
        <a href="/about">Về chúng tôi</a>
        <a href="/menu">Thực đơn</a>
        <a href="/contact">Liên hệ</a>
      </div>

      {/* Language & Order */}
      <div className="header__language_order">
        {/* Language */}
        {/* <div className="header__button--language">
          <Image
            src={
              language === "vi"
                ? "/images/flags/Vietnam.svg"
                : language === "en"
                ? "/images/flags/England.svg"
                : "/images/flags/China.svg"
            }
            height={24}
            width={32}
            alt="lang"
          />
          <div className="custom-select-wrapper">
            <select value={language} onChange={(e) => handleLanguageChange(e)}>
              <option value="vi">VN</option>
              <option value="en">EN</option>
              <option value="zh">CN</option>
            </select>
          </div>
        </div> */}

        {/* Order */}
        <a href="/order" className="header__button--order">
          Đặt bàn
        </a>
      </div>
    </header>
  );
};

export default Header;
