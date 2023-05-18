import { Html, Head, Main, NextScript } from "next/document";
import { App_Name } from "../config";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <title>{App_Name}</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
