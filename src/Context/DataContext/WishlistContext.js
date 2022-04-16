import axios from "axios";
import { createContext, useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../AuthContext/AuthContext";

const WishlistContext = createContext()

const useWishlist = () => useContext(WishlistContext)



const WishlistProvider = ({children}) =>{
   
    const {isLogin}=useAuth()
    const [wishlist, setWishlist] = useState([])
    useEffect(()=>{
        if(isLogin){
        getWishlist()
    }
    },[])

    //getting wishlist data
    const getWishlist = async() =>{
        try{
            const res = axios.get('/api/user/wishlist',{
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        setWishlist(res.data.wishlist)
        }
        catch(err){
            console.log(err)
        }

    }

    //adding data to wishlist
    const addWishlist = async(product) =>{
        try{
        const res = await axios({
            method:'post',
            url:'/api/user/wishlist',
            data:{
                product
            },
            headers:{
                authorization:localStorage.getItem("token")
            }
        })
        setWishlist(res.data.wishlist)
        }
        catch(err){
            console.log(err)
        }
    }

    //removing data from wishlist
    const removeWishlist = async(product) =>{
        try{
            const res = await axios.delete(`/api/user/wishlist/${product._id}`,
            {headers:{
                authorization:localStorage.getItem("token")
            }})
            setWishlist(res.data.wishlist)
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <WishlistContext.Provider value={{wishlist, addWishlist, removeWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}

export {useWishlist, WishlistProvider}