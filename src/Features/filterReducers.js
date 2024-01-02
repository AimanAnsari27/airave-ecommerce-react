import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "",
  categories: [],
  price: 1000,
  rating: 1,
  search: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortbyPrice: (state, action) => {
      return {
        ...state,
        sort: action.payload,
      };
    },
    filterByCategory: (state, action) => {
      return {
        ...state,
        categories: action.payload.isChecked
          ? [...state.categories, action.payload.value]
          : state.categories.filter(
              (category) => category !== action.payload.value
            ),
      };
    },
    filterByPriceRange: (state, action) => {
      return {
        ...state,
        price: action.payload,
      };
    },
    filterByRating: (state, action) => {
      return {
        ...state,
        rating: action.payload,
      };
    },
    filterBySearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    clearAll: (state, action) => {
      return initialState;
    },
  },
});

export const {
  sortbyPrice,
  filterByCategory,
  filterByPriceRange,
  filterByRating,
  filterBySearch,
  clearAll,
} = filterSlice.actions;
export default filterSlice.reducer;
