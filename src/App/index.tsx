import { useEffect, useState } from 'react'
import { getTheme } from '../shared/utils/themes'
import Header from './Header'
import RoutesManager from './Routes'
import { ThemeContext } from '../shared/utils/contexts'
import { AuthContext } from '../shared/utils/contexts'

/**
 * Собственно приложение
 */
function App() {
    const [theme, setTheme] = useState<string>("light")
    const [authState, setAuthState] = useState(false)
    useEffect(() => {
        let takeTheme = getTheme();
        if (takeTheme != null) {
            setTheme(takeTheme)
        }
        /* Пока у нас нет аутентификации, работаем так :D */
        setAuthState(false)
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
    /* Обернул всё в ThemeContext и AuthContext, чтобы информация о теме и аутентификации была во всех роутах */
    <AuthContext value={authState}>
        <ThemeContext value={theme} data-theme={theme}>
            <Header handleThemeChange={handleThemeChange}/>
            <RoutesManager />
        </ThemeContext>
    </AuthContext>
    )
}

export default App