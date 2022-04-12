import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from "./Context/DataContext/DataContext";
import { AuthProvider } from "./Context/AuthContext/AuthContext";
import { CartProvider } from "./Context/DataContext/CartContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
