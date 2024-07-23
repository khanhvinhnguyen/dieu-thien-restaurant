"use client";
import "@/styles/menu.css";
import { Validate } from "@/utils/validate";
import { Tabs } from "antd";
import { useLocale, useTranslations } from "next-intl";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const fetchCategories = async () => {
  const res = await fetch("/data/category.json");
  const data = await res.json();
  return data;
};

const fetchMenu = async () => {
  const res = await fetch("/data/menu.json");
  const data = await res.json();
  return data;
};

const Menu = () => {
  const t = useTranslations("menuPage");
  const localActive = useLocale();

  const [foodThumbsSwiper, setFoodThumbsSwiper] = useState<any>({});
  const [drinkThumbsSwiper, setDrinkThumbsSwiper] = useState<any>({});
  const [categories, setCategories] = useState({ food: [], drink: [] });
  const [menu, setMenu] = useState({ food: {}, drink: {} });

  useEffect(() => {
    const loadData = async () => {
      const categoryData = await fetchCategories();
      setCategories(categoryData);

      const menuData = await fetchMenu();
      setMenu(menuData);
    };

    loadData();
  }, []);

  const renderMenuItems = (
    menu: { [x: string]: any[] },
    tabs: { icon: string | StaticImport }[],
    thumbsSwiper: { [x: string]: any },
    setThumbsSwiper: {
      (value: any): void;
      (value: any): void;
      (arg0: (prev: any) => any): void;
    }
  ) => {
    return Object.keys(menu).map((category, i) => ({
      icon: (
        <Image
          src={tabs[i].icon}
          alt={category}
          className="svg-icon"
          width={40}
          height={40}
        />
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
                thumbs={{ swiper: thumbsSwiper[category] || null }}
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
                        <h2 id="menu-item--title">{item.name[localActive]}</h2>
                        <p id="menu-item--desc">
                          {t("ingredient")}: {item.desc[localActive]}
                        </p>
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
              onSwiper={(swiper) =>
                setThumbsSwiper((prev: any) => ({
                  ...prev,
                  [category]: swiper,
                }))
              }
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
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={100}
                    height={83}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ),
    }));
  };

  const foodMenuItems = renderMenuItems(
    menu.food,
    categories.food,
    foodThumbsSwiper,
    setFoodThumbsSwiper
  );

  const drinkMenuItems = renderMenuItems(
    menu.drink,
    categories.drink,
    drinkThumbsSwiper,
    setDrinkThumbsSwiper
  );

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
