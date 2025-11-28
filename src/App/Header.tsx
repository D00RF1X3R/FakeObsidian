import { useEffect, useState } from "react"
import LogosBar from "./LogosBar"
import RightBar from "./RightBar"
import { getUsersAll } from "../shared/utils/api"


interface PropsInterface {
    handleThemeChange: Function

}

/**
 * Собственно хедер, уменьшил его до 60 пикселей, так как он казался огромным.
 * @param params Смотреть в интерфейсе
 */
function Header({handleThemeChange}: PropsInterface){
    let [PIZDA, setPIZDA] = useState(true)
    useEffect(() => {
        const test = async () => {
            let aboba = await getUsersAll()
            console.log(aboba)
            setPIZDA(false)
        }
        if (PIZDA) {
            test()
        }

    }, [])


    return (
        <div className="bg-bgDarkD/70 backdrop-blur-xl w-full h-[60px] fixed flex justify-center">
            <div className="h-full w-[1440px] flex justify-between items-center ">
                <LogosBar></LogosBar>
                <RightBar handleThemeChange={handleThemeChange}></RightBar>
            </div>
        </div>
    )}

export default Header