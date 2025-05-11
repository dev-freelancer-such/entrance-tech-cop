import React from "react";
import Head from "next/head";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

interface PropInterface {
  children: React.ReactNode;
  description: string | "";
  title: string | "";
  keywords: string | "";
  urlImage: string | "";
  url: string | "";
  type?: string;
  urlLogo: string | "";
  urlImages: string[] | "";
  structData?: Record<string, any>;
}

function Layout(props: PropInterface) {
  const { children, description, title, type, keywords, urlImage, url } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Google / Search Engine Tags */}
        <meta itemProp="name" content={title} />
        <meta itemProp="description" content={description} />
        <meta itemProp="image" content={urlImage} />

        {/*Facebook Meta Tags  */}
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type || "website"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={urlImage} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="card_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={urlImage} />
        <meta
          name="google-site-verification"
          content="kNA2pwBzc-b6oKAjv6N93pJCyf4GfLs_Q5K-Nbh72nw"
        />
      </Head>

      <div className="h-screen w-full overflow-auto">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
