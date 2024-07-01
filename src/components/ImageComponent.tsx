import Image from "next/image";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  styles?: React.CSSProperties;
}

const ImageComponent = (props: ImageProps) => {
  const { src, alt, width, height, styles } = props;

  return (
    <Image
      className="image--border-tlbr"
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={styles}
    />
  );
};

export default ImageComponent;
