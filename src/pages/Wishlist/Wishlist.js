import { useAuth } from "../../Context/AuthContext/AuthContext"
import { useCart } from "../../Context/DataContext/CartContext"
import { useWishlist } from "../../Context/DataContext/WishlistContext"
import { EmptyWishlist } from "./EmptyWishlist"
import './Wishlist.css'
export default function Wishlist(){
    const {wishlist, removeWishlist} = useWishlist()
    const {addCartItem, cart} = useCart()
    const {isLogin} = useAuth()
    // 
    console.log(wishlist)
    const addToCart = (item) =>{
        addCartItem(item)
        removeWishlist(item)
    }

    return(
        <div>
            {wishlist.length > 0 ? 
            <>
            <h4 className="flex-align-center mt-2 mb-2">My Wishlist</h4>
                <div className="wishlist-card">
                    {isLogin && wishlist.map((item) => 
                    <>
                    <div className="card box-shadow">
                        <i className="bi bi-heart-fill wishlist"
                            onClick={()=>{
                            removeWishlist(item)
                        }}>
                        </i>
                        <img src={item.image} className="img-sm" alt={item.name}/>
                        <div className="card-body">
                            <div className="card-title">{item.name}</div>
                            <div className="card-description">{item.description}</div>
                            <div className="price">Rs. {item.price}</div>
                                {cart.item.some((itemsCart) => itemsCart._id=== item._id) ? (
                                    <button className="btn btn-accent width-100 mt-1" >
                                        Add to Cart
                                    </button>
                                ) :(
                                    <button className="btn btn-accent width-100 mt-1"
                                        onClick={() =>{
                                        addToCart(item)
                                         }}>
                                        Add to Cart
                                    </button>
                                 )}
                        </div>  
                    </div>
                    </>
                    )}
                </div>     

            </>
            :
            <EmptyWishlist />
            
            }
                
           </div>
    )
}