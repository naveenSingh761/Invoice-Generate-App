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
import { DataStore } from "./App.jsx";

const ProductCard = ({ data }) => {
  // "id","title","description","price","discountPercentage","rating","stock","brand","category","thumbnail","images",
  const favoriteItem = useContext(DataStore);
  const [toggeleRender, settoggeleRender] = useState(false);

  return (
    <>
      <div className="text-end mr-10 p-2">
        <Link to={"/mycart"}>
          <span className="font-satisfy bg-pink-600 p-2 text-white rounded-lg">
            {" "}
            My Cart 🔸
          </span>
        </Link>
      </div>
      <div className=" xsm:grid xsm:grid-cols-2   md:grid-cols-3">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className=" my-2 border-dotted px-5 py-3 font-serif  xsm:h-[300px]  lg:h-[350px]
          "
            >
              <Link to={{ pathname: `product/${item.id}` }}>
                <img
                  src={item.thumbnail}
                  alt={`${item.title}.png`}
                  className="w-full  h-[50%] xsm:h-[60%]  object-fill md:h-[80%] lg:h-[80%] mb-1 "
                />
                <p> {item.title}</p>
              </Link>

              <div className="tem xsm:flex justify-between items-center ">
                <p>Price {item.price}</p>
                <button
                  className="p-1 mt-1 text-blue-900 bg-slate-200 rounded-lg"
                  onClick={() => {
                    favoriteItem.favProduct.push(item.id);
                    settoggeleRender(!toggeleRender);
                  }}
                >
                  {favoriteItem.favProduct.includes(item.id)
                    ? "Added to Cart"
                    : "Add To Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ProductCard;
