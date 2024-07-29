

export function Alerts(){
    return(
        <div className="flex fixed items-center bg-black w-full h-10 z-10 gap-5 justify-between px-20 text-xs md:disabled xs:disabled">

            <button className="flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 pr-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
                <span className="text-white ">                
                    ENCONTRE SEU COLCHÃO IDEAL
                </span>
            </button>

            <button className="flex items-center text-white">
            <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6" />  <circle cx="7" cy="10" r="1" /></svg>
                <span className="text-white">DURMA EM UM COLCHÃO DE HOTEL TODOS OS DIAS</span>
            </button>

            <button className="flex items-center text-white">  
                <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="7" cy="17" r="2" />  <circle cx="17" cy="17" r="2" />  <path d="M5 17h-2v-4m-1 -8h11v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />  <line x1="3" y1="9" x2="7" y2="9" /></svg>
                <span className="text-white">ENTREGA RÁPIDA, GRATUITA E ESPECIALIZADA</span>
            </button>

            <button className="flex items-center text-white">
                <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
                <span className="text-white">LOCALIZAR MINHA ENTREGA</span>
            </button>

        </div>
    )
}