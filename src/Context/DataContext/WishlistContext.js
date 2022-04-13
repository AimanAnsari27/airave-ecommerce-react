import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../AuthContext/AuthContext";

const WishlistContext = createContext()

const useWishlist = () => useContext(WishlistContext)



const WishlistProvider = ({children}) =>{
    const initialState = {
        itemsInWishlist :[]
    }

    const {isLogin}=useAuth()
    const [wishlist, setWishlist] = useState([])
useEffect(()=>{
    if(isLogin){
    getWishlist()
}
},[])
    const getWishlist = async() =>{
        const res = axios.get('/api/user/wishlist',{
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        // if(wishlist===undefined){
        //     setWishlist('loading...')
        // }
        setWishlist(res.data.wishlist)

    }
    const addWishlist = async(product) =>{
        const res = await axios({
            method:'post',
            url:'/api/user/wishlist',
            data:{
                product
            },
            headers:{
                authorization:localStorage.getItem("token")
            }

        }
            
        )
        console.log("added",res.data.wishlist)
        setWishlist(res.data.wishlist)
        // if(wishlist===undefined){
        //     setWishlist('loading')
        //     }
        // }
        // console.log("wishlist",addWishlist())
    }
    const removeWishlist = async(product) =>{
        const res = await axios.delete(`/api/user/wishlist/${product._id}`,
        {headers:{
            authorization:localStorage.getItem("token")
        }})
        console.log("deleted", res.data.wishlist)
        setWishlist(res.data.wishlist)
    }
// addWishlist()
    return(
        <WishlistContext.Provider value={{wishlist, addWishlist, removeWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export {useWishlist, WishlistProvider}