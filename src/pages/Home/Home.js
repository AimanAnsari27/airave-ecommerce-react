import "../../App.css";
import { useData } from "../../Context/DataContext/DataContext";
import Category from "../../Components/Category/Category";
import { Link } from "react-router-dom";
export default function Home() {
  const { category } = useData();
  return (
    <div>
      {category === "loading" ? (
        <h1>LOADING....</h1>
      ) : (
        <>
          <div className='hero'>
            <div className='hero-image'>
              <img src='/Images/hero-image/hero-img.png' alt='hero-image' />
            </div>
            <div className='hero-section'>
              <h2>Enjoy your dream vacation</h2>
              <p className='gray-text h5'>Get upto 50% OFF on top brands</p>
              <Link to='/product'>
                <button className='btn btn-secondary'>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className='flex-align-center m-2'>
            <h4>Shop By Categories</h4>
          </div>
          <div className='flex-align-center gap-2'>
            {category.map((item) => (
              <Link to='/product'>
                <Category item={item} />
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
