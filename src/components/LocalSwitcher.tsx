"use client";
import Image from "next/image";
import React from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

const LocalSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="header__button--language">
      <Image
        src={
          localActive === "vi"
            ? "/images/flags/Vietnam.svg"
            : localActive === "en"
            ? "/images/flags/England.svg"
            : "/images/flags/China.svg"
        }
        height={20}
        width={30}
        alt="lang"
      />
      <div className="custom-select-wrapper">
        <select value={localActive} onChange={(e) => onSelectChange(e)}>
          <option value="vi">VI</option>
          <option value="en">EN</option>
          <option value="zh">CHI</option>
        </select>
      </div>
    </div>
  );
};

export default LocalSwitcher;
