import { Bars3Icon, CubeIcon } from "@heroicons/react/24/solid"
import PathElement from "./PathElement"

/**
 * Тут вместо onClick Лежит плейсхолдер, это надо починить!!!
 */
function LogosBar() {
    return (
        <div className="h-full ml-[25px] flex gap-[50px] items-center">   
            <Bars3Icon className="w-75px h-[75px] stroke-tLightD fill-tLightD cursor-pointer" onClick={() => {console.log("sosal?")}}></Bars3Icon>
            <CubeIcon className="w-[60px] h-[60px] stroke-tLightD fill-tLightD cursor-pointer" onClick={() => {console.log("sosal?")}}></CubeIcon>
            <PathElement></PathElement>
        </div>
    ) 
}

export default LogosBar