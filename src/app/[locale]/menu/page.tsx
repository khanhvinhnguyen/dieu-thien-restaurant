"use client";
import "@/styles/menu.css";
import { Validate } from "@/utils/validate";
import { Tabs } from "antd";
import "antd/dist/reset.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const foodMenuTabs = [
  "appetizer",
  "roll",
  "mainDish",
  "hotPot",
  "ricePortion",
  "soup",
  "saltDish",
  "dessert",
].map((key) => ({ key, icon: `/icons/${key}.svg` }));

const drinkMenuTabs = [
  "tea",
  "juice",
  "coffee",
  "thaiTea",
  "softDrinks",
  "soda",
].map((key) => ({ key, icon: `/icons/${key}.svg` }));

const foodMenu = {
  appetizer: [
    {
      img: "/images/main-dishes/mainDishes_1.svg",
      name: "Món chính 1",
      desc: "Món chính 1",
      price: 55000,
      bestSeller: true,
    },
    {
      img: "/images/main-dishes/mainDishes_2.svg",
      name: "Món chính 2",
      desc: "Món chính 2",
      price: 55000,
      bestSeller: true,
    },
    {
      img: "/images/main-dishes/mainDishes_3.svg",
      name: "Món chính 3",
      desc: "Món chính 3",
      price: 55000,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_4.svg",
      name: "Món chính 4",
      desc: "Món chính 4",
      price: 55000,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_5.svg",
      name: "Món chính 5",
      desc: "Món chính 5",
      price: 55000,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_6.svg",
      name: "Món chính 6",
      desc: "Món chính 6",
      price: 55000,
      bestSeller: false,
    },
  ],
  roll: [
    {
      img: "/images/home-slider/specialfood_1.svg",
      name: "Món chính 1",
      desc: "Món chính 1",
      price: 60000,
      bestSeller: true,
    },
    {
      img: "/images/home-slider/specialfood_2.svg",
      name: "Món chính 1",
      desc: "Món chính 1",
      price: 60000,
      bestSeller: true,
    },
    {
      img: "/images/home-slider/specialfood_3.svg",
      name: "Món chính 1",
      desc: "Món chính 1",
      price: 60000,
      bestSeller: true,
    },
  ],
  mainDish: [{}],
  hotPot: [{}],
  ricePortion: [{}],
  soup: [{}],
  saltDish: [{}],
  dessert: [{}],
};

const drinkMenu = {
  tea: [
    {
      img: "/images/main-dishes/mainDishes_1.svg",
      name: "Món chính 1",
      desc: "Món chính 1",
      price: 55,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_2.svg",
      name: "Món chính 2",
      desc: "Món chính 2",
      price: 55,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_3.svg",
      name: "Món chính 3",
      desc: "Món chính 3",
      price: 55,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_4.svg",
      name: "Món chính 4",
      desc: "Món chính 4",
      price: 55,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_5.svg",
      name: "Món chính 5",
      desc: "Món chính 5",
      price: 55,
      bestSeller: false,
    },
    {
      img: "/images/main-dishes/mainDishes_6.svg",
      name: "Món chính 6",
      desc: "Món chính 6",
      price: 55,
      bestSeller: false,
    },
  ],
  juice: [{}],
  coffee: [{}],
  thaiTea: [{}],
  softDrinks: [{}],
  soda: [{}],
};

const Menu = () => {
  const t = useTranslations("menuPage");

  const [foodThumbsSwiper, setFoodThumbsSwiper] = useState<any>({});
  const [drinkThumbsSwiper, setDrinkThumbsSwiper] = useState<any>({});

  const renderMenuItems = (menu, tabs, thumbsSwiper, setThumbsSwiper) => {
    return Object.keys(menu).map((category, i) => ({
      icon: (
        <img src={tabs[i].icon} className="svg-icon" width={40} height={40} />
      ),
      label: t(`${category}`),
      key: String(i + 1),
      children: (
        <div className="menu-list">
          <h2>{t(`${category}`)}</h2>
          <div className="menu--info">
            <div className="menu--info__img">
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper || null }}
                modules={[FreeMode, Thumbs]}
                className="swiper--item-info"
              >
                {menu[category].map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="item-info">
                      <div className="item-info__img">
                        <Image
                          className="swiper--item-img"
                          src={item.img}
                          alt="food"
                          width={450}
                          height={350}
                        />
                        {item.bestSeller && (
                          <Image
                            className="item-favorite"
                            src="/images/bestSeller.svg"
                            alt="favorite"
                            width={65}
                            height={65}
                          />
                        )}
                      </div>
                      <div className="item-info__text">
                        <h2 id="menu-item--title">{item.name}</h2>
                        <p id="menu-item--desc">Thành phần: {item.desc}</p>
                        <p id="menu-item--price">
                          {Validate.unit(Number(item.price))}₫
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="swiper--list-item"
            >
              {menu[category].map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.img} height={83} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ),
    }));
  };

  const foodMenuItems = Object.keys(foodMenu).map((category, i) => ({
    icon: (
      <img
        src={foodMenuTabs[i].icon}
        className="svg-icon"
        width={40}
        height={40}
      />
    ),
    label: t(`${category}`),
    key: category,
    children: renderMenuItems(
      foodMenu,
      foodMenuTabs,
      foodThumbsSwiper[category],
      (swiper: any) => {
        setFoodThumbsSwiper((prev) => ({ ...prev, [category]: swiper }));
      }
    )[i].children,
  }));

  const drinkMenuItems = Object.keys(drinkMenu).map((category, i) => ({
    icon: (
      <img
        src={drinkMenuTabs[i].icon}
        className="svg-icon"
        width={40}
        height={40}
      />
    ),
    label: t(`${category}`),
    key: category,
    children: renderMenuItems(
      drinkMenu,
      drinkMenuTabs,
      drinkThumbsSwiper[category],
      (swiper) => {
        setDrinkThumbsSwiper((prev) => ({ ...prev, [category]: swiper }));
      }
    )[i].children,
  }));

  return (
    <div className="menu">
      <Image
        src="/images/menu_banner.svg"
        alt="menu"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="menu--title">
        <h1 id="menu--title">{t("food")}</h1>
      </div>
      <div className="menu--content">
        <Tabs tabPosition={"left"} type="card" items={foodMenuItems} />
      </div>
      <div className="menu--title">
        <h1 id="menu--title">{t("beverage")}</h1>
      </div>
      <div className="menu--content">
        <Tabs tabPosition={"left"} type="card" items={drinkMenuItems} />
      </div>
    </div>
  );
};

export default Menu;
