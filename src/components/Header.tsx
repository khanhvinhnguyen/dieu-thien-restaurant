"use client";
import "animate.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "../navigation";
import { LocalSwitcher } from ".";

type HeaderProps = {
  scrollTop?: number;
};

const Header = ({ scrollTop }: HeaderProps) => {
  const t = useTranslations();
  const [visible, setVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    handleScroll();
  }, [scrollTop]);

  const handleScroll = () => {
    const currentScrollPos = scrollTop!;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
    setPrevScrollPos(currentScrollPos);
    // Clear the timer if it exists
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    // Set a timer to show the header after 500ms when scrolling up
    if (prevScrollPos > currentScrollPos) {
      timerRef.current = window.setTimeout(() => {
        setVisible(true);
      }, 500);
    }
  };

  return (
    <header
      className={`animate__animated ${
        scrollTop! > 5 ? "bg-white" : "bg-transparent"
      } ${visible ? "animate__fadeInDown" : "animate__fadeOutUp"}`}
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Logo */}
      <a href="/">
        <Image id="Logo" src="/logo.svg" alt="logo" width={60} height={60} />
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
        <Link href="/">{t("general.home")}</Link>
        <Link href="/about">{t("general.aboutUs")}</Link>
        <Link href="/menu" prefetch={true}>
          {t("general.menu")}
        </Link>
        <Link href="/order" prefetch={true}>
          {t("general.order")}
        </Link>
        <Link href="/contact" prefetch={true}>
          {t("general.contact")}
        </Link>
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
