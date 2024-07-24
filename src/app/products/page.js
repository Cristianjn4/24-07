"use client"

import { Alerts } from "../components/Alerts";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Lista } from "../components/ProductList";
import { Whatsicon } from "../components/Whatsapp";

export default function (){
  return(
    <>
      <Whatsicon/>
      <Header/>   
      <Alerts/>
      <div className="bg-white gap-y-3 pt-20">
      <Lista/> 
      </div>
      <Footer/>
    </>
  );
}