export default function FAQ() {
    return(

        <div className="bg-white py-20">

            
        <div className=" w-full h-auto bg-white px-6 pt-10  pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-2xl sm:px-10">
    <div className="mx-auto px-5">
        <div className="text-black flex flex-col items-center">
            <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
            <p className="mt-3 font-light text-lg text-neutral-500 md:text-xl">Perguntas Frequentes</p> 
            <br/>
            <p className="mt-3 font-medium text-lg text-black md:text-xl text-center">
            Saiba mais sobre a Simmons Casa Orner e nossa política de suporte e atendimento ao cliente.
            </p>

        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Quais as formas de pagamento? / Formas de pagamento </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600"> 
                        Aceitamos pagamentos no 💳 cartão de crédito em até 10x SEM JUROS - 💸 No débito, dinheiro ou PIX com 10% de desconto - 🪙 Condições especiais disponíveis em loja.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className=" text-black text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Qual o custo do envio? / Frete </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Entregamos de forma gratuita para região de São Paulo, consulte seu CEP no momento da compra para validar se entregamos em sua localidade.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Como os envios são realizados? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    A Simmons Casa Orner conta com uma transportadora própria, o que permite envio mais rápido da mercadoria e na baixa incidência de avarias para com o produto. Prezamos por uma entrega mais rápida e segura, para trazer a melhor experiência de compra para nossos clientes.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Onde posso receber meu pedido? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Realizamos entrega para região de São Paulo, capital e interior.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Quanto tempo meu pedido vai demorar para chegar? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Havendo a disponibilidade de estoque em apenas 12H a Simmons Casa Orner relaiza a entrega e o melhor, sem custos adicionais ao seu pedido! Caso não haja a disponibilidade temos um prazo de espera de pelo menos 15 dias para que o produto seja enviado.
                    </p>
                </details>
            </div>
            <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> O que devo fazer se o produto não chega em bom estado? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Entre em contato conosco pelo e-mail casaorner.digital@gmail.com ou via Whatsapp - (11) 99537-9301 para que possamos das início a verificação das evidências e a tratativa sobre manutenção ou troca do produto.
                    </p>
                </details>
                    </div>
                </div>

                <div className="py-5">
                <details className="group">
                    <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                        <span> Quem fabrica a Simmons no Brasil? </span>
                        <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                    </summary>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                    Flex Bedding Group - No Brasil a marca Simmons passa a fazer parte da Flex Bedding Group, um dos maiores grupos de descanso do mundo, sendo produzida pela Flex do Brasil. Localizada no município de Limeira-SP a planta brasileira tem 20mil m² e capacidade para produzir 1500 colchões por dia. 
                    O Grupo Flex tem operações em grandes países como Espanha, Portugal, Reino Unido, Estados Unidos, Canada, Chile e no Brasil.
                     </p>
                </details>
                    </div>

                    <div className="py-5">
                    <details className="group">
                        <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                            <span> Qual a durabilidade de um colchão Simmons? </span>
                            <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                        A certificação Inmetro veio exatamente para melhorar e padronizar o mercado, garantindo ao consumidor produtos de qualidade superior. Qual o tempo de durabilidade dos produtos Simmons? A empresa não estipula um prazo fixo para duração de seus produtos, mas recomenda a avaliação do colchão no prazo de 5 (cinco) anos.                        </p>
                    </details>
                </div>

                <div className="py-5">
                    <details className="group">
                        <summary className="text-black flex cursor-pointer list-none items-center justify-between font-medium">
                            <span> Qual é a melhor marca de colchão? </span>
                            <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                        stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                        <path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                        A Simmons é reconhecida globalmente pela inovação e qualidade de seus colchões, destacando-se pela tecnologia de molas ensacadas Beautyrest, que proporciona suporte personalizado. Presente em mais de 100 países, a marca se destaca pela adaptabilidade e compreensão das necessidades dos consumidores, consolidando sua liderança no mercado de colchões.                        </p>
                    </details>
                </div>
                
                </div>

                


                
                
                </div>
        </div>
    )
}