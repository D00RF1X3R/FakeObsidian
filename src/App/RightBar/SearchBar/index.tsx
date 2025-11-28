import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

interface PropsInterface {
    className? : string
}

/** Окно поиска   
 * TODO: Добавить на enter поиск)))
*/
function SearchBar({className}: PropsInterface) {
    return (
        <div className={"rounded-normal bg-bgBaseD w-[380px] h-10 relative flex" + {className}}>
            <MagnifyingGlassIcon className="-scale-x-100 w-[26px] absolute top-1.5 stroke-tDarkD left-6"/>
            <input type="text" placeholder="Поиск" className="w-full h-full pl-[65px] text-tDarkD text-body1 placeholder-tDarkD placeholder:text-body1 outline-none"/>
        </div>
    )
}

export default SearchBar