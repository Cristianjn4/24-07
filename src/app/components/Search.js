export default function Search(){
    return(
        <div className="flex items-center gap-4 bg-transparent rounded-full px-2 py-1 border border-white ">
            <input className="text-white bg-transparent border-none outline-none h-6 " type="text" name="" id="" placeholder="" />
            <svg className="h-5 w-5 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
        </div>
    )
}