import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataStore } from "./App";
import { useReactToPrint } from "react-to-print";
const Mycart = () => {
  const favoriteItem = useContext(DataStore);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const { initData: cartItems, favProduct } = favoriteItem;
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="w-screen h-screen max-w-[98vw]  p-5 " ref={componentRef}>
      <div className="fixed b-5 w-[90%]  flex justify-center bottom-5 p-2 font-serif print:hidden ">
        <button onClick={handlePrint}>
          <span className="bg-pink-400 p-3 rounded-lg text-blue-800 shadow-air3">
            Generate Invoice
          </span>
        </button>
      </div>
      <div className=" justify-between hidden print:flex my-2 mb-5">
        <p className="text-4xl text-blue-800 font-Roboto font-bold">Invoice</p>
        <p className="text-2xl text-blue-800 font-Roboto font-bold">
          Xyz Company
        </p>
      </div>

      <div className="my-2 hidden print:block border-b-2 border-blue-500"></div>

      <div className="w-[40vw] font-semibold  hidden print:block">
        <span className="font-serif text-2xl">Address:</span> <br />
        125 Main Street, <br /> Pincode: 325008 <br /> Lucknow, India
      </div>
      <p className="py-5 text-2xl font-pacifico">Cart Item</p>
      {favProduct.map((id, index) => {
        return (
          <div key={index}>
            <ProductCard
              id={id}
              cartItems={cartItems}
              favProduct={favProduct}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          </div>
        );
      })}
      <div className="my-2 border-b-2 border-blue-500"></div>

      {favProduct.length === 0 && <EmptyCart />}
      <AmounttoPay totalPrice={totalPrice} />
    </div>
  );
};

export default Mycart;

const ProductCard = ({
  id,
  cartItems,
  favProduct,
  totalPrice,
  setTotalPrice,
}) => {
  const [intiQuantity, setIntiQuantity] = useState(1);

  useEffect(() => {
    setTotalPrice((prev) => +prev + cartItems[id - 1].price);
  }, [intiQuantity]);

  return (
    <div className="text-slate-700 font-serif px-2 lg:px-10">
      <span className="font-bold mr-3 uppercase">Product Name</span>
      {cartItems[id - 1].title}
      <br />
      <span className="font-bold mr-3 uppercase">description</span>
      {cartItems[id - 1].description}

      <div className="flex flex-col xsm:flex-row items-center xsm:justify-around my-2">
        <p className="font-bold">
          Quantity :
          <button
            className="px-3   mx-1 "
            onClick={() => {
              setIntiQuantity((prev) => Math.max(0, +prev + 1));
            }}
          >
            +
          </button>
          {intiQuantity}
          <span
            className="px-3   mx-1"
            onClick={() => {
              setIntiQuantity((prev) => Math.max(1, +prev - 1));
            }}
          >
            -
          </span>
        </p>
        <p className="font-bold">
          Price {intiQuantity * cartItems[id - 1].price}
        </p>
      </div>
    </div>
  );
};

const AmounttoPay = ({ totalPrice }) => {
  return (
    <div className="  items-end md:p-16  font-sans">
      <p className="text-end">
        {" "}
        <span className=" font-serif m-5 ">Subtotal : </span> {totalPrice}{" "}
      </p>
      <p className="text-end">
        {" "}
        <span className=" font-serif m-5 ">Gst 18% : </span>{" "}
        {Number(0.18 * totalPrice).toFixed(2)}{" "}
      </p>
      <div className="my-2 border-b-2 border-slate-200"></div>

      <p className="text-end">
        {" "}
        <span className=" font-serif m-5 ">Total Price : </span>{" "}
        <span className="font-bold">
          {Number(1.18 * totalPrice).toFixed(2)}{" "}
        </span>
      </p>
      <div className="my-2 border-b-2 border-slate-200"></div>
    </div>
  );
};

const EmptyCart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <>
      <div className="text-center py-5 mt-5 font-pacifico tracking-wider text-pink-500 bg-slate-300">
        <p>Your Cart is empty, Shop More</p>
      </div>
    </>
  );
};
