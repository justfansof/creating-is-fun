import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

import Text from '@components/Text';


export default function Home() {
  return (
    <div className="container bg-black">
      <Head>
        <title>Creating is Fun by Adam Elsedoudi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="bg-blue-dark">
          <Text
            type="h1"
            text="Adam Elsedoudi"
            className=""
          />
        </header>
        <Footer />
      </main>

    </div>
  );
}
