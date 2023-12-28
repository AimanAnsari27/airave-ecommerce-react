import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from "./Context/DataContext/DataContext";
import { AuthProvider } from "./Context/AuthContext/AuthContext";
import { CartProvider } from "./Context/DataContext/CartContext";
import { WishlistProvider } from "./Context/DataContext/WishlistContext";
import { OrderProvider } from "./Context/DataContext/OrderContext";
import { store } from "./AppStore/index";
// Call make Server
makeServer();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <WishlistProvider>
            <CartProvider>
              <DataProvider>
                <OrderProvider>
                  <App />
                </OrderProvider>
              </DataProvider>
            </CartProvider>
          </WishlistProvider>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
