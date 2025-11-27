import { Switch } from "@headlessui/react";
import { useContext } from "react";
import { ThemeContext } from "../utils/contexts";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

interface PropsInterface {
    handleChange?: Function
}

function CustomSwitch({handleChange = () => {}}: PropsInterface) {
    const theme = useContext(ThemeContext)
    const handleOnChange = () => {
        handleChange();
    }
    return (
    <Switch checked={theme === 'dark' ? true : false} onChange={handleOnChange}
        className='group inline-flex h-8 w-18 items-center rounded-full bg-bgBaseD light:bg-bgLight
                    cursor-pointer transition'>
        <span className='relative size-6 translate-x-1 bg-bgMiddletD light:bg-bgLight rounded-full transition duration-750 group-data-checked:translate-x-11'>
        <MoonIcon className='absolute light:fill-black dark:fill-white size-5 rounded-full top-0.5 left-[1.5px]
            duration-375 transition ease-out group-data-checked:scale-100 scale-0
            group-data-checked:rotate-360'></MoonIcon>
        <SunIcon className='absolute  dark:fill-white fill-black size-5 rounded-full top-0.5 left-[1.5px]
            duration-375 transition ease-out group-data-checked:scale-0 scale-100
            rotate-360  group-data-checked:rotate-0'></SunIcon>
        </span>
    </Switch>
    )
}

export default CustomSwitch