import { useEffect, useState } from 'react'
import { getTheme } from '../shared/utils/themes'
import Header from './Header'
import RoutesManager from './Routes'
import { ThemeContext } from '../shared/utils/contexts'

/**
 * Собственно приложение
 */
function App() {
    const [theme, setTheme] = useState<string>("light")
    useEffect(() => {
        let takeTheme = getTheme();
        if (takeTheme != null) {
            setTheme(takeTheme)
        }
    } , [])
    const handleThemeChange = () => {
        if (theme == "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
        return
    }
    
    return (
    /* Обернул всё в ThemeContext, чтобы информация о тебе была во всех роутах */
    <ThemeContext value={theme} data-theme={theme}>
        <Header isLogged={false} handleThemeChange={handleThemeChange}/>
        <RoutesManager />
    </ThemeContext>
    )
}

export default App