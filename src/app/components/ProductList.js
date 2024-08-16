export function Lista() {
    return(
        <div className="bg-white">
{/*NAV */}

<div class="pt-20 md:p-0">
    <div class="border-b border-gray-200 justify-center w-full">
      <nav class=" flex gap-6 justify-center px-2 pb-1 pt-10 bg-black  m-auto" aria-label="Tabs">
        <a
          href="#colchoes"
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Colchões
        </a>

        <a
          href=""
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Camas
        </a>

        <a
          href=""
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white hover:border-white focus:border-white focus:font-medium hover:font-medium"
        >
          Travesseiros
        </a>

        <a
          href=""
          class="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-light text-white   hover:border-white focus:border-white focus:font-medium hover:font-medium"
          aria-current="page"
        >
          Acessórios
        </a>
      </nav>
    </div>
  </div>

  {/* COLCHÕES */}
        <div id="colchoes" className="mx-auto max-w-2xl px-4  sm:px-4 sm:py-10 lg:max-w-7xl lg:px-2">
              
          <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-12">

            {/** Geocities */}
            
            <a href="/geocities" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Geocities.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Intermediário</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Geocities</p>
                </div>
                 
            </a>

            {/** Titanium */}
            
            <a href="/titanium" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Titanium.png" className="h-full w-full object-cover object-center  hover:opacity-75"/>
              </div>

                <div>
                <h3 className="mt-4 text-sm text-stone-700">Intermediário</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Titanium </p>
                </div>
            </a>

            {/** Baltimore */}
            
            <a href="/baltimore" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Baltimore.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
                <div>
                <h3 className="mt-4 text-sm text-stone-700">Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Baltimore </p>
                </div>
                
            </a>

            {/** Riverside */}
            
            <a href="/riverside" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Riverside.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700">Macio</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Riverside</p>
                </div>
                
            </a>

            {/** Madison */}
            
            <a href="/madison" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Madison.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700"> Intermediário </h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Madison</p>
                </div>

            </a>

            {/** Tenerife */}
            
            <a href="/tenerife" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Tenerife.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700">Extra-Firme</h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Tenerife </p>
                </div>
                
                
  
            </a>

            {/** Marbella */}
            
            <a href="/marbella" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Marbella.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700">Firme</h3>
                <p className="mt-1 text-lg font-medium text-stone-900"> Colchão Marbella </p>
                </div>
                
                
  
            </a>

            {/** Evolution */}
            
            <a href="/evolution" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Evolution.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700"> Macio </h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Evolution</p>
                </div>
                
                
  
            </a>

            {/** Sensations Plush */}
            
            <a href="/sensations" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Sensations Plush.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700">Macio </h3>
                <p className="mt-1 text-lg font-medium text-stone-900"> Colchão Sensations Plush </p>
                </div>
                
                
  
            </a>

            {/** Bothanical Moderate */}
            
            <a href="/bothanical" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Bothanical Moderate.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700"> Intermediário </h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Bothanical Moderate</p>
                </div>
                
            </a>

            {/** Heritage */}
            
            <a href="/heritage" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Heritage.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700">Super Macio </h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Heritage</p>
                </div>
                
                
  
            </a>

            {/** Intensity */}
            
            <a href="/intensity" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/Intensity.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700"> Macio </h3>
                <p className="mt-1 text-lg font-medium text-stone-900">Colchão Intensity</p>
                </div>
                
                
  
            </a>

            {/** BioCeramics Energy */}

            <a href="/energy" className="group">
                <div className="text-white bg-stone-900 rounded-lg w-auto m-4 px-3 absolute text-center"> Frete Grátis </div>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md   bg-stone-200 xl:aspect-h-8 xl:aspect-w-7 border-2 border-white group-hover:border-stone-700">
                <img src="/BioCeramics Energy.png" className="h-full w-full object-cover object-center group-hover:opacity-90"/>
              </div>
              <div>
                <h3 className="mt-4 text-sm text-stone-700"> Firme </h3>
                <p className="mt-1 text-lg font-medium text-stone-900"> Colchão BioCeramics Energy</p>
                </div>
                
                
  
            </a>

          </div>
        </div>
      </div>
    )
}

