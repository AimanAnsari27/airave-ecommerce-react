import { useCart } from "../../Context/DataContext/CartContext"
export const CartTotalPriceTable = () =>{
    const {cart} = useCart()
    
    const totalPrice = cart.item.reduce((acc, cv) => {
        return acc + (cv.price)*cv.qty
    },0)

    const totalDiscount = cart.item.reduce((acc, cv) =>{
        return acc +(cv.price*(cv.discount/100))*cv.qty
    },0)

    const totalAmount = cart.item.reduce((acc,cv) =>{
        return totalPrice - totalDiscount
    },0)

    return(
        <div class="price-table bg-light-gray-2">
            <span class="h5 b-800">Price Details</span><hr />
                <div class="flex justify-space-between">
                    <span>Price</span><span class="cart-value">{totalPrice}</span>
                </div>
            <div class="flex justify-space-between">
                <span>Discount</span><span>Rs.{totalDiscount}</span>
            </div>
              
            <hr /> 
            <div class="flex justify-space-between">
                <span class="h5 b-800">Total Amount</span><span>Rs.{totalAmount}</span>
            </div>      
            <hr />
                  <span class="justify-space-between">You save Rs.{totalDiscount} in this order</span>
            <button class="btn btn-accent width-100 mt-2">Place Order</button>
        </div>
    )
}