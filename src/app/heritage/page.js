"use client"

import { Duvidas } from "../components/Duvidas";
import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Whatsicon } from "../components/Whatsapp";
import { HeritageItem } from "../components/Heritage-item";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>
      <Alerts/>
      <HeritageItem/>
      <Duvidas/>
      <Footer/>
    </>
  );
}