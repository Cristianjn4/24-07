"use client"

import { Duvidas } from "../components/Duvidas";
import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Whatsicon } from "../components/Whatsapp";
import { EnergyItem } from "../components/Energy-item";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>
      <Alerts/>
      <EnergyItem/>
      <Duvidas/>
      <Footer/>
    </>
  );
}