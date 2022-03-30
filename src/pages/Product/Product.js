import { products } from "../../backend/db/products"
export default function Product(){
    return(
        <div>
            <div className="flex-align-center m-2">
            <h4>Top Deals</h4>
        </div>
        <div className="flex-align-center gap-2">
            {products.map((item)=>
                <div className="card box-shadow-bottom">
                    <img className="img-sm" src={item.image} alt={item.title}/>
                    <div className="card-title flex-align-center pd--5">
                       Upto {item.discount} OFF
                    </div>
                </div>
            )}
        </div>
       </div>
    )
}