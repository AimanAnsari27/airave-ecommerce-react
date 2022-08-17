import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useCart } from "../../Context/DataContext/CartContext";
import { useOrder } from "../../Context/DataContext/OrderContext";
import { toast } from "react-toastify";
export const CartTotalPriceTable = () => {
  const { cart, clearCart } = useCart();
  const {
    state: { email },
  } = useAuth();
  const totalPrice = cart.item.reduce((acc, cv) => {
    if (cv.qty >= 1) {
      return acc + cv.price * cv.qty;
    } else {
      return acc;
    }
  }, 0);

  const totalDiscount = cart.item.reduce((acc, cv) => {
    return acc + cv.price * (cv.discount / 100) * cv.qty;
  }, 0);

  const totalAmount = cart.item.reduce((acc, cv) => {
    return totalPrice - totalDiscount;
  }, 0);
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const loadRazorpayScript = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("razorpay is not working");
      return;
    }
    const options = {
      key: "rzp_test_GH9xkKAWH9nvae",
      currency: "INR",
      amount: totalAmount * 100,
      email: email,
      name: "Airave Mart",
      handler: function (response) {
        toast.success("Order Successful");
        clearCart();
      },
      prefill: {
        email: email !== "" ? email : "testuser123@gmail.com",
        contact: "9876543210",
      },
      theme: {
        color: "#2E9161",
      },
    };
    const razorpayObj = new window.Razorpay(options);
    razorpayObj.open();
  };
  return (
    <div class='price-table bg-light-gray-2'>
      <span class='h5 b-800'>Price Details</span>
      <hr />
      <div class='flex justify-space-between'>
        <span>Price</span>
        <span class='cart-value'>{totalPrice}</span>
      </div>
      <div class='flex justify-space-between'>
        <span>Discount</span>
        <span>Rs.{totalDiscount}</span>
      </div>

      <hr />
      <div class='flex justify-space-between'>
        <span class='h5 b-800'>Total Amount</span>
        <span>Rs.{totalAmount}</span>
      </div>
      <hr />
      <span class='justify-space-between'>
        You save Rs.{totalDiscount} in this order
      </span>
      <button
        class='btn btn-secondary width-100 mt-2'
        onClick={() => {
          loadRazorpayScript();
        }}
      >
        Place Order
      </button>
    </div>
  );
};
