import { CartProduct } from "../../Components/Cart/Cartproduct";
import { CartTotalPriceTable } from "../../Components/Cart/CartTotalPriceTable";
import '../../Components/Cart/Cart.css';
export default function Cart(){
    return(
            <div className="cart">
                <div className="cart-container">
                    <CartProduct />
                </div>
                <div className="price-table">
                <CartTotalPriceTable />

                </div>
                
             </div>
    
    )
}