import { NavLink } from 'react-router-dom'
export default function Header(){
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
        <ul className="mr-5 gap-1">
            <NavLink to="/cart">
                <li>
                    <div className="badge-wrapper">
                        <i className="bi bi-cart fa-lg"></i>
                        <span className="icon-badge flex-align-center">2</span>
                    </div>
                </li>
            </NavLink>
            <NavLink to="/wishlist" >
                <li>
                    <i className="bi bi-heart"></i>
                </li>
            </NavLink>
            <NavLink to="/login">
                <li>
                    <i className="bi bi-person-fill"></i>
                </li> 
            </NavLink>
        </ul>
    </nav> 
    )
}