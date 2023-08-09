import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import "./index.css";
import { CartProvider } from "./context/cart_context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </React.StrictMode>
);
