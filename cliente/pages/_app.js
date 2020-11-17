import Head from "next/head";
import "../styles/index.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bienes House</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


        
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
