import { NavLink } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext/AuthContext'
import { useCart } from '../../Context/DataContext/CartContext';
import { useWishlist } from '../../Context/DataContext/WishlistContext';
import Wishlist from '../../pages/Wishlist/Wishlist';
export default function Header(){
    const {isLogin, setIsLogin, user, token} = useAuth();
    const {cart} = useCart()
    const {wishlist} = useWishlist()
    return(
        <nav>
        <div className="nav-brand ml-5">
            <NavLink to="/">
                <span className="text-accent">Airave</span>
                <span className="text-light">Mart</span>
            </NavLink>
        </div>
        <div className="searchbox mr-2">
            <input type="text" 
                className="search-input"
                placeholder="Search here..."/>
            <i className="bi bi-search search-icon"></i>
        </div>
        <div>
            <h5 className="mr-3"> {isLogin  && user  !== null ? `Hie , ${user}` : ''}</h5>
        </div>
        <ul className="mr-5 gap-1">
            <NavLink to="/cart">
            <li>
                <div className="badge-wrapper">
                    
                    <i className="bi bi-cart fa-lg"></i>
                    {isLogin ?
                    <span className="icon-badge flex-align-center">
                    {cart.item.length}</span>
                    :
                    <span></span> }
                    
                    
                </div>
            </li>
        </NavLink>
        
            
            <NavLink to="/wishlist" >
                <li>
                <div className="badge-wrapper">
                    
                    <i className="bi bi-heart fa-lg"></i>
                    {isLogin ?
                    <span className="icon-badge flex-align-center">
                    {wishlist.length}</span>
                    :
                    <span></span> }
                    
                    
                </div>
                </li>
            </NavLink>
            {isLogin && token ? (
               <NavLink to="/">
               <li>
                    <i className='bi bi-box-arrow-right' 
                    onClick={()=>setIsLogin(false)}>
                    </i>
               </li> 
           </NavLink> 
            ) : (
                <NavLink to="/login">
                <li>
                    <i className="bi bi-person-fill"></i>
                </li> 
                </NavLink>
            )}
        </ul>
    </nav> 
    )
}