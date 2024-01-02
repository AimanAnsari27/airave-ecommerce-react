import { useCart } from "../../Context/DataContext/CartContext";
import { useWishlist } from "../../Context/DataContext/WishlistContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// toast.configure();
export const CartProduct = ({ product }) => {
  const { _id, name, image, description, price, discount } = product;
  const { removeCartItem, updateCart } = useCart();
  const { addWishlist, wishlist } = useWishlist();
  const addToWishlistHandler = (product) => {
    addWishlist(product);
    removeCartItem(product);
  };
  return (
    <div>
      <div className="cart-card" key={_id}>
        <img className="img-sm" src={image} />
        <div className="cart-card-body">
          <div className="cart-card-header">
            <div>
              <div className="card-title text-sm">{name} </div>
              <div className="card-description">{description} </div>
            </div>
            <div>
              <i
                className="fa fa-trash fa-1x text-accent"
                onClick={() => {
                  removeCartItem(product);
                  toast.error("item removed", { autoClose: 1000 });
                }}
              ></i>
            </div>
          </div>
          {discount ? (
            <div className="price">
              Rs {price * (1 - discount / 100)}
              <del className="gray-text h6 ml-1">Rs. {price}</del>
              <span className="text-accent h6"> ({discount}% oFF)</span>
            </div>
          ) : (
            <div>{price}</div>
          )}

          <div className="quantity-btn mt-1 gap-2">
            {product.qty <= 1 ? (
              <button
                className="btn-icon-round btn-icon-sm box-shadow-bottom"
                disabled
              >
                <i className="fa fa-minus"></i>
              </button>
            ) : (
              <button className="btn-icon-round btn-icon-sm box-shadow-bottom">
                <i
                  className="fa fa-minus"
                  onClick={() =>
                    updateCart({
                      product,
                      type: "decrement",
                    })
                  }
                ></i>
              </button>
            )}
            <span className="bold-text pd--5">
              {product.qty >= 1 ? product.qty : (product.qty = 1)}
            </span>

            <button className="btn-icon-round btn-icon-sm box-shadow-bottom">
              <i
                className="fa fa-plus"
                onClick={() =>
                  updateCart({
                    product,
                    type: "increment",
                  })
                }
              ></i>
            </button>
          </div>
          {wishlist.some((item) => item._id === product._id) ? (
            <button className="btn btn-outline-primary width-100 mt-1">
              <span>Add to Wishlist</span>
              <span className="btn-icon">
                <i
                  className="bi bi-heart"
                  onClick={() => {
                    toast.error("Item is already in wishlist", {
                      autoClose: 1000,
                    });
                  }}
                ></i>
              </span>
            </button>
          ) : (
            <button
              className="btn btn-outline-primary width-100 mt-1"
              onClick={() => {
                addToWishlistHandler(product);
                toast.success("Item is successfully added", {
                  autoClose: 1000,
                });
              }}
            >
              <span>Add to Wishlist</span>
              <span className="btn-icon">
                <i className="bi bi-heart"></i>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
