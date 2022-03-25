import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
export default function Routers(){
    return(
        <Routes>
            <Route path="/home">
                <Home />
            </Route>
        </Routes>
    )
}