export function EvolutionItem() {
    return(
        <section class=" py-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 pt-28">
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
        <div class="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>

          <img class="w-full" src="Evolution.png" alt="" />
        </div>

        <div class="mt-6 sm:mt-8 lg:mt-0">
          <h1 className="text-3xl font-extrabold text-gray-900  dark:text-white">
            Colchão Simmons Evolution
          </h1>
          <div class="mt-4 sm:items-center sm:gap-4 sm:flex">
            <p
              class="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white"
            >
              Intermediário
            </p>

            <div class="flex items-center gap-2 mt-2 sm:mt-0">
              <div class="flex items-center gap-1">

                <p className="font-extrabold text-black">
                  1 2 3 4 5
                </p>
                <p className="font-extrabold text-gray-400 ">
                </p>
                
                
              </div>
              <p
                class="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
              > 
                (série - 5)
              </p>
      
            </div>
          </div>

          <div class="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
            <a
              href="https://api.whatsapp.com/send?phone=5511995379301&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20o%20colch%C3%A3o%20*Simmons%20Evolution.*"
              target="blank"
              title=""
              class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-green-500 hover:text-green-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              role="button"
            >
              <svg
                            className="w-5 h-5 -ms-2 me-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Entrar em contato pelo WhatsApp
            </a>

            <a
              href="https://www.portalsimmons.com.br/source/files/originals/CO_EVOLUTION-6SPAR_EPTQ43-552379.pdf"
              target="blank"
              title=""
              class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-white focus:outline-none bg-black rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-black hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              role="button"
            >
          
              {/*<svg className="w-4 h-4 -ms-2 me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">

              <path d="M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z"/></svg>
              */}
              Ver ficha técnica
            </a>

          </div>

          <div className="flex mt-6 gap-1">

            <a
                target="blank"
                title=""
                class="flex w-auto items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-black hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
      
                Solteiro
            </a>
            <a
                target="blank"
                title=""
                class="flex w-auto items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-black hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
      
                Casal
            </a>
            <a
                target="blank"
                title=""
                class="flex w-auto items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-black hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
      
                Queen
            </a>
            <a
                target="blank"
                title=""
                class="flex w-auto items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-500 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-black hover:text-black focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                role="button"
              >
      
                King
            </a>
          </div>

          <div className=" mt-6 gap-2 text-sm">
            <p className="font-light">
              Solteiro (88x188) - Casal (138x188) - Queen (158x198) - King (198x203)
            </p>
            <br></br>
            <a className="underlide font-semibold" href="ENTREGA.pdf" target="blank">
            Consulte a disponibilidade da entrega em até 12h. </a>
          </div>

          <hr class="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

          <p class="mb-6 text-gray-500">

          <div className="flex gap-10">
          <p className="pt-4">
          <img alt="" src="https://www.portalsimmons.com.br/source/files/c/3322/Icone_Latex-483949_80-80-0-0.jpg" title="" />
          </p>
          <p className="pt-4">
          <img alt="" src="https://www.portalsimmons.com.br/source/files/c/3343/Icone_Belgian_design-836187_80-80-0-0.jpg" title="" />
          </p>
          <p className="pt-4">
          <img alt="" src="https://www.portalsimmons.com.br/source/files/c/3320/Icone_ViscoDryGel-568644_80-80-0-0.jpg" />
          </p>
          <img alt="" src="" title="" />
          </div>
          <div className="flex text-justify text-xs font-light gap-10">
          <p>Látex</p> <p>Belgian Design</p> <p>Visco Dry Gel</p> 
          </div>
          <p>&nbsp;</p>

          <h4><strong>DETALHES DO PRODUTO:</strong></h4>

          <p>
          "Desperte para o Conforto extremo com o Colchão Simmons Evolution - Inovação e Bem-Estar em Cada Noite de Sono" <br/><br/>

          Com o Colchão Simmons Evolution, sua porta de entrada para uma experiência de sono revolucionária. Este colchão é mais do que um lugar para descansar; é um santuário de inovação e bem-estar, criado para elevar suas noites de sono a um novo patamar.

          Com uma combinação excepcional de tecnologia avançada e design ergonômico, o Simmons Evolution oferece suporte personalizado para cada curva do seu corpo. <br/><br/> 
          As molas Beautyrest proporcionam uma base sólida, enquanto as camadas de espuma de alta densidade oferecem um toque de maciez irresistível.

          Experimente o despertar para o conforto a cada noite. <br/><br/>

          O Colchão Simmons Evolution não apenas atende às suas necessidades de sono, mas as supera, criando um ambiente propício para noites revigorantes e dias cheios de vitalidade.

          Faça a escolha pela inovação e bem-estar. Descubra o que é possível com o Colchão Simmons Evolution, a resposta para suas noites de sono mais tranquilas e rejuvenescedoras.
          </p>
                <br/><br/>
          <h4><strong>DETALHES DO PRODUTO:</strong></h4>

          <p><img alt="One side" src="https://www.portalsimmons.com.br/source/files/c/139/One_side_330-100-0-0.jpg" title="One side" /></p>

          <p>O seu colch&atilde;o ONE SIDE foi desenvolvido para ser utilizado apenas de um lado. Gire-o 180&deg; conforme a primeira figura, n&atilde;o h&aacute; necessidade de virar o colch&atilde;o.</p>

          <p>&nbsp;</p>

          <p dir="ltr"><strong>CARACTER&Iacute;STICAS:</strong></p>

          <p dir="ltr">Altura: 43cm</p>

          <p dir="ltr">N&iacute;vel de conforto &rarr; Intermedi&aacute;rio</p>

          <p dir="ltr">Tecido da capa: Nobre malha com tratamento ARGENTUM&reg; &iacute;ons de prata que n&atilde;o permite a prolifera&ccedil;&atilde;o de &aacute;caros. (93% Poli&eacute;ster / 7% Viscose)</p>

          <p dir="ltr">Tecido da faixa lateral: Robusto tecido em malha Spartan com brilho dourado entre as tramas (100% Poliéster)</p>

          <p dir="ltr">Tecnologias &rarr; TLátex, Belgian Design, Visco Dry Gel, Double Beautyrest.</p>

          </p>
        </div>
      </div>
    </div>
  </section>
    )
}