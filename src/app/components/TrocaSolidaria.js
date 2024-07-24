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
      Vai comprar um novo colchão mas não sabe o que fazer com o antigo que ainda está em boas condições de uso?
      Temos a solução ideal para você, um colchão com o conforto e a qualidade que merece.
      Na campanha Troca Solidária em parceria com a <a href="https://www.instagram.com/cidadevicentina/" target="blank" className="font-semibold underline" > @cidadevicentina </a>
      você ajuda o próximo e tem direito a condições exclusivas comprando aqui na Simmons Casa Orner. 
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="Campanha Troca Solidária.pdf" target="blank"
          className="inline-block rounded-full bg-black px-10 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black border hover:border-black hover:font-medium focus:outline-none">
          📄 Consulte nosso regulamento
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src="banner troca.png"
    className="w-full h-[450px] object-cover"
  />
</section>
    )}