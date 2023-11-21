import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Menu from "@components/Menu";

import Text from '@components/Text';
import Banner from '@components/Banner';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Creating is Fun by Adam Elsedoudi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="">
        <Banner 
          textType="h1"
          text="Adam Elsedoudi"
        />
        </header>
        <Menu
          
        />
      </main>

    </div>
  );
}
