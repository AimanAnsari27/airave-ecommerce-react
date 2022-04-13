import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from "./Context/DataContext/DataContext";
import { AuthProvider } from "./Context/AuthContext/AuthContext";
import { CartProvider } from "./Context/DataContext/CartContext";
import { WishlistProvider } from "./Context/DataContext/WishlistContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <WishlistProvider>

      <CartProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </CartProvider>
    </WishlistProvider>

    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
