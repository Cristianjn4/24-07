"use client"

import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Lista } from "../components/ProductList";
import { Whatsicon } from "../components/Whatsapp";
import { NavProd } from "../components/NavProducts";
import { Promotion } from "../components/Promotion";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>   
      <Alerts/>
      <Promotion/>
      <Lista/>
      <Footer/>
    </>
  );
}