import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext/AuthContext'
import { useCart } from '../../Context/DataContext/CartContext'
import { useWishlist } from '../../Context/DataContext/WishlistContext'
import { useNavigate } from 'react-router-dom'
import './Product.css'
export const SingleProducts  = ({product}) =>{
    const {isLogin} = useAuth()
    const {cart, addCartItem } = useCart();
    const {wishlist, addWishlist, removeWishlist} = useWishlist()
    const navigate = useNavigate()
//    const addWishlist1 = () =>{
//        addWishlist({product})
//    }
   console.log(wishlist)
    return(
        <>
             {cart===undefined ? <h1>Loading...</h1> : 
            <>
                {product.map((prod) =>
                    <div className="card">

                        {isLogin ?(

 wishlist.some((item) => item._id === prod._id) ?
                         <i className="bi bi-heart-fill wishlist" onClick={()=>{
                            removeWishlist(prod)
                         }}></i>
                        :
                        <i className="bi bi-heart wishlist" onClick={()=>
                            {
                                addWishlist(prod)
                        }}></i>
                    

                        ):(
<Link to="/login">
<i className="bi bi-heart wishlist"></i>   
</Link>                     )}
                        {/* {wishlist.some((item) => item._id === prod._id) ?
                         <i className="bi bi-heart wishlist"></i>
                        :
                        <i className="bi bi-heart wishlist" onClick={()=>
                            {
                                addWishlist(prod)
                        }}></i>
                    } */}
                       
                            <img src={prod.image} alt={prod.name} className="img-sm"/>
                            <div className="card-body">
                                <div className="card-title">{prod.name}</div>
                                <div className="card-description">{prod.description}</div>
                                {prod.discount ? 
                                    <div className="price">Rs {prod.price * (1- (prod.discount/100))}
                                        <del className="gray-text h6 ml-1">{prod.price}</del>
                                        <span className="text-accent h6"> ({prod.discount}% oFF)</span>
                                    </div>  
                                     : 
                                    <div className="price">{prod.price}</div>
                                }
                                {isLogin === true ? 
                                    <Link to="/product">
                                    {cart.item.some((item)=>item._id===prod._id ) ?
                                    <>
                                        <Link to='/cart'>
                                        <button className='btn btn-secondary width-100 mt-1'>Go to Cart</button>
                                        </Link>                               
                                    </>
                                    : 
                                    <>
                                        <button className='btn btn-primary width-100 mt-1' 
                                            onClick={()=>{
                                                addCartItem(prod)
                                            }}
                                        >
                                            Add to cart
                                        </button>
                                    </>
                                    }
                                    </Link>: 
                                    <Link to="/login"> 
                                        <button className='btn btn-primary width-100 mt-1'>
                                            Add to cart
                                        </button>
                                    </Link>
                                }
                            </div>
                    </div>   
                )}
        </>}
    </>                         
    )
}