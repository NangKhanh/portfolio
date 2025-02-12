import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      {/* Prism.js CSS (Dark Mode + Light Mode) */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css"
        media="(prefers-color-scheme: light)"
      />

      {/* Prism.js Script */}
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
        async
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js"
        async
      ></script>
    </Head>
    <Component {...pageProps} />
  </>;
}
