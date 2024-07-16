"use client";
import React from "react";
import { useTranslations } from "next-intl";
import LocalSwitcher from "./LocalSwitcher";
import { Link } from "../navigation";

const Header = () => {
  const t = useTranslations();
  return (
    <header>
      {/* Logo */}
      <div className="logo__wrapper">
        <a href="/">
          <img id="Logo" src="/images/logo.svg" alt="logo" />
        </a>
      </div>

      {/* Navigation */}
      <div
        className="header__nav"

      >
        <Link href="/">{t("general.home")}</Link>
        <Link href="/about">{t("general.aboutUs")}</Link>
        <Link href="/menu">{t("general.menu")}</Link>
        <Link href="/order">{t("general.order")}</Link>
        <Link href="/contact">{t("general.contact")}</Link>
      </div>

      {/* Language & Order */}
      <div className="header__language_order">
        {/* Language */}
        <LocalSwitcher />

        {/* Order */}
        <Link href="/order" className="header__button--order">
          {t("general.order")}
        </Link>
      </div>
    </header>
  );
};

export default Header;
