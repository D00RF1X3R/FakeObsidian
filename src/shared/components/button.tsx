import type { ReactNode } from "react";

/**
 * Интерфейс кнопки, чтобы сделать что-то опциональным, добавляем знак вопроса
 */
interface PropsInterface {
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    onClick?: Function;
}

/**
 * Основной шаблон кнопки, не знаю, зачем я его добавил, но позже, вероятно, поймем.
 * @param param0 Куча параметров, потом будут еще добавляться
 * @returns Кнопку
 */
function Button ({children = "Кнопочка", disabled = false, onClick = () => {console.log("Меня кликнули")}, className = "bg-emerald-900"}: PropsInterface) {
    const handleClick = () => {
        if (!disabled) {
            onClick();
        }
    }
    return (
        <button className={"border-0 rounded-normal bg-primary cursor-pointer text-tLightD font-bold w-[150px] h-[60px]" + " " + className} onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button