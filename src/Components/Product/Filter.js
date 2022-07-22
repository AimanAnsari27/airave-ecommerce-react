import { useData } from "../../Context/DataContext/DataContext";

export const Filter = () => {
  const {
    state: { categories, sort, price, rating },
    dispatch,
    category,
  } = useData();
  return (
    <div>
      <div class='flex pd-1 gap-4'>
        <span>Filter</span>
        <span
          class='filter-text'
          onClick={() => {
            dispatch({
              type: "CLEAR_ALL",
              payload: "clear",
            });
          }}
        >
          Clear All
        </span>
      </div>
      <hr />

      <div class='mt-1'>
        <ul class='list-item'>
          <li className='text-primary'>Sort By</li>
          <li>
            <input
              type='radio'
              name='price-sort'
              id='high-to-low'
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "HighToLow",
                })
              }
              checked={sort === "HighToLow" ? true : false}
            ></input>
            <span className='gray-text'>Price - High to Low</span>
          </li>
          <li>
            <input
              type='radio'
              name='price-sort'
              id='low-to-high'
              onChange={() =>
                dispatch({
                  type: "SORT_BY_PRICE",
                  payload: "LowToHigh",
                })
              }
              checked={sort === "LowToHigh" ? true : false}
            ></input>
            <span className='gray-text'>Price - Low to high</span>
          </li>
        </ul>
      </div>
      <div class='mb-1 mt-1'>
        <ul class='list-item'>
          <li className='text-primary'>Categories</li>
          {category.map(({ categoryName }) => (
            <li>
              <input
                type='checkbox'
                value={categoryName.toLocaleLowerCase()}
                aria-label={category}
                onChange={(e) => {
                  dispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: {
                      isChecked: e.target.checked,
                      value: e.target.value,
                    },
                  });
                }}
                checked={categories.includes(categoryName.toLowerCase())}
              />
              <span className='gray-text'>{categoryName}</span>
            </li>
          ))}
        </ul>
      </div>
      <div class='mb-1 mt-1'>
        <ul class='list-item'>
          <li className='text-primary'>Rating</li>
          <li>
            <label className='gray-text'>
              <input
                type='radio'
                value='4'
                name='rating'
                onChange={() => {
                  dispatch({
                    type: "FILTER_BY_RATING",
                    payload: "4",
                  });
                }}
                checked={rating === "4" ? true : false}
              />
              4 star and above
            </label>
          </li>
          <li>
            <label className='gray-text'>
              <input
                type='radio'
                value='4'
                name='rating'
                onChange={() => {
                  dispatch({
                    type: "FILTER_BY_RATING",
                    payload: "3",
                  });
                }}
                checked={rating === "3" ? true : false}
              />
              3 star and above
            </label>
          </li>
          <li>
            <label className='gray-text'>
              <input
                type='radio'
                value='4'
                name='rating'
                onChange={() => {
                  dispatch({
                    type: "FILTER_BY_RATING",
                    payload: "2",
                  });
                }}
                checked={rating === "2" ? true : false}
              />
              2 star and above
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};
