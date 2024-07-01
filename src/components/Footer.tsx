import React from "react";
import { MdOutlinePlace } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer three-column-container">
        <div className="column1">
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

        <div className="column2">
          <p>Điều hướng</p>

          <div className="footer_navigation">
            <a href="/">
              <p>Trang chủ</p>
            </a>
            <a href="/">
              <p>Về chúng tôi</p>
            </a>
            <a href="/">
              <p>Thực đơn</p>
            </a>
            <a href="/order">
              <p>Đặt bàn</p>
            </a>
            <a href="/contact">
              <p>Liên hệ</p>
            </a>
          </div>
        </div>
        <div className="column3"></div>
      </div>
      <p id="copyright" style={{ justifyContent: "center" }}>
        © Bản quyền thuộc về nhà hàng chay Diệu Thiện
      </p>
    </footer>
  );
};

export default Footer;
