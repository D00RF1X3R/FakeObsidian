import CardBases from "../CardBases"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

/**
 * Штуковина, в которую мы добавляем роуты и то, что они будут отображать
 * @returns Роуты, на которые мы можем перейти
 */
function RoutesManager() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<CardBases></CardBases>}></Route>
            </Routes>
        </Router>
    )
}

export default RoutesManager