import { Html, Head, Main, NextScript } from "next/document";

export const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          href="https://w7.pngwing.com/pngs/805/202/png-transparent-cinema-art-film-cinema-logo-photography-wikimedia-commons-film.png"
          type="logo"
        />
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
