import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Main from "@/components/modules/home/Main";

export default function Home() {
  return <Main />;
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["common", "home"])),
      title: "Home | NFT Marketplace",
      description: "Home page",
      keywords: "home, page",
    },
  };
};
