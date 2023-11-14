import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Menu from "@components/Menu";
import ExtraMenu from "@components/ExtraMenu"

import Banner from '@components/Banner'
import Text from '@components/Text';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Creating is Fun by Adam Elsedoudi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row">
        <div className="sidebar">
          <Menu
            
          />
          <ExtraMenu />
        </div>
        <div className="main-section">
          <div className="main-internal flex flex-row">
            <div className="portrait-section flex flex-col justify-center align-center">
              {/* Self Portrait */}
              <img src="https://placehold.co/150x150"/>
              {/* Self Portrait Banner */ }
              <Text 
                type="h3"
                text="Adam Elsedoudi"
              />
            </div>
            <div className="informational-section">
              <Banner 
                textType="h1"
                text="About Me"
              />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
