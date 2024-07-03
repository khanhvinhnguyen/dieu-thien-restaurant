import React from "react";
import Image from "next/image";

interface SectionProps {
  title: string;
  text: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  stylesImg?: React.CSSProperties;
  stylesText?: React.CSSProperties;
  reverse?: boolean;
}

const SectionImgText = (props: SectionProps) => {
  const {
    title,
    text,
    src,
    alt,
    width,
    height,
    stylesImg,
    stylesText,
    reverse,
  } = props;

  return (
    <div className="section">
      <div
        className="section__content"
        style={{ flexDirection: reverse ? "row-reverse" : "row" }}
      >
        <div className="section__text" style={stylesText}>
          <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
          <p dangerouslySetInnerHTML={{ __html: text }}></p>
        </div>
        <Image
          className="image--border-tlbr"
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={stylesImg}
        />
      </div>
    </div>
  );
};

export default SectionImgText;
