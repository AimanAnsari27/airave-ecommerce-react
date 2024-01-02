// import { Filter } from "../../Components/Product/Filter";
// import { SingleProducts, FilterProduct } from "../../Components/Product";
// import { useData } from "../../Context/DataContext/DataContext";
// import "../../Components/Product/Product.css";
// import { getProducts } from "../../Features/dataReducers";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// export default function Product() {
//   const { product, state } = useData();
//   const dispatch = useDispatch();
//   const productsData = useSelector((state) => state);
//   console.log(productsData);
//   useEffect(() => {
//     dispatch(getProducts());
//   }, []);
//   let allSortedProducts = FilterProduct(product, state);
//   return (
//     <div className="product-container">
//       <div className="filters">
//         <Filter />
//       </div>
//       <div className="flex-col">
//         <h5 className="m-2">
//           Total number of products :{" "}
//           <span className="gray-text">{allSortedProducts.length} Items</span>
//         </h5>

//         <div className="product-listing">
//           {allSortedProducts.length > 0 ? (
//             <SingleProducts product={allSortedProducts} />
//           ) : (
//             <h5>Not found</h5>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { Filter } from "../../Components/Product/Filter";
import { SingleProducts, FilterProduct } from "../../Components/Product";
import { useData } from "../../Context/DataContext/DataContext";
import "../../Components/Product/Product.css";
import { getProducts } from "../../Features/dataReducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function Product() {
  const { product, state } = useData();
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products.productSlice);
  const filters = useSelector((state) => state.filters);
  console.log(productsData);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  // useEffect(() => {
  //   console.log("sorted products", allSortedProducts);
  // });
  // console.log("sorted products", allSortedProducts);
  useEffect(() => {
    let allSortedProducts = FilterProduct(productsData, state);

    console.log("*********sorted products", allSortedProducts);
  }, [filters]);
  return (
    <div className="product-container">
      <div className="filters">
        <Filter />
      </div>
      <div className="flex-col">
        <h5 className="m-2">
          Total number of products :{" "}
          <span className="gray-text">
            {productsData && productsData.data.length} Items
          </span>
        </h5>

        <div className="product-listing">
          {productsData && productsData.data.length > 0 ? (
            <SingleProducts product={productsData.data} />
          ) : (
            <h5>Not found</h5>
          )}
        </div>
      </div>
    </div>
  );
}
