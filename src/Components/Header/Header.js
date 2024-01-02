import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useCart } from "../../Context/DataContext/CartContext";
import { useWishlist } from "../../Context/DataContext/WishlistContext";
import { toast, ToastContainer } from "react-toastify";
import { Profile } from "../Profile/Profile";
import "./Header.css";
import { useData } from "../../Context/DataContext/DataContext";
import { useDispatch, useSelector } from "react-redux";
import { filterBySearch } from "../../Features/filterReducers";
export const Header = () => {
  const {
    state: { isAuthenticated, user },
  } = useAuth();
  // const { state, dispatch, category } = useData();
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters);
  console.log("filter", filter);
  // console.log(state);
  // const navigate = useNavigate();
  // const logoutHandler = () => {
  //   dispatch({
  //     type: "logout",
  //   });
  //   toast.success("Logout");
  //   navigate("/");
  // };
  return (
    <>
      <nav>
        <div className="nav-brand ml-5">
          <NavLink to="/">
            <span className="text-secondary">Airave</span>
            <span className="text-secondary">Mart</span>
          </NavLink>
        </div>
        <ul className="nav-icon">
          <div className="searchbox">
            <input
              type="text"
              className="search-input"
              placeholder="Search here..."
              value={filter.search}
              onChange={(e) =>
                // dispatch({
                //   type: "FILTER_BY_SEARCH",
                //   payload: e.target.value,
                dispatch(filterBySearch(e.target.value))
              }
            />
            <i className="bi bi-search search-icon"></i>
          </div>

          <NavLink to="/cart">
            <li>
              <div className="badge-wrapper">
                <i className="bi bi-cart fa-lg"></i>
                {isAuthenticated && (
                  <span className="icon-badge flex-align-center">
                    {cart.item.length}
                  </span>
                )}
              </div>
            </li>
          </NavLink>
          <NavLink to="/wishlist">
            <li>
              <div className="badge-wrapper">
                <i className="bi bi-heart fa-lg"></i>
                {isAuthenticated && (
                  <span className="icon-badge flex-align-center">
                    {wishlist.length}
                  </span>
                )}
              </div>
            </li>
          </NavLink>
          <li>
            <div className="profile">
              <img
                className="avatar avatar-xsm"
                src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                alt="profile pic"
              />
              <div className="profile-content">
                <Profile />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
