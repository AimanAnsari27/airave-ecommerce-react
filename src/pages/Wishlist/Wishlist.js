import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useCart } from "../../Context/DataContext/CartContext";
import { useWishlist } from "../../Context/DataContext/WishlistContext";
import { EmptyWishlist } from "./EmptyWishlist";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Wishlist.css";

toast.configure();
export default function Wishlist() {
  const { wishlist, removeWishlist } = useWishlist();
  const { addCartItem, cart } = useCart();
  const {
    isLogin,
    state: { isAuthenticated },
  } = useAuth();
  const addToCart = (item) => {
    addCartItem(item);
    removeWishlist(item);
    toast.success("Item is successfully added to cart", { autoClose: 1000 });
  };

  return (
    <div>
      {wishlist.length > 0 ? (
        <>
          <h4 className='flex-align-center mt-2 mb-2'>My Wishlist</h4>
          <div className='wishlist-card'>
            {isAuthenticated &&
              wishlist.map((item) => (
                <>
                  <div className='card box-shadow'>
                    <i
                      className='bi bi-heart-fill wishlist'
                      onClick={() => {
                        removeWishlist(item);
                        toast.error("Item is removed from wishlist", {
                          autoclose: 1000,
                        });
                      }}
                    ></i>
                    <img src={item.image} className='img-sm' alt={item.name} />
                    <div className='card-body'>
                      <div className='card-title'>{item.name}</div>
                      <div className='card-description'>{item.description}</div>
                      <div className='price'>Rs. {item.price}</div>
                      {cart.item.some(
                        (itemsCart) => itemsCart._id === item._id
                      ) ? (
                        <button
                          className='btn btn-accent width-100 mt-1'
                          onClick={() => {
                            toast.warning("Item is already in cart", {
                              autoClose: 1000,
                            });
                          }}
                        >
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          className='btn btn-accent width-100 mt-1'
                          onClick={() => {
                            addToCart(item);
                          }}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </>
              ))}
          </div>
        </>
      ) : (
        <EmptyWishlist />
      )}
    </div>
  );
}
