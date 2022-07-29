import { CartProduct } from "../../Components/Cart/Cartproduct";
import { CartTotalPriceTable } from "../../Components/Cart/CartTotalPriceTable";
import "../../Components/Cart/Cart.css";
import { useCart } from "../../Context/DataContext/CartContext";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import Login from "../Login/Login";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const { cart } = useCart();
  const { state } = useAuth();
  const { isAuthenticated } = state;
  console.log("CART", cart);
  return (
    <div>
      {isAuthenticated ? (
        cart.item === undefined ? (
          <h1>loading....</h1>
        ) : cart.item.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className='cart'>
              <div className='cart-container'>
                {cart.item.map((product) => {
                  return <CartProduct product={product} key={product._id} />;
                })}
              </div>
              <div className='price-table'>
                <CartTotalPriceTable />
              </div>
            </div>
          </>
        )
      ) : (
        <div>
          <Login />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
