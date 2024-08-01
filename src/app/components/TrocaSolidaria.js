import Image from "next/image";

export function TrocaSolidaria(){
    return(
 
<section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-5 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-2  ltr:sm:text-left rtl:sm:text-right">
      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
        Conheça nossa campanha Troca Solidária
      </h3>

      <p className="hidden text-black pt-10 md:block">      
      Chegou a hora de trocar seu colchão, mas não sabe o que fazer com o antigo que ainda está em boas condições de uso? Temos a solução ideal para você! 
      Um colchão com o conforto e a qualidade que só a Simmons Casa Orner pode proporcionar. Na campanha Troca Solidária em parceria com a
      <a href="https://www.instagram.com/cidadevicentina/" target="blank" className="font-semibold underline" > @cidadevicentina </a>
      você ajuda o próximo doando seu colchão usado em boas condições e na compra de um novo você ganha <a className="font-semibold">10% em CASHBACK</a> 
      para compras de móveis e decorações na Casa Orner em Itatiba.
    </p>

      <div className="mt-4 md:mt-8">
        <a
          href="TROCA SOLIDARIA.pdf" target="blank"
          className="inline-block rounded-full bg-black px-10 py-3 text-xs font-medium text-white transition hover:bg-white hover:text-black border hover:border-black hover:font-medium focus:outline-none">
          📄 Consulte nosso regulamento
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="banner troca.png"
    className="w-auto object-cover"
  />
</section>
    )}