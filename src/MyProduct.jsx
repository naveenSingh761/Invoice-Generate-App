import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { DataStore } from "./App";
import { Link, useLocation, useParams } from "react-router-dom";
import Header from "./Header";

const MyProduct = () => {
  const favoriteItem = useContext(DataStore);

  const { id: index } = useParams();
  const product = favoriteItem.initData[index - 1];
  const [toggeleRender, settoggeleRender] = useState(false);

  return (
    <>
      <Header />
      <div
        className="px-5 py-3  font-serif w-full h-screen 
      xsm:   md:   md:grid   md:grid-cols-2   lg:grid-cols-3  
        
"
      >
        <div className="md:flex md:myflex  ">
          <img
            src={product.thumbnail}
            alt={`${product.title}.png`}
            className="w-full  h-[50%] xsm:h-[70%]  object-fill md:h-[40%] lg:h-[60%] mb-1 lg:rounded-md shadow-air3 "
          />
        </div>
        <div className="md:flex  md:flex-col md:justify-center pl-5  lg:col-span-2 lg:px-[10rem]  ">
          <p className="text-end mt-3">
            {" "}
            <span
              className={`p-2 shadow-air3 text-xl bg-green-500 text-white font-alegreya-sans rounded-lg  ${
                product.stock === 0 ? "bg-red-800" : "bg-green-500"
              }  `}
            >
              {product.stock === 0 ? "Out of Stock" : "In Stock"}{" "}
            </span>
          </p>
          <p className="font-pacifico tracking-widest mr-2 font-bold xsm:text-2xl capitalize p-5 text-pink-700 ">
            {" "}
            {product.title}
          </p>
          <p className="text-slate-500 capitalize ">
            <span className="font-satisfy mr-2 font-bold   ">Category:</span>{" "}
            {product.category}
          </p>
          <p className="text-slate-500 capitalize ">
            <span className="font-satisfy mr-2 font-bold   ">Brand:</span>{" "}
            {product.brand}
          </p>
          <p className="text-slate-500 capitalize ">
            <span className="font-satisfy mr-2 font-bold   ">Desc:</span>{" "}
            {product.description}
          </p>
          <p className="text-slate-500 capitalize ">
            <span className="font-satisfy mr-2 font-bold   ">Rating </span>
            {product.rating}
          </p>
          <div className="tem xsm:flex justify-between items-center ">
            <p className="text-slate-500">
              <span className="font-satisfy mr-2 font-bold   ">Price </span>
              {product.price}
            </p>
            {product.stock !== 0 && (
              <div className="flex justify-center ">
                <button
                  className="p-2 shadow-air3 my-5   bg-blue-500 text-white rounded-lg"
                  onClick={() => {
                    favoriteItem.favProduct.push(index);
                    settoggeleRender(!toggeleRender);
                  }}
                >
                  {favoriteItem.favProduct.includes(index)
                    ? "Added to Cart"
                    : "Add To Cart"}
                </button>
              </div>
            )}
          </div>
          <div className="flex justify-center ">
            <Link to="/mycart">
              <button className="p-1 mt-3 md:mt-10  ">
                <span className="bg-pink-500 p-2 rounded-lg text-white font-pacifico shadow-air1    tracking-[2px] ">
                  Mycart
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProduct;
