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
import { favoriteItem } from "./App.jsx";
import Header from "./Header.jsx";
import ProductCard from "./ProductCard.jsx";

const Home = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    if (data.length === 0) {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((res) => {
          setData(res.products);
          favoriteItem.initData = res.products;
        });
    }
  }, []);

  return (
    <>
      <Header />
      {data.length !== 0 && <ProductCard data={data} setData={setData} />}
    </>
  );
};

export default Home;
