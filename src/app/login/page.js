"use client"

import { Alerts } from "../components/Alerts";
import { Duvidas } from "../components/Duvidas";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";

export default function (){
  return(
    <>
      <Header/>
      <Alerts/>
      <Login/>
      <Duvidas/>
      <Footer/>
    </>
  );
}