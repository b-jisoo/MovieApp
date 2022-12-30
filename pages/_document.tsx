import { Html, Head, Main, NextScript } from "next/document";

export const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="pngwing.com.png" type="logo" />
      </Head>
      <body>
        <div id="_modal" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
