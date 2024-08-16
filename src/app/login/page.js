"use client"

import { Alerts } from "../components/Alerts";
import { Duvidas } from "../components/Duvidas";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function (){
  return(
    <>
      <Header/>
      <Alerts/>
      <Duvidas/>
      <Footer/>
    </>
  );
}