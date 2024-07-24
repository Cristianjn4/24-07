import Search from "./Search";

export default function Header() {
    return(
        <header className="text-sm fixed item-center w-full z-10 pt-8 px-4 h-32 bg-gradient-to-b from-stone-800 to-transparent">
        <div className="w-full max-w-[1246] px-[20px] mx-auto ">
            <div className="flex items-center justify-between ">
                
                <div className="flex items-center gap-10 text-white">
                    <a href="/">
                    <img className="w-12" src="Slogo.png"></img>
                    </a>

                    <ul className="flex items-center gap-12  ">

                    <li>
                    <a href="/" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold ">Home</a>
                    </li>

                    <li>
                        <a href="/products" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold">Produtos</a>
                        <a/>
                    </li>

                    <li>
                        <a href="/contact" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold">Fale Conosco</a>
                    </li>
                    
                    <li>
                        <a href="/faq" className="flex items-center gap-3 rounded-b-sm hover:border-b-2 hover:focus:font-bold">FAQ</a>
                    </li>

                    <li>
                        <a href="/#mapsLocate" target="blank" className="flex items-center gap-3 w-full my-10 py-1 px-2 text-white bg-transparent border-2 border-white rounded-full hover:bg-white hover:text-black ">Chegue até nós</a>                            
                    </li>

                    </ul>
                </div>
                 

                <div className="flex items-center gap-3 pr-36">
                <Search>
                </Search>
                    <button className="pr-3">
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
    </header>
    )
}