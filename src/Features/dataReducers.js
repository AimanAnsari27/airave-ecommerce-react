import axios from "axios";
import { combineReducers } from "@reduxjs/toolkit";
// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useReducer,
// } from "react";
// import { filterReducer } from "../../Components/Product";

// const initialState = {
//   sort: "",
//   categories: [],
//   price: 1000,
//   rating: 1,
//   search: "",
// };

// const DataContext = createContext();

// const useData = () => useContext(DataContext);

// const DataProvider = ({ children }) => {
//   const [category, setCategory] = useState([]);
//   const [product, setProduct] = useState([]);
//   const [state, dispatch] = useReducer(filterReducer, initialState);

//   // getting categories
//   useEffect(() => {
//     try {
//       (async () => {
//         let res = await axios.get("/api/categories");
//         setCategory(res.data.categories);
//       })();
//     } catch (err) {
//       console.log("something went wrong");
//     }
//   }, []);
//   if (category === undefined) {
//     setCategory("loading");
//   }

//   // getting products
//   useEffect(() => {
//     try {
//       (async () => {
//         let productResponse = await axios.get("/api/products");
//         setProduct(productResponse.data.products);
//       })();
//     } catch (err) {
//       console.log("something went wrong");
//     }
//   }, []);
//   return (
//     <DataContext.Provider value={{ category, product, state, dispatch }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export { useData, DataProvider };

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // sort: "",
  // categories: [],
  // price: 1000,
  // rating: 1,
  // search: "",
  data: [],
  isLoading: false,
  isError: false,
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get("/api/products");
    return response.data.products;
  }
);

export const getCategories = createAsyncThunk(
  "products/getCategories",
  async () => {
    const response = await axios.get("/api/categories");
    return response.data.categories;
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default combineReducers({
  productSlice: productSlice.reducer,
  categorySlice: categorySlice.reducer,
});
