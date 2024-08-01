import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./contact.module.css";
import PlaceIcon from "@mui/icons-material/Place";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
  const t = useTranslations();

  return (
    <div className={styles.contact}>
      <Image
        loading="eager"
        src={"/images/contact.png"}
        alt={"logo"}
        width={1024}
        height={700}
        style={{ width: "100%", height: "auto" }}
      />
      <div className={styles.contactInfo}>
        <h1 className="heading1" style={{ marginBottom: `4rem ` }}>
          {t("general.contactUs")}
        </h1>
        <div className={styles.row}>
          <a
            className={styles.column}
            href="https://maps.app.goo.gl/qy7BD4LF6tcTuQHi6"
          >
            <PlaceIcon sx={{ fontSize: 48 }} />
            <h5 className="heading3">{t("general.address")}</h5>
            <p>8 DA1-2, Mỹ Phước, Bến Cát, Bình Dương</p>
          </a>
          <div className={styles.column}>
            <a>
              <SmartphoneIcon sx={{ fontSize: 48 }} />
              <h5 className="heading3"> {t("general.phoneNumber")}</h5>
              <p>085-677-9886</p>
            </a>
          </div>
          <a href="mailto:dieuthien@gmail.com" className={styles.column}>
            <EmailIcon sx={{ fontSize: 48 }} />
            <h5 className="heading3">{t("general.email")}</h5>
            <p>dieuthien@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
