"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollTopValue =
        document.documentElement.scrollTop || document.body.scrollTop;

      console.log("scrollTopValue", scrollTopValue);
      setScrollTop(scrollTopValue);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header scrollTop={scrollTop} />
      {children}
    </>
  );
}
