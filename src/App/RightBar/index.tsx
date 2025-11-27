import SearchBar from "./SearchBar"
import Button from "../../shared/components/button";
import CustomSwitch from "../../shared/components/switch";

interface PropsInterface {
    isLogged: boolean;
    handleThemeChange: Function

}


/**
 * Правая часть хедера
 */
function RightBar({isLogged, handleThemeChange}: PropsInterface) {
    return (
        <div className="flex flex-row gap-5 mr-[25px]">
            <SearchBar></SearchBar>
            {isLogged ? 
            <></> : 
            <div className="flex gap-5 h-full justify-center content-center items-center">
                <CustomSwitch handleChange={handleThemeChange}></CustomSwitch>
                <Button>ВОЙТИ</Button>
            </div>}
        </div>
    )
}


export default RightBar