import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          as="video"
          href="/black_global_Video (1).mp4"
          type="video/mp4"
        />
        <link rel="preload" as="video" href="/wavescom.mp4" type="video/mp4" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
