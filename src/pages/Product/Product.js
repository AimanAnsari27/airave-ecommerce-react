import { Filter } from "../../Components/Product/Filter";
import { SingleProducts, FilterProduct } from "../../Components/Product";
import { useData } from "../../Context/DataContext/DataContext";
import "../../Components/Product/Product.css";

export default function Product() {
  const { product, state } = useData();
  let allSortedProducts = FilterProduct(product, state);
  console.log(allSortedProducts);
  return (
    <div className='product-container'>
      <div className='filters'>
        <Filter />
      </div>
      <div className='flex-col'>
        <h5 className='m-2'>
          Total number of products :{" "}
          <span className='gray-text'>{allSortedProducts.length} Items</span>
        </h5>

        <div className='product-listing'>
          <SingleProducts product={allSortedProducts} />
        </div>
      </div>
    </div>
  );
}
