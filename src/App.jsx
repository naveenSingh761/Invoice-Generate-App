import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Myproduct from "./MyProduct.jsx";
import MyCart from "./MyCart.jsx";
import Home from "./Home.jsx";
import ProductCard from "./ProductCard.jsx";
import Header from "./Header.jsx";

export const DataStore = createContext();
export const favoriteItem = {
  initData: null,
  favProduct: [],
};
const App = () => {
  return (
    <BrowserRouter>
      <DataStore.Provider value={favoriteItem}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="product/:id" Component={Myproduct} />
          <Route path="mycart" Component={MyCart} />
          <Route path="mycart" Component={MyCart} />
        </Routes>
      </DataStore.Provider>
    </BrowserRouter>
  );
};

export default App;
