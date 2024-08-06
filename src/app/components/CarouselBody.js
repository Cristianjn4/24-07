export function CarouselBody(){
        return(
            <div>   

            <div className="w-full h-auto text-black  bg-gradient-to-b from-neutral-300 to-white  align justify-center text-center py-11 gap-8">
                <p className="text-3xl px-10 lg:text-4xl font-bold align items-center text-center">
                Presente em mais de 100 países 🌍
                </p>
                <p className="hidden text-lg w-auto mx-10 pt-4 md:block">
                {/*Simmons é uma marca tradicionalmente reconhecida pela sua qualidade e tecnologia, atuando por mais de um século no mercado.
                São 150 anos de história no desenvolvimento dos melhores colchões, presente nas melhores redes de hotéis do mundo, e com lojas em mais de 100 países!  */}

                Simmons é conhecida pela qualidade e referência internacional de seus colchões sendo pioneira em muitas tecnologias. 
                <br></br>
                Nas lojas Simmons em Jundiaí e Itatiba você terá o melhor atendimento para escolher seu novo colchão Simmons
                <br></br>
                e ter as melhores noites de sono!
                </p>
            </div>

            <div id="indicators-carousel" className=" relative h-full z-0 hidden lg:block" data-carousel="static">
            {/* Carousel wrapper */}

            
            <div class="overflow-hidden relative md:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img className="w-full" src="banner-1.png" alt='carousel'/>
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img className="w-full" src="banner-2.png" alt='carousel'/>
                </div>
                
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className="w-full" src="banner-3.png" alt='carousel'/>
                </div>
                {/* Item 4 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className="w-full" src="banner-4.png" alt='carousel'/>
                </div>
                {/* Item 5 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className="w-full" src="banner-5.png" alt='carousel'/>
                </div>
                {/* Item 6 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <img className="w-full" src="banner-6.png" alt='carousel'/>
                </div>
            </div>
    
            {/* Slider indicators */}
            <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 6" data-carousel-slide-to="5"></button>
            </div>
            {/* Slider controls */}
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/10 group-hover:bg-white/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 dark:bg-gray-800/10 group-hover:bg-white/30 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
            </div>
            </div>

    
        )
}