"use client"

import { Contact } from "../components/Contact";
import { Duvidas } from "../components/Duvidas";
import { Alerts } from "../components/Alerts";
import { Carousel } from "../components/Carousel";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Whatsicon } from "../components/Whatsapp";
import { About } from "../components/About";


export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>
      <Alerts/>
      <Carousel/>
      <About/>
      <FAQ/>
      <Contact/>
      <Duvidas/>
      <Footer/>
    </>
  );
}