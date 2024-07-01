"use client";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useLanguageStore from "@/stores/languageStore";
import { initIntl } from "@/utils/intlHelper";
import { useEffect } from "react";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang } = useLanguageStore();

  useEffect(() => {
    initIntl(lang);
  }, [lang]);

  return (
    <html lang={lang}>
      <body className={notoSerif.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
