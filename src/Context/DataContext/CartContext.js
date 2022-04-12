import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext/AuthContext";
const CartContext = createContext()

const useCart = () => useContext(CartContext)


const CartProvider = ({children}) =>{
const itemsInCart = {
    item : []
}

    const [cart, setCart] = useState(itemsInCart)
    const {isLogin} = useAuth()

    const encodedToken =  localStorage.getItem("token")
   

    useEffect(() =>{
        if(isLogin){
        getCart()
        }
    },[])
        
           
    const getCart = async()=>{
        try{
            const res = await axios.get('/api/user/cart',{
                headers:{
                    authorization : encodedToken
                }})
                setCart({...cart, item:res.data.cart})
                
        }
        catch(err){
            console.log(err)
        }
    }
 


    const addCartItem = async(product) =>{
       
            try{
                const res = await axios({
                    method: "post",
                    url: "/api/user/cart",
                    data: {
                      product
                    },
                    headers: {
                      authorization: encodedToken,
                    },
                  });
                setCart({...cart, item:res.data.cart})
            }
            catch(err){
                console.log(err)
            }
            if(cart === undefined){
                setCart('loading')
            }
            return cart
        }


        const removeCartItem = async(product) =>{
       
            try{
                const res = await axios({
                    method: "delete",
                    url: `/api/user/cart/${product._id}`,
                    headers: {
                      authorization: encodedToken,
                    },
                  });
                setCart({...cart, item : res.data.cart})
            }
            catch(err){
                console.log(err)
            }
            if(cart === undefined){
                setCart('loading')
            }
        }

        const updateCart = async({product, type}) =>{
            try{
                const res = await axios.post(
                    `/api/user/cart/${product._id}`,
                    {
                        action: {
                          type: type
                        },
                      },
                      {
                      headers:{
                          authorization:encodedToken
                      }
                    }
                    );
                setCart({...cart, item:res.data.cart})
            }
            catch(err){
                console.log(err)
            }
        }


    return(
        <CartContext.Provider value={{cart, getCart,addCartItem, updateCart, removeCartItem, setCart}}>
            {children}
        </CartContext.Provider>
    )
}



export { useCart, CartProvider}
