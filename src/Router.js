import Home from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from './pages/Login/Login'
import SignUp from './pages/Login/SignUp/SignUp'
import Mockman from 'mockman-js'
export default function Routers(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="product" element={<Product />}/>
            <Route path="wishlist" element={<Wishlist />}/>
            <Route path="login" element={<Login />} />
            <Route path="mock" element={<Mockman />}/>
            <Route path="signup" element={<SignUp />}/>
      </Routes>
    )
}