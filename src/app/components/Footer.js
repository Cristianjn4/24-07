export default function Footer() {
    return(
        <footer className="bg-gradient-to-r from-neutral-800 to-neutral-950 bottom-0">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <img src="logoW.png" className="w-40 h-auto" ></img>
                </div>
                <div className=" grid-cols-3 gap-10 hidden lg:grid">
                    <div className="">
                
                        <h2 className="flex mb-6 text-sm font-semibold text-white uppercase">
                            <svg class="h-5 w-5 pr-1 text-white flex"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            SOBRE NÓS
                            </h2>
                        <   ul className="text-white font-light">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">FAQ</a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">Institucional</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className=" flex mb-6 text-sm font-semibold text-white uppercase">
                        <svg class="w-5 text-white-100 pr-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
                            ENDEREÇOS
                            </h2>

                        <ul className="text-white font-light ">
                            <li className="mb-4">
                            
                            <a href="https://www.google.com/maps/place/R.+do+Retiro,+1800+-+Jardim+Paris,+Jundia%C3%AD+-+SP,+13209-201/@-23.1806883,-46.9055003,17z/data=!4m6!3m5!1s0x94cf25d55fe1f14b:0xba862ef8910a9809!8m2!3d-23.1806933!4d-46.9029254!16s%2Fg%2F11c5mltkk5?entry=ttuttps://github.com/themesberg/flowbite" 
                            target="blank" className="hover:underline">Loja Simmons em Jundiaí-SP <br></br> Rua do Retiro, 1800</a>
                            </li>

                            <li>
                                <a href="https://www.google.com/maps/place/Casa+Orner/@-23.0122041,-46.8429668,17z/data=!3m1!4b1!4m6!3m5!1s0x94cf276e1d135f83:0x4a25929258ead495!8m2!3d-23.0122041!4d-46.8429668!16s%2Fg%2F11h197jndx?entry=ttu" 
                                target="blank" className="hover:underline">Loja Simmons em Itatiba-SP <br></br> Rua Luiz Scavone, 511</a>
                            </li>
                        </ul>

                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase flex">
                            <svg class=" w-5 text-white-100 pr-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            CONTATO 
                        </h2>

                        <ul className="text-white font-light">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">casaorner.digital@gmail.com</a>
                            </li>
                            <li>
                                <a href="tel:(55) 11 4522-6982" target="blank" className="hover:underline"> ✆ Jundiaí: (55) 11 4522-6982</a>
                                <br></br>
                                <a href="tel:(55) 11 4522-6982" target="blank" className="hover:underline"> ✆ Itatiba: (55) 11 4487-0986</a>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <hr className="my-6 border-stone-200 sm:mx-auto dark:border-stone-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-stone-500 sm:text-center dark:text-stone-300">© 2024                                                                                                                                     <a href="https://flowbite.com/" className="hover:underline">Simmons Casa Orner</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 sm:justify-center sm:mt-0">

                    <a href="https://www.facebook.com/simmons.casaorner" target="blank" className="text-stone-500 hover:text-stone-900 dark:hover:text-white">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>
                        <span className="sr-only">Facebook</span>
                    </a>

                    <a href="https://www.instagram.com/simmons.casaorner" target="blank" className="text-stone-500 hover:text-stone-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                    </svg>

                        <span className="sr-only">Instagram </span>
                    </a>

                    <a href="https://www.youtube.com/@casaorner2636" target="blank" className="text-stone-500 hover:text-stone-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                        <span className="sr-only">Youtube</span>
                    </a>
                   
                </div>
            </div>
            </div>
        </footer>
    )
}