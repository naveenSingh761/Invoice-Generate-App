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

const Header = () => {
  return (
    <div
      className="h-[50px] shadow-2xl  sticky top-0 z-10 w-full flex myflex tracking-wider
    font-pacifico md:text-2xl  lg:text-4xl bg-slate-200
    "
    >
      Products on Sale
    </div>
  );
};

export default Header;
