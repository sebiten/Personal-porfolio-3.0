import "@/styles/globals.css";
import Script from "next/script";
import { TranslateProvider } from "@/context/translateProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <TranslateProvider>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          
          `}
        </Script>

        <Component {...pageProps} />
      </TranslateProvider>
    </>
  );
}
