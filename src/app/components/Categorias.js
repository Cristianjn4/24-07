export function Categorias(){
    return(
        <div className=" w-full h-auto bg-gradient-to-b from-white to-neutral-300  align justify-center py-11 gap-8">

            <h3 className="text-2xl font-bold text-gray-900 md:text-3xl  align text-center">
            Conforto e Qualidade Simmons
            </h3>
            
            <div className="w-2/3 h-auto  md:flex lg:flex align m-auto py-10 gap-8 text-center ">
                <div className="bg-transparent w-40 rounded-full m-auto">
                    <a href="/products">
                    <img  src="https://images.tcdn.com.br/img/img_prod/1223675/cama_box_com_colchao_king_size_simmons_titanium_limited_edition_193x2030_873_1_dac4bff5d1cd5e3f549bfd5b2d34418f.jpg" alt="" className="bg-white w-40 h-40 rounded-full shadow-lg border-2 border-transparent hover:border-blue-600" />
                    </a>
                    <br/>
                    <a href="/products" className=" b-3 font-normal text-black text-center w-auto"> Colchões </a>
                </div>

                <div className="bg-transparent w-40 rounded-full m-auto ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNylhCd7nvX2qljCKr3xi8Kuq_RM1cL3opw&s" alt="" className="bg-white w-40 h-40 rounded-full shadow-lg border-2 border-transparent hover:border-gray-400" />
                    <br/>
                    <a href="" className=" b-3 font-normal text-black text-center w-auto py-3"> Camas </a>
                </div>

                <div className="bg-transparent w-40 rounded-full m-auto ">
                    <img src="https://aladimdecor.fbitsstatic.net/img/p/kit-2-travesseiros-percal-firme-50x70-suporte-firme-151885/338844.jpg" alt="" className="bg-white w-40 h-40 rounded-full shadow-lg border-2 border-transparent hover:border-gray-400" />
                    <br/>
                    <a href="" className=" b-3 font-normal text-black text-center w-auto py-3"> Travesseiros </a>
                </div>

                <div className=" bg-transparent w-40 rounded-full m-auto ">
                    <img src="https://cdn.sistemawbuy.com.br/arquivos/dc7db93e78bf0dd8806d89ead6f85ac6/produtos/6598af8fb402c/jogo-de-cama-casal-queen-liso-100-algodao-200-fios-04-pecas-tous-les-jours-branco-6102efd286e58-large-6598af90678a2_mini.jpg" alt="" className="shadow-lg bg-white w-40 h-40 rounded-full border-2 border-transparent hover:border-gray-400" />
                    <br/>
                    <a href="" className=" b-3 font-normal text-black text-center w-auto py-3"> Acessórios   </a>

                </div>
            </div>
           

        </div>
    )
}

