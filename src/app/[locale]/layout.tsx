import ClientComponent from "@/components/ClientComponent";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

const notoSerif = Noto_Serif({ subsets: ["vietnamese"] });

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={notoSerif.className}>
        <NextIntlClientProvider messages={messages}>
          <ClientComponent>{children}</ClientComponent>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
