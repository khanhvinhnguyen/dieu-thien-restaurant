"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Tabs } from "antd";

import "@/styles/menu.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "antd/dist/reset.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const foodMenuTabs = [
  { key: "appetizer", icon: "/icons/appetizer.svg" },
  { key: "roll", icon: "/icons/roll.svg" },
  { key: "mainDishes", icon: "/icons/mainDishes.svg" },
  { key: "hotPot", icon: "/icons/hotPot.svg" },
  { key: "ricePortion", icon: "/icons/ricePortion.svg" },
  { key: "soup", icon: "/icons/soup.svg" },
  { key: "saltDish", icon: "/icons/saltDish.svg" },
  { key: "dessert", icon: "/icons/dessert.svg" },
];

const drinkMenuTabs = [
  { key: "tea", icon: "/icons/tea.svg" },
  { key: "juice", icon: "/icons/juice.svg" },
  { key: "coffee", icon: "/icons/coffee.svg" },
  { key: "thaiTea", icon: "/icons/thaiTea.svg" },
  { key: "softDrinks", icon: "/icons/coca.svg" },
  { key: "soda", icon: "/icons/soda.svg" },
];

const foodMenu = {
  appetizer: [
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
  roll: [{}],
  mainDishes: [{}],
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
  const [foodThumbsSwiper, setFoodThumbsSwiper] = useState(null);
  const [drinkThumbsSwiper, setDrinkThumbsSwiper] = useState(null);

  const foodMenuItems = Object.keys(foodMenu).map((category, i) => {
    const id = String(i + 1);
    return {
      icon: (
        <img
          src={foodMenuTabs[i].icon}
          className="svg-icon"
          width={40}
          height={40}
        />
      ),
      label: category,
      key: id,
      children: (
        <div className="menu-list">
          <h2>{category}</h2>
          {/* {foodMenu[category].map((item, index) => {
            return (
              <div className="menu__item" key={index}>
                <img
                  src={item.img}
                  alt="food"
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "70%" }}
                />
                <div className="menu__item__info"></div>
              </div>
            );
          })} */}
          <div className="menu--info">
            <div className="menu--info__img">
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: foodThumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="swiper--item-info"
              >
                {foodMenu[category].map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="item-info">
                        <Image
                          className="swiper--item-img"
                          src={item.img}
                          alt="food"
                          width={450}
                          height={350}
                        />

                        <div className="item-info__text">
                          <h2 id="menu-item--title">{item.name}</h2>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <Swiper
              onSwiper={setFoodThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="swiper--list-item"
            >
              {foodMenu[category].map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item.img} height={83} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ),
    };
  });

  const drinkMenuItems = Object.keys(drinkMenu).map((category, i) => {
    const id = String(i + 1);
    return {
      icon: (
        <img
          src={drinkMenuTabs[i].icon}
          className="svg-icon"
          width={40}
          height={40}
        />
      ),
      label: category,
      key: id,
      children: (
        <div className="menu-list">
          <h2>{category}</h2>
          {/* {drinkMenu[category].map((item, index) => {
            return (
              <div className="menu__item" key={index}>
                <img
                  src={item.img}
                  alt="drink"
                  width={0}
                  height={0}
                  style={{ width: "auto", height: "70%" }}
                />
                <div className="menu__item__info"></div>
              </div>
            );
          })} */}
          <div className="menu--info">
            <div className="menu--info__img">
              <Swiper
                loop={true}
                spaceBetween={10}
                thumbs={{ swiper: drinkThumbsSwiper }}
                modules={[FreeMode, Thumbs]}
                className="swiper--item-info"
              >
                {drinkMenu[category].map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="item-info">
                        <Image
                          className="swiper--item-img"
                          src={item.img}
                          alt="drink"
                          width={450}
                          height={350}
                        />

                        <div className="item-info__text">
                          <h2 id="menu-item--title">{item.name}</h2>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <Swiper
              onSwiper={setDrinkThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="swiper--list-item"
            >
              {drinkMenu[category].map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item.img} height={83} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ),
    };
  });

  const onChange = (key: string) => {};

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
        <h1>THỰC ĐƠN</h1>
      </div>

      <div className="menu--content">
        <Tabs
          onChange={onChange}
          tabPosition={"left"}
          type="card"
          items={foodMenuItems}
        />
      </div>

      <div className="menu--title">
        <h1>NƯỚC UỐNG</h1>
      </div>

      <div className="menu--content">
        <Tabs
          onChange={onChange}
          tabPosition={"left"}
          type="card"
          items={drinkMenuItems}
        />
      </div>
    </div>
  );
};

export default Menu;
