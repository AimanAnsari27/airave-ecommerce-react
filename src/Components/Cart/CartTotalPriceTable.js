export const CartTotalPriceTable = () =>{
    return(
        <div class="price-table bg-light-gray-2">
            <span class="h5 b-800">Price Details</span><hr />
                <div class="flex justify-space-between">
                    <span>Price</span><span class="cart-value">Rs.4999</span>
                </div>
            <div class="flex justify-space-between">
                <span>Discount</span><span>Rs.-1999</span>
            </div>
            <div class="flex justify-space-between">
                <span>Discount</span><span>Rs.-1999</span>
            </div>     
            <hr /> 
            <div class="flex justify-space-between">
                <span class="h5 b-800">Total Amount</span><span>Rs.5999</span>
            </div>      
            <hr />
                  <span class="justify-space-between">You save Rs.99 in this order</span>
            <button class="btn btn-accent width-100">Place Order</button>
        </div>
    )
}