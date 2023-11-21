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
            <div className="portrait-section w-1/5 flex flex-col justify-center align-center">
              {/* Self Portrait */}
              <img src="https://placehold.co/150x150"/>
              {/* Self Portrait Banner */ }
              <div className="name-holder -mt-6">
                <Banner 
                  textType="h4"
                  text="Adam Elsedoudi"
                  className="text-gold"
                />
              </div>
            </div>
            <div className="informational-section w-4/5">
              <Banner 
                textType="h2"
                text="About Me"
              />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
