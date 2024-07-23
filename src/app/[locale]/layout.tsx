import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Noto_Serif } from "next/font/google";
import "./globals.css";
import { ClientComponent } from "@/components";

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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
