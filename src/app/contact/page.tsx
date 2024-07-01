import Image from "next/image";
import React from "react";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contact}>
      <Image
        src={"/images/contact.svg"}
        alt={"logo"}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
      <div className={styles.contactInfo}>
        <h1 className={styles.title}>Liên hệ với chúng tôi</h1>
        <div className={styles.row}>
          <a
            className={styles.column}
            href="https://maps.app.goo.gl/qy7BD4LF6tcTuQHi6"
          >
            <Image
              src={"/icons/place.svg"}
              alt="address"
              width={48}
              height={48}
            />
            <h5>Địa chỉ</h5>
            <p>8 DA1-2, Mỹ Phước, Bến Cát, Bình Dương</p>
          </a>
          <div className={styles.column}>
            <Image
              src={"/icons/phone.svg"}
              alt="phone"
              width={48}
              height={48}
            />
            <h5>Số điện thoại</h5>
            <p>085-677-9886</p>
          </div>
          <a href="mailto:dieuthien@gmail.com" className={styles.column}>
            <Image src={"/icons/note.svg"} alt="email" width={48} height={48} />
            <h5>Địa chỉ email</h5>
            <p>dieuthien@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
