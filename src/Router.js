import Home from "./pages/Home/Home";
import { Route, Routes } from 'react-router-dom'
import Mockman from 'mockman-js'
import { Cart, Product,Wishlist,Login,SignUp,PageNotFound } from "./pages";
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
            <Route path="*" element={<PageNotFound />}/>

      </Routes>
    )
}