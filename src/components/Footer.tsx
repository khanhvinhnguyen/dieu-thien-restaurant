import React from "react";
import { useTranslations } from "next-intl";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlinePlace } from "react-icons/md";
import { Link } from "../navigation";
import "@/styles/footer.css";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer>
      <div className="column-container">
        <div className="column">
          <img id="Logo" src="/images/logo.svg" alt="logo" />
          <a href="https://maps.app.goo.gl/qy7BD4LF6tcTuQHi6">
            <MdOutlinePlace />8 DA1-2, Mỹ Phước, Bến Cát, Bình Dương
          </a>
          <p>
            <BsTelephone />
            085-677-9886
          </p>
          <a href="https://facebook.com/chaydieuthien">
            <FaFacebookSquare /> https://facebook.com/chaydieuthien
          </a>
        </div>

        <div className="column">
          <p id="directional">{t("general.directional")}</p>
          <Link href="/">{t("general.home")}</Link>
          <Link href="/about">{t("general.aboutUs")}</Link>
          <Link href="/menu">{t("general.menu")}</Link>
          <Link href="/order">{t("general.order")}</Link>
          <Link href="/contact">{t("general.contact")}</Link>
        </div>
        <div className="column"></div>
      </div>
      <p id="copyright">{t("general.copyright")}</p>
    </footer>
  );
};

export default Footer;
