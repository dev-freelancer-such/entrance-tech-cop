import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { appWithTranslation } from "next-i18next";

import { cn } from "@/utils/cn";

import Layout from "@/components/layout/main";

import "@/styles/globals.css";

const neue = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasDisplayThin.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayMedium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-neue",
});

const condensed = localFont({
  src: [
    {
      path: "../../public/fonts/BarlowSemiCondensed-Light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/BarlowSemiCondensed-SemiBold.ttf",
      weight: "600",
      style: "semi-bold",
    },
    {
      path: "../../public/fonts/BarlowSemiCondensed-Black.ttf",
      weight: "900",
      style: "black",
    },
  ],
  variable: "--font-condensed",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={cn(neue.className)}>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default appWithTranslation(App);
