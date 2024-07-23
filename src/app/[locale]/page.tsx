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
import { Link } from "@/navigation";
import { motion } from 'framer-motion';
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
          onSwiper={() => { }}
          onSlideChange={() => { }}
        >
          {swiperData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
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
          <h1 id="title" className={dancingScript.className}>
            Diệu Thiện
          </h1>
          <p dangerouslySetInnerHTML={{ __html: t("homePage.slogan") }} />
          <Link className="menu-button" href="/menu">
            {t("general.viewMenu")}
          </Link>
        </div>
      </div>

      <div
        className="welcome section"

      >
        <SectionImgText
          title={t("homePage.summary")}
          text={t("homePage.introduce")}
          src={"/images/introduce.svg"}
          alt={"welcome"}
          width={0}
          height={0}
          stylesImg={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="special-menu">
        <motion.h1
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
          className="heading1 cream-text">{t("homePage.specialFood")}</motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <Swiper3D data={swiper3Ddata} />
        </motion.div>
      </div>

      <div className="order section__container column-layout">
        <motion.h1
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
          id="order">{t("general.order")}</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
          dangerouslySetInnerHTML={{ __html: t("homePage.orderDesc") }} />
        <div
          className="column-container"
        >
          {orderData.map((item, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 * index, delay: 1 * index, ease: 'easeOut' }}
                className="column" key={index}
              >
                <ImageComponent
                  src={item.image}
                  alt={item.alt}
                  width={0}
                  height={0}
                  styles={{ width: "100%", height: "auto" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
