import Home from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Product from './pages/Product/Product'
import Wishlist from './pages/Wishlist/Wishlist'
import Login from './pages/Login/Login'
export default function Routers(){
    return(
        <Routes>
            <Route path="home" element={<Home />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="product" element={<Product />}/>
            <Route path="wishlist" element={<Wishlist />}/>
            <Route path="login" element={<Login />} />
      </Routes>
    )
}