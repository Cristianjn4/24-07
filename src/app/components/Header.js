import Search from "./Search";

export default function Header() {
    return(
        <header className="text-sm fixed item-center w-full pt-8 h-32 z-10">

        <div>
            <div className="hidden lg:block md:block bg-gradient-to-b from-stone-800 to-transparent">
            <div className="w-full max-w-[1246] px-[20px] mx-auto">
            <div className="flex items-center justify-between ">
                
                <div className="flex items-center gap-10 text-white">
                    <a href="/">
                    <img className="w-12" src="Slogo.png"></img>
                    </a>

                    <ul className="flex items-center gap-12">

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
                 
                <div className="hidden lg:block"> 
                <div className="flex items-center gap-3 pr-36 ">
                <Search>
                </Search>
                    <button className="pr-3 ">
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
            </div>

        {/* NAVBAR MOBILE */}

      <div className="lg:hidden md:hidden z-40">


      <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 pt-10" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <a href="\" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    
               <span class="ms-3">Home</span>
            </a>
         </li>
         <li>
            <a href="\products" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

               <span class="flex-1 ms-3 whitespace-nowrap">Produtos</span>
               <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </a>
         </li>
         <li>
            <a href="/faq" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          
               <span class="flex-1 ms-3 whitespace-nowrap">Faq</span>
               <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </a>
         </li>
         <li>
            <a href="/faq#contact" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span class="flex-1 ms-3 whitespace-nowrap">Fale Conosco</span>
            </a>
         </li>
         <li>
            <a href="https://maps.app.goo.gl/uWnhSWwpoMRuvjeF6" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">             
               <span class="flex-1 ms-3 whitespace-nowrap">Chegue até nós</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">             
               <span class="flex-1 ms-3 whitespace-nowrap">Econtre seu colchão ideal</span>
            </a>
         </li>
         <li>
            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">           
               <span class="flex-1 ms-3 whitespace-nowrap">Localizar minha entrega</span>
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