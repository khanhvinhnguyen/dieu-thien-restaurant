"use client";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SettingProvider } from "@/components/LanguageProvider";
import { ConfigProvider, Typography } from "antd";
import "antd/dist/reset.css";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html>
//       <body className={notoSerif.className}>
//         <AntdRegistry>
//           <SettingProvider>
//             <Header />
//             {children}
//             <Footer />
//           </SettingProvider>
//         </AntdRegistry>
//       </body>
//     </html>
//   );
// }

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
