import { Link } from 'react-router-dom'
import '../../Components/Cart/Cart.css'
export const EmptyWishlist = () =>{
    return(
        <div className='empty-cart'>
            <img className = "cart-img" src="/Images/Cart/undraw_empty_cart_co35.svg"></img>
            <div className='cart-content'>
                <h4>Your Wishlist is empty</h4>
                <Link to ="/product">
                    <button className='btn btn-primary mt-1 flex-align-center'>Shop now</button>
                </Link>
            </div>
        </div>
    )
}