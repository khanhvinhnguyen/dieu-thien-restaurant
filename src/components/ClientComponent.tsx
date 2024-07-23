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

      setScrollTop(scrollTopValue);
    };


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
