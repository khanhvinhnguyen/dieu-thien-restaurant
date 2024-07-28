"use client";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionImgText from "@/components/SectionImgText";
import "@/styles/about.css";

const feedbackData = [
  {
    url: "https://maps.app.goo.gl/DmV8JLcF5t6zEoGB8?g_st=ic",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjXPDrhKWMxqHClSagTYL3UwoyalYa8C1CfjmNedvyYdfjYD1Lyp=w72-h72-p-rp-mo-br100",
    userName: "Vy Nguyen",
    content:
      "Đồ ăn ngon, trang trí đẹp mắt, chỉn chu, không gian quán ấm cúng, thích hợp đi cùng gia đình. Sẽ quay lại lần sau🥰",
  },
  {
    url: "https://maps.app.goo.gl/mq2i9H4U5u2vQmZj7?g_st=ic",
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocK6bAwe3-TgoPhoEx9j6Vo-St0jZAMbS4K7y7vCg8779ePaN4M=w72-h72-p-rp-mo-ba4-br100",
    userName: "Lu Nguyen The",
    content: "Không gian nhẹ nhàng ấm cúng, nhân viên lịch sự, món ăn ngon",
  },
  {
    url: "https://maps.app.goo.gl/zDExVNewteCqruzd7?g_st=ic",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVNvahPrt06iGNLTzlvracteTTp7WZdo0CQ-fDAYQfhhTjhQj10Fg=w72-h72-p-rp-mo-br100",
    userName: "Toại Vũ",
    content:
      "Vị trí quán đẹp, đối diện công viên xanh mát. Món ăn ngon, trình bày đẹp, giá cả hợp lý.",
  },
];

const AboutUs = () => {
  const about = useTranslations("aboutUsPage");

  const aboutUsData = [
    {
      title: about("outRestaurant"),
      text: about("outRestaurantDesc"),
      src: ["/images/aboutUs_1.svg", "/images/aboutUs_2.svg"],
      alt: "aboutUs",
      reverse: false,
    },
    {
      title: about("cozySpace"),
      text: about("cozySpaceDesc"),
      src: "/images/introduce.svg",
      alt: "aboutUs",
      reverse: true,
    },
    {
      title: about("mission"),
      text: about("missionDesc"),
      src: "/images/introduce.svg",
      alt: "aboutUs",
      reverse: false,
    },
    ,
    {
      title: about("partner"),
      text: about("partnerDesc"),
      src: "/images/introduce.svg",
      alt: "aboutUs",
      reverse: true,
    },
  ];

  return (
    <div className="about-us">
      <div className="banner">
        <Image
          className="banner"
          src={"/images/aboutUs-banner.svg"}
          alt={"banner"}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
        <div className="banner__text">
          <p
            style={{ fontSize: "32px", textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: about("buddhistScripture") }}
          ></p>
        </div>
      </div>

      <div
        className="about-us__content"
        style={{ backgroundColor: `#255442`, color: `#fffec` }}
      >
        {aboutUsData.map(
          (item, idx) =>
            item && (
              <SectionImgText
                key={idx}
                title={item.title}
                text={item.text}
                src={item.src}
                alt={item.alt}
                reverse={item.reverse}
                width={0}
                height={0}
                stylesImg={{ width: "38.5%", height: "auto" }}
                stylesText={{ color: "#FFFFEC" }}
              />
            )
        )}
      </div>

      <div className="feedback">
        <h1 className="heading1 cream-text">{about("feedbackCustomer")}</h1>
        <p className="cream-text">{about("feedbackDesc")}</p>
        <div className="column-container">
          {feedbackData.map((item, index) => {
            return (
              <div className="feedback__content" key={index}>
                <a href={item.url}>
                  <div className="text--border-tlbr">
                    <Image
                      className="avatar"
                      src={item.avatar}
                      alt="avatar"
                      width={0}
                      height={0}
                      style={{ width: "70px", height: "70px" }}
                    />
                    <p className="content cream-text">{item.content}</p>
                    <p className="userName cream-text">{item.userName}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
