"use client"

import { Alerts } from "./components/Alerts";
import { Carousel } from "./components/Carousel";
import { CarouselBody } from "./components/CarouselBody";
import { Categorias } from "./components/Categorias";
import { Depoimentos } from "./components/Depoimentos";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { VideoFull } from "./components/Video";
import { Whatsicon } from "./components/Whatsapp";
import { Destaque } from "./components/Destaque";
import { Lojas } from "./components/Lojas";
import { Hoteis } from "./components/Hoteis";
import { TrocaSolidaria } from "./components/TrocaSolidaria";
import {Duvidas} from "./components/Duvidas";
import {GaleriaHome} from "./components/Galeria-Home";
import Promotion from "./components/Promotion";

export default function Home() {
  return(
    <>
      <Whatsicon/>
      <Alerts/>
      <Header/>   
      <Carousel/>
      <Destaque/>
      <Promotion/>
      <Lojas/>
      <Categorias/>
      <CarouselBody/>
      <Hoteis/>
      <VideoFull/>
      <Depoimentos/>
      <TrocaSolidaria/>
      <GaleriaHome/>
      <Duvidas/>
      <Footer/>
    </>
  );
}
