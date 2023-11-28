import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Menu from "@components/Menu";
import ExtraMenu from "@components/ExtraMenu"

import Inventory from "@components/Inventory"

import Banner from '@components/Banner'
import Text from '@components/Text';

import Modal from "@components/Modal";

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
            <div className="portrait-section w-1/5 flex flex-col align-center">
              {/* Self Portrait */}
              <img src="https://placehold.co/150x150"/>
              {/* Self Portrait Banner */ }
              <div className="name-holder -mt-6">
                <Banner 
                  textType="h4"
                  text="Adam Elsedoudi"
                  className="text-gold"
                />
                <Text 
                  type="p"
                  text="Full Stack Developer"
                />
              </div>
            </div>
            <div className="informational-section flex justify-center align-center  w-4/5">
              <div className="informational-section-internal w-4/5">
                <Banner 
                  textType="h2"
                  text="About Me"
                />
                <Text
                  type="p"
                  text="Hey! My name is Adam Elsedoudi
                  and I am a full stack web & app developer
                  with a focus on the positive and a
                  tendency to dive head deep into
                  up-and-coming technologies.
                  I was voted best sense of humor in
                  high school and I’ve been honing
                  my craft daily in hopes of winning
                  it again at the 30th reunion." 
                  className=""
                />
                <Banner 
                  textType="h2"
                  text="Inventory"
                />
                <Inventory />
                <Modal></Modal>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
