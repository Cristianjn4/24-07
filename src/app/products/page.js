"use client"

import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Lista } from "../components/ProductList";
import { Whatsicon } from "../components/Whatsapp";
import { NavProd } from "../components/NavProducts";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>   
      <Alerts/>
      <NavProd/>
      <Lista/> 
      <Footer/>
    </>
  );
}