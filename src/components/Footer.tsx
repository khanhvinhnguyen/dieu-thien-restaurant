import React from "react";
import { useTranslations } from "next-intl";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { MdLocalPhone, MdPlace } from "react-icons/md";
import { Link } from "../navigation";
import "@/styles/footer.css";

const Footer = () => {
  const t = useTranslations();

  return (
    <footer>
      <div className="column-container section__container">
        <div className="column">
          <img id="Logo" src="/images/logo.svg" alt="logo" />
          <a href="https://maps.app.goo.gl/qy7BD4LF6tcTuQHi6">
            <MdPlace />
            <p> 8 DA1-2, Mỹ Phước, Bến Cát, Bình Dương</p>
          </a>
          <a>
            <MdLocalPhone />
            <p>085-677-9886</p>
          </a>
          <a href="https://facebook.com/chaydieuthien">
            <FaFacebookSquare />
            <p> https://facebook.com/chaydieuthien</p>
          </a>
        </div>

        <div className="column">
          <p className="body-md footer-nav-title" id="directional">{t("general.directional")}</p>

          <p> <Link href="/">{t("general.home")}</Link></p>
          <p> <Link href="/about">{t("general.aboutUs")}</Link></p>
          <p> <Link href="/menu">{t("general.menu")}</Link></p>
          <p> <Link href="/order">{t("general.order")}</Link></p>
          <p> <Link href="/contact">{t("general.contact")}</Link></p>
        </div>
        <div className="column">
          <div className="video-responsive">
            {/* <iframe
              width="410" height="240"

              src="https://www.youtube.com/embed/9P_sQw9BBuE?si=LluPdhYlbQEfShgL"
              title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen

            ></iframe> */}
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100090392966682%2Fvideos%2F1384123925702576%2F&show_text=false&width=560&t=0"
              width="410" height="240" scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>

          </div>

        </div>
      </div>
      <p id="copyright" className="cream-text">{t("general.copyright")}</p>
    </footer >
  );
};

export default Footer;
