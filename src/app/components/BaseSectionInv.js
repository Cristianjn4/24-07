import Image from "next/image";

export function BaseSectionInv(){
    return(
 
<section className="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center">
<img
    alt=""
    src="https://i.imgur.com/Z8nUCWP.jpeg"
    className="w-full h-[450px] object-cover"
  />
  <div className="p-5 md:p-12 lg:px-16 lg:py-24">

    <div className="mx-5  ltr:sm:text-left rtl:sm:text-right">
      <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
      Conforto e Qualidade Simmons
      </h3>

      <p className="hidden text-black pt-10 md:block">
      Com 150 anos de experiência, a marca precursora das molas ensacadas utiliza tecnologias exclusivas para garantir noites de sono de qualidade, inovação e bem-estar.      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded-full bg-black px-10 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black border hover:border-black hover:font-medium focus:outline-none">
          Saiba Mais
        </a>
      </div>
    </div>
  </div>

  
</section>
    )}