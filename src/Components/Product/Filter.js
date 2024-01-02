import { useEffect } from "react";
import { useData } from "../../Context/DataContext/DataContext";
import {
  sortbyPrice,
  filterByCategory,
  filterByPriceRange,
  filterByRating,
  filterBySearch,
  clearAll,
} from "../../Features/filterReducers";
import { getCategories } from "../../Features/dataReducers";
import { useDispatch, useSelector } from "react-redux";
import { FilterProduct } from "./Reducer/FilterProduct";
export const Filter = () => {
  // const {
  //   state: { categories, sort, rating, search },
  //   dispatch,
  //   category,
  // } = useData();
  const dispatch = useDispatch();
  const productsData = useSelector((state) => state.products.productSlice);

  const filter = useSelector((state) => state.filters);
  console.log("filter value", filter);
  const categories = useSelector(
    (state) => state.products.categorySlice.categories
  );
  console.log("categories", categories);
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  // useEffect(() => {
  //   FilterProduct(productsData, filter);
  // }, [filter, categories]);
  return (
    <div>
      <div className="flex pd-1 gap-4">
        <span>Filter</span>
        <span
          className="filter-text"
          onClick={() => {
            dispatch(clearAll());
          }}
        >
          Clear All
        </span>
      </div>
      <hr />

      <div className="mt-1">
        <ul className="list-item">
          <li className="text-primary">Sort By</li>
          <li>
            <input
              type="radio"
              name="price-sort"
              id="high-to-low"
              onChange={() => dispatch(sortbyPrice("HighToLow"))}
              checked={filter.sort === "HighToLow" ? true : false}
            ></input>
            <span className="gray-text">Price - High to Low</span>
          </li>
          <li>
            <input
              type="radio"
              name="price-sort"
              id="low-to-high"
              onChange={() => dispatch(sortbyPrice("LowToHigh"))}
              checked={filter.sort === "LowToHigh" ? true : false}
            ></input>
            <span className="gray-text">Price - Low to high</span>
          </li>
        </ul>
      </div>
      <div className="mb-1 mt-1">
        <ul className="list-item">
          <li className="text-primary">Categories</li>
          {categories &&
            categories.map(({ categoryName }) => (
              <li>
                <input
                  type="checkbox"
                  value={categoryName.toLocaleLowerCase()}
                  aria-label={categories}
                  onChange={(e) => {
                    // dispatch({
                    //   type: "FILTER_BY_CATEGORY",
                    //   payload: {
                    //     isChecked: e.target.checked,
                    //     value: e.target.value,
                    //   },
                    // });
                    dispatch(
                      filterByCategory({
                        isChecked: e.target.checked,
                        value: e.target.value,
                      })
                    );
                  }}
                  checked={filter.categories.includes(
                    categoryName.toLowerCase()
                  )}
                />
                <span className="gray-text">{categoryName}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="mb-1 mt-1">
        <ul className="list-item">
          <li className="text-primary">Rating</li>
          <li>
            <label className="gray-text">
              <input
                type="radio"
                value="4"
                name="rating"
                onChange={() => {
                  // dispatch({
                  //   type: "FILTER_BY_RATING",
                  //   payload: "4",
                  // });
                  dispatch(filterByRating(4));
                }}
                checked={filter.rating === 4 ? true : false}
              />
              4 star and above
            </label>
          </li>
          <li>
            <label className="gray-text">
              <input
                type="radio"
                value="4"
                name="rating"
                onChange={() => {
                  dispatch(filterByRating(3));
                }}
                checked={filter.rating === 3 ? true : false}
              />
              3 star and above
            </label>
          </li>
          <li>
            <label className="gray-text">
              <input
                type="radio"
                value="4"
                name="rating"
                onChange={() => {
                  dispatch(filterByRating(2));
                }}
                checked={filter.rating === 2 ? true : false}
              />
              2 star and above
            </label>
          </li>
        </ul>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div className="flex pd-1 gap-4">
  //       <span>Filter</span>
  //       <span
  //         className="filter-text"
  //         onClick={() => {
  //           dispatch({
  //             type: "CLEAR_ALL",
  //             payload: "clear",
  //           });
  //         }}
  //       >
  //         Clear All
  //       </span>
  //     </div>
  //     <hr />

  //     <div className="mt-1">
  //       <ul className="list-item">
  //         <li className="text-primary">Sort By</li>
  //         <li>
  //           <input
  //             type="radio"
  //             name="price-sort"
  //             id="high-to-low"
  //             onChange={() =>
  //               dispatch({
  //                 type: "SORT_BY_PRICE",
  //                 payload: "HighToLow",
  //               })
  //             }
  //             checked={sort === "HighToLow" ? true : false}
  //           ></input>
  //           <span className="gray-text">Price - High to Low</span>
  //         </li>
  //         <li>
  //           <input
  //             type="radio"
  //             name="price-sort"
  //             id="low-to-high"
  //             onChange={() =>
  //               dispatch({
  //                 type: "SORT_BY_PRICE",
  //                 payload: "LowToHigh",
  //               })
  //             }
  //             checked={sort === "LowToHigh" ? true : false}
  //           ></input>
  //           <span className="gray-text">Price - Low to high</span>
  //         </li>
  //       </ul>
  //     </div>
  //     <div className="mb-1 mt-1">
  //       <ul className="list-item">
  //         <li className="text-primary">Categories</li>
  //         {category.map(({ categoryName }) => (
  //           <li>
  //             <input
  //               type="checkbox"
  //               value={categoryName.toLocaleLowerCase()}
  //               aria-label={category}
  //               onChange={(e) => {
  //                 dispatch({
  //                   type: "FILTER_BY_CATEGORY",
  //                   payload: {
  //                     isChecked: e.target.checked,
  //                     value: e.target.value,
  //                   },
  //                 });
  //               }}
  //               checked={categories.includes(categoryName.toLowerCase())}
  //             />
  //             <span className="gray-text">{categoryName}</span>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //     <div className="mb-1 mt-1">
  //       <ul className="list-item">
  //         <li className="text-primary">Rating</li>
  //         <li>
  //           <label className="gray-text">
  //             <input
  //               type="radio"
  //               value="4"
  //               name="rating"
  //               onChange={() => {
  //                 dispatch({
  //                   type: "FILTER_BY_RATING",
  //                   payload: "4",
  //                 });
  //               }}
  //               checked={rating === "4" ? true : false}
  //             />
  //             4 star and above
  //           </label>
  //         </li>
  //         <li>
  //           <label className="gray-text">
  //             <input
  //               type="radio"
  //               value="4"
  //               name="rating"
  //               onChange={() => {
  //                 dispatch({
  //                   type: "FILTER_BY_RATING",
  //                   payload: "3",
  //                 });
  //               }}
  //               checked={rating === "3" ? true : false}
  //             />
  //             3 star and above
  //           </label>
  //         </li>
  //         <li>
  //           <label className="gray-text">
  //             <input
  //               type="radio"
  //               value="4"
  //               name="rating"
  //               onChange={() => {
  //                 dispatch({
  //                   type: "FILTER_BY_RATING",
  //                   payload: "2",
  //                 });
  //               }}
  //               checked={rating === "2" ? true : false}
  //             />
  //             2 star and above
  //           </label>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
};
