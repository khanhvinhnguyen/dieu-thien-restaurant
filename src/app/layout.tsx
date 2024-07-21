import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import "./globals.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Dieu Thien Restaurant",
    default: "Unique Vegetarian Flavors | Dieu Thien Restaurant",
  },
  description:
    "Experience unique and rich vegetarian dishes at our restaurant, blending traditional and modern flavors. Enjoy a peaceful atmosphere, attentive service, and a beautifully designed space for a memorable dining experience that delights both the taste buds and the soul.",
  openGraph: {
    title: "Unique Vegetarian Flavors | Dieu Thien Restaurant",
    description:
      "Experience unique and rich vegetarian dishes at our restaurant, blending traditional and modern flavors. Enjoy a peaceful atmosphere, attentive service, and a beautifully designed space for a memorable dining experience that delights both the taste buds and the soul.",
    url: "https://dieu-thien.vercel.app/",
    siteName: "Dieu Thien Restaurant",
    images: [
      {
        url: "https://lh3.ggpht.com/p/AF1QipPP-6pqrJZMGdEaHUGvNSE4HiXVt_q05T-3x3VG=s1024",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html>
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@100;200;300;400;500;600;700;800;900&display=swap"
      />
    </head>
    <body>
      <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
    </body>
  </html>
);

export default RootLayout;
