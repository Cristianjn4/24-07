"use client"

import { Alerts } from "../components/Alerts";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Whatsicon } from "../components/Whatsapp";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>
      <Alerts/>
      <Contact/>
      <Footer/>
    </>
  );
}