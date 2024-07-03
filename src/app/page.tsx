"use client";
import Image from "next/image";
import { Dancing_Script } from "@next/font/google";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImageComponent from "@/components/ImageComponent";
import Swiper3D from "@/components/Swiper3D";
import intl from "react-intl-universal";
import SectionImgText from "@/components/SectionImgText";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

export default function Home() {
  const swiperData = [
    {
      image: "/images/home_slider1.svg",
      alt: "home slider 1",
    },
    {
      image: "/images/home_slider2.svg",
      alt: "home slider 2",
    },
    {
      image: "/images/home_slider3.svg",
      alt: "home slider 3",
    },
  ];

  const swiper3Ddata = [
    {
      image: "/images/specialfood_1.svg",
      alt: "special food 1",
    },
    {
      image: "/images/specialfood_2.svg",
      alt: "special food 2",
    },
    {
      image: "/images/specialfood_3.svg",
      alt: "special food 3",
    },
    {
      image: "/images/specialfood_4.svg",
      alt: "special food 4",
    },
    {
      image: "/images/specialfood_5.svg",
      alt: "special food 5",
    },
  ];

  const orderData = [
    {
      image: "/images/order1.svg",
      alt: "order 1",
    },
    {
      image: "/images/order2.svg",
      alt: "order 2",
    },
    {
      image: "/images/order3.svg",
      alt: "order 3",
    },
  ];

  return (
    <div className="main">
      <div className="slider">
        <Swiper
          className="home-slider-introduce"
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          onSwiper={() => {}}
          onSlideChange={() => {}}
        >
          {swiperData.map((item) => {
            return (
              <SwiperSlide>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="banner__text">
          <h4 id="title" className={dancingScript.className}>
            Diệu Thiện
          </h4>
          <p>
            Chọn ăn chay, <br /> Chọn cuộc sống an lành!
          </p>
          <a className="menu-button" href="/menu">
            Xem thực đơn
          </a>
        </div>
      </div>

      <div className="welcome">
        <SectionImgText
          title={"Diệu Thiện <br /> hơn cả một nhà hàng chay"}
          text={`Chào mừng quý khách đến với nhà hàng chay của chúng tôi - nơi kết
              hợp hương vị tinh tế và sự sáng tạo để mang đến trải nghiệm ẩm
              thực độc đáo và bổ ích. Tại đây, chúng tôi tự hào giới thiệu đến
              bạn những món ăn chay tinh tế từ những nguyên liệu tươi ngon nhất,
              được chế biến với tình yêu và tâm huyết. <br />
              <br />
              Hãy đến và khám phá thế giới ẩm thực chay tại nhà hàng của chúng
              tôi, nơi bạn sẽ được thưởng thức những món ăn độc đáo và phong
              phú, đồng thời tận hưởng không khí yên bình và thư giãn. Chúng tôi
              rất mong được đón tiếp và phục vụ bạn!`}
          src={"/images/introduce.svg"}
          alt={"welcome"}
          width={0}
          height={0}
          stylesImg={{ width: "38.5%", height: "auto" }}
        />
      </div>
      <div className="special-menu">
        <h1>Thực đơn đặc biệt</h1>
        <Swiper3D data={swiper3Ddata} />
      </div>

      <div className="order">
        <h1>Đặt bàn</h1>
        <p>
          Nhà hàng chúng tôi rất vinh hạnh được hỗ trợ quí khách in banner và
          chuẩn bị trang trí bàn ăn dành cho sự <br /> kiện tại quán như sinh
          nhật hay liên hoan. Hãy gọi đặt trước với chúng tôi để được phục vụ
          chu đáo nhất
        </p>
        <div
          className="three-column-container"
          style={{ padding: "0 83px", paddingTop: "44px", gap: "36px" }}
        >
          {orderData.map((item) => {
            return (
              <div className="column">
                <ImageComponent
                  src={item.image}
                  alt={item.alt}
                  width={0}
                  height={0}
                  styles={{ width: "100%", height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
