export function Contact() {
    return(
        <div>


            
        <section id="#contact" class="bg-white dark:bg-white py-20">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-black">Entre em contato</h2>
            <p class="mb-8 lg:mb-16 font-regular text-center text-gray-500 dark:text-black sm:text-base">Encontrou algum problema técnico? Deseja enviar alguma sujestão ou feedback? Precisa de detalhes sobre o funcionamento ou ajuda? Conte para nós através de nosso email.</p>
            
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Seu email</label>
                    <input type="email" id="email" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Como podemos ajudar?" required/>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dar    k:text-black">Assunto</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Como podemos ajudar?" required/>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Sua mensagem</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escreva sua mensagem..."></textarea>
                </div>

                <buttom className="mt-4 md:mt-8 flex">
                    <a
                    href="#"
                    className="items-center rounded-full bg-black px-10 py-3 text-sm w-auto flex font-medium text-white transition hover:bg-white hover:text-black border hover:border-black hover:font-medium focus:outline-none">
                    Enviar                                                                                          
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    </a>
                </buttom>
            </form>

            <h2 id="contact" class="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-black mt-10">Fale Conosco</h2>
            <p class="mb-8 lg:mb-16 font-regular text-center text-gray-500 dark:text-black sm:text-base"> 
                Entre em contato com nossos times em Jundiaí e Itatiba. 
                <br></br>
                Com certeza teremos um atendente pronto para lhe ajudar.</p>

            <div className="flex gap-4 justify-center ">
                <p class="block mb-2 text-sm font-medium text-gray-900 dar    k:text-black">Telefone ✆ Jundiaí: (55) 11 4522-6982</p> <br/> <p class="block mb-2 text-sm font-medium text-gray-900 dar    k:text-black">Telefone ✆ Itatiba: (55) 11 4487-0986</p> <br/>
            </div>
               
            <div className="w-auto h-auto m-auto gap bg-white rounded-2xl justify-between">
                            <p className=" text-black/100 align justify-center p-4 font-extralight flex gap-8">
                                
                            <div className="mt-2 md:mt-4">
                            <a
                            href="https://api.whatsapp.com/send/?phone=5511995379301&text=Ol%C3%A1%2C+gostaria+de+realizar+a+cota%C3%A7%C3%A3o+de+um+colch%C3%A3o+Simmons.&type=phone_number&app_absent=0" target="blank"
                            className="flex rounded-full bg-white px-10 py-3 text-sm font-medium text-black transition hover:bg-white hover:text-black border hover:border-black hover:font-medium focus:outline-none">
                            <svg
                            className="h-5 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            Loja Simmons em Jundiaí
                            </a>
                            </div>

                            <div className="mt-2 md:mt-4">
                            <a
                            href="https://api.whatsapp.com/send/?phone=5511932452060&text=Ol%C3%A1%2C+gostaria+de+realizar+a+cota%C3%A7%C3%A3o+de+um+colch%C3%A3o+Simmons.&type=phone_number&app_absent=0" target="blank"
                            className="flex rounded-full bg-white px-10 py-3 text-sm font-medium text-black transition hover:bg-white hover:text-black border hover:border-black hover:font-medium focus:outline-none">
                            <svg
                            className="h-5 mr-2"
                                xmlns="http://www.w3.org/2000/sv    g"
                                fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            Loja Simmons em Itatiba
                            </a>
                            </div>                   

                            </p>
                        </div>  
        </div>
        </section>
        </div>
    )
}
