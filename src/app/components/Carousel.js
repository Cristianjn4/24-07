export function Carousel(){
    return(

        <section>

    {/* Desktop Carousel */}
        
        <div id="indicators-carousel" className="relative h-full z-0 pt-10 hidden lg:block md:block" data-carousel="static">
        {/* Carousel wrapper */}
        <div class="relative overflow-hidden sm:h-auto h-96">
            {/* Item 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                <video className="w-full " src="./banner-rotativo-3.mp4" type="video.mp4" autoPlay muted loop></video>            
            </div>
            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <video className="w-full" src="./banner-rotativo-2.mp4" type="video.mp4" autoPlay muted loop></video>            
            </div>
            {/* Item 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <video className="w-full" src="./banner-rotativo-1.mp4" type="video.mp4" autoPlay muted loop></video>            
            </div>
            
        </div>

        {/* Slider indicators */}
        <div class="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>

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





    {/* Mobile Carousel */}
        

<div id="default-carousel" class="relative z-0 w-full h-16 pt-11 mb-20 lg:hidden md:hidden" data-carousel="slide">
    {/* Carousel wrapper */}
    <div class="relative  h-56 overflow-hidden rounded-lg md:h-96">
         {/* Item 1 */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <video src="./banner-rotativo-3.mp4" type="video.mp4" autoPlay muted loop autobuffer playsinline  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Simmmons Bamboo"/>
        </div>
        {/* Item 2 */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <video src="./banner-rotativo-2.mp4" type="video.mp4" autoPlay muted loop autobuffer playsinline className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Troca solidária"/>
        </div>
        {/* Item 3 */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <video src="./banner-rotativo-1.mp4" type="video.mp4" autoPlay muted loop autobuffer playsinline className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Dia dos pais"/>
        </div>
        {/* Item 4 */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <video src="./banner-rotativo-3.mp4" type="video.mp4" autoPlay muted loop autobuffer playsinline className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Simmmons Bamboo"/>
        </div>
        {/* Item 5 */}
        <div class="hidden duration-1000 ease-in-out" data-carousel-item>
        <video src="./banner-rotativo-2.mp4" type="video.mp4" autoPlay muted loop autobuffer playsinline className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Simmmons Bamboo"/>
        </div>
    </div>
   
</div>


        </section>
    )
}