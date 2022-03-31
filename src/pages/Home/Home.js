import '../../App.css'
import Category from "../../Components/Category/Category";
import Product from '../../Components/Product/Product';
import { categories } from '../../backend/db/categories';
import { products } from '../../backend/db/products';
export default function Home(){
    return(
        <div>
            <div className="hero">
                <div className="hero-section">
                    <h2>Enjoy your dream vacation</h2>
                    <p className="gray-text h5">Get upto 50% OFF on top brands</p>
                    <button className="btn btn-primary">Shop Now</button>
                </div>
                <div className="hero-image">
                    <img src="/Images/hero-image/hero-img.avif" alt='hero-image'/>
                </div>
            </div>
            <div className="flex-align-center m-2">
                <h4>Shop By Categories</h4>
            </div>
            <div className="flex-align-center gap-2">
                {categories.map((item)=>
                    <Category item={item}/>
                )}
            </div>
            <div className="flex-align-center m-2">
                <h4>Top Deals</h4>
            </div>
            <div className="flex-align-center gap-2">
                {products.map((prod)=>
                    <Product prod={prod}/>
                )}
            </div>
        </div>
           
    )
}