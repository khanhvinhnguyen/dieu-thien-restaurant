"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SettingProvider } from "@/components/LanguageProvider";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "antd/dist/reset.css";
import { Noto_Serif } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html>
    <body className={notoSerif.className}>
      <AntdRegistry>
        <SettingProvider>
          <Header />
          {children}
          <Footer />
        </SettingProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
