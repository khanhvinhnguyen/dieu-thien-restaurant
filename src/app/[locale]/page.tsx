"use client";
import ImageComponent from "@/components/ImageComponent";
import SectionImgText from "@/components/SectionImgText";
import Swiper3D from "@/components/Swiper3D";
import { Dancing_Script } from "@next/font/google";
import { useTranslations } from "next-intl";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/styles/home.css";

const dancingScript = Dancing_Script({ subsets: ["latin"] });
const swiperData = [
  {
    image: "/images/home-slider/home_slider1.svg",
    alt: "home slider 1",
  },
  {
    image: "/images/home-slider/home_slider2.svg",
    alt: "home slider 2",
  },
  {
    image: "/images/home-slider/home_slider3.svg",
    alt: "home slider 3",
  },
];

const swiper3Ddata = [
  {
    image: "/images/home-slider/specialfood_1.svg",
    alt: "special food 1",
  },
  {
    image: "/images/home-slider/specialfood_2.svg",
    alt: "special food 2",
  },
  {
    image: "/images/home-slider/specialfood_3.svg",
    alt: "special food 3",
  },
  {
    image: "/images/home-slider/specialfood_4.svg",
    alt: "special food 4",
  },
  {
    image: "/images/home-slider/specialfood_5.svg",
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

export default function Home() {
  const t = useTranslations();

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
          <p dangerouslySetInnerHTML={{ __html: t("homePage.slogan") }} />
          <a className="menu-button" href="/menu">
            {t("general.viewMenu")}
          </a>
        </div>
      </div>

      <div className="welcome">
        <SectionImgText
          title={t("homePage.summary")}
          text={t("homePage.introduce")}
          src={"/images/introduce.svg"}
          alt={"welcome"}
          width={0}
          height={0}
          stylesImg={{ width: "38.5%", height: "auto" }}
        />
      </div>
      <div className="special-menu">
        <h1>{t("homePage.specialFood")}</h1>
        <Swiper3D data={swiper3Ddata} />
      </div>

      <div className="order">
        <h1 id="order">{t("general.order")}</h1>
        <p dangerouslySetInnerHTML={{ __html: t("homePage.orderDesc") }} />
        <div
          className="column-container"
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
