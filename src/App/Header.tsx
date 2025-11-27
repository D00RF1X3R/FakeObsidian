import { useContext } from "react"
import { ThemeContext } from "../shared/utils/contexts"
import LogosBar from "./LogosBar"
import RightBar from "./RightBar"

interface PropsInterface {
    isLogged: boolean
    handleThemeChange: Function

}

/**
 * Собственно хедер
 * @param params Смотреть в интерфейсе
 */
function Header({isLogged, handleThemeChange}: PropsInterface){
    let theme = useContext(ThemeContext)


    return (
        <div className="bg-bgDarkD/70 backdrop-blur-xl w-full h-[100px] fixed flex justify-center">
            <div className="h-full w-[1440px] flex justify-between items-center ">
                <LogosBar></LogosBar>
                <RightBar isLogged={isLogged} handleThemeChange={handleThemeChange}></RightBar>
            </div>
        </div>
    )}

export default Header