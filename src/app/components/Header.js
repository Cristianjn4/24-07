import Search from "./Search";

export default function Header() {
    return(
        <header className="text-sm fixed item-center w-full z-10 pt-8 px-4 h-32 bg-gradient-to-b from-stone-800 to-transparent">

        <div>
            <div className="">
            <div className="w-full max-w-[1246] px-[20px] mx-auto">
            <div className="flex items-center justify-between ">
                
                <div className="flex items-center gap-10 text-white">
                    <a href="/">
                    <img className="w-12 visible md:invisible" src="Slogo.png"></img>
                    </a>

                    <ul className="flex items-center gap-12 visible md:invisible sm:invisible">

                    <li>
                    <a href="/" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold ">Home</a>
                    </li>

                    <li>
                        <a href="/products" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold">Produtos</a>
                        <a/>
                    </li>

                    <li>
                        <a href="/faq" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold">FAQ</a>
                    </li>
                    
                    <li>
                        <a href="/faq#contact" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold">Fale Conosco</a>
                    </li>

                    <li>
                        <a href="/#mapsLocate" target="blank" className="flex items-center gap-3 w-full my-10 py-1 px-2 text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black ">Chegue até nós</a>                            
                    </li>

                    </ul>
                </div>
                 

                <div className="flex items-center gap-3 pr-36 ">
                <Search>
                </Search>
                    <button className="pr-3 visible md:invisible sm:hidden">
                    <span>
                    <svg className="h-5 w-5 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
                    </span>
                    </button>

                    <button>
                    <span>
                    <svg className="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />  <line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    </span>
                    </button>
 
                </div>
                

            </div>
        </div>
            </div>

        

        

        <div className="lg:hidden z-30">
        <button data-drawer-target="separator-sidebar" data-drawer-toggle="separator-sidebar" aria-controls="separator-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="separator-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         
         <li>
            <a href="/" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="/products" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Produtos</span>
            </a>
         </li>
         <li>
            <a href="/contact" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Fale Conosco</span>
            </a>
         </li>
         <li>
            <a href="/faq" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">FAQ</span>
            </a>
         </li>
         <li>
            <a href="/#mapsLocate" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Chegue até nós</span>
            </a>
         </li>
         
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
               <span class="ms-3">Encontre seu colchão ideak</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
               <span class="ms-3">Entrega rápida em até 12h (consulte)</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
               <span class="ms-3">Localizar minha entrega</span>
            </a>
         </li>
        
      </ul>
   </div>
</aside>

        </div>



        </div> 
            </header>


    )
}