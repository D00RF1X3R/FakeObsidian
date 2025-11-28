import SearchBar from "./SearchBar"
import Button from "../../shared/components/button";
import CustomSwitch from "../../shared/components/switch";
import { useContext } from "react";
import { AuthContext } from "../../shared/utils/contexts";

interface PropsInterface {
    handleThemeChange: Function

}


/**
 * Правая часть хедера
 */
function RightBar({handleThemeChange}: PropsInterface) {
    const authState = useContext(AuthContext)
    return (
        <div className="flex flex-row gap-5 mr-[25px] items-center">
            <SearchBar></SearchBar>
            {authState ? 
            <></> : 
            <div className="flex gap-5 h-full justify-center content-center items-center">
                <CustomSwitch handleChange={handleThemeChange}></CustomSwitch>
                <Button className="h-10 w-25">ВОЙТИ</Button>
            </div>}
        </div>
    )
}


export default RightBar