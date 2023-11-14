import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Menu from "@components/Menu";
import ExtraMenu from "@components/ExtraMenu"

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
            <div className="portrait-section flex-column">
              {/* Self Portrait */}
              <img src="https://placehold.co/300x300"/>
              {/* Self Portrait Banner */ }
              <Text 
                type="h3"
                text="Adam Elsedoudi"
              />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
