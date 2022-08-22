export const filterReducer = (state, action) => {
  const initialState = {
    sort: "",
    categories: [],
    price: 1000,
    search: "",
  };

  switch (action.type) {
    case "SORT_BY_PRICE":
      return { ...state, sort: action.payload };

    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        categories: action.payload.isChecked
          ? [...state.categories, action.payload.value]
          : state.categories.filter(
              (category) => category !== action.payload.value
            ),
      };
    case "FILTER_BY_PRICE_RANGE":
      return {
        ...state,
        price: action.payload,
      };
    case "FILTER_BY_RATING":
      return {
        ...state,
        rating: action.payload,
      };
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    case "CLEAR_ALL":
      return initialState;

    default:
      return state;
  }
};
