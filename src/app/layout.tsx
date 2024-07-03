"use client";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SettingProvider } from "@/components/LanguageProvider";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={notoSerif.className}>
        <SettingProvider>
          <Header />
          {children}
          <Footer />
        </SettingProvider>
      </body>
    </html>
  );
}
