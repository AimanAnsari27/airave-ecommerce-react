import { NavLink } from 'react-router-dom'
export default function Header(){
    return(
        <nav>
        <div className="nav-brand ml-5">
            <NavLink to="/home">
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
            <li>
                <a href="/Cart/cart.html"><div className="badge-wrapper">
                <i className="bi bi-cart fa-lg"></i>
                <span className="icon-badge flex-align-center">2</span>
                </div></a>
            </li>
            <li><i className="bi bi-heart"></i></li>
            {/* <div className="dropdown"> */}
                <li><i className="bi bi-person-fill"></i></li>
                {/* <div className="dropdown-content">
                    <a href="/Login/login.html">Login</a>
                    <a href="/landing page/index.html">Logout</a>
                </div> */}
            {/* </div> */}
        </ul>
    </nav> 
    )
}