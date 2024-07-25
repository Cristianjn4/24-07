"use client"

import { Duvidas } from "../components/Duvidas";
import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Whatsicon } from "../components/Whatsapp";
import { BothanicalItem } from "../components/Bothanical-item";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>
      <Alerts/>
      <BothanicalItem/>
      <Duvidas/>
      <Footer/>
    </>
  );
}