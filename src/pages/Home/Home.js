import '../../App.css'
import Category from "../../Components/Category/Category";
import Product from "../Product/Product";
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
           <Category/>
           <Product/>
           
            
        </div>
           
    )
}