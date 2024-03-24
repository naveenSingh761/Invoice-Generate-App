import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "./App.jsx";
import Features from "./Features.jsx";

const ProductCard = ({ data, setData }) => {
  // "id","title","description","price","discountPercentage","rating","stock","brand","category","thumbnail","images",

  const favoriteItem = useContext(DataStore);
  const dataCopy = useMemo(() => [...data], []);
  console.log("ProductCard ~ dataCopy:", dataCopy);
  const [toggeleRender, settoggeleRender] = useState(false);
  const [filterState, setFilterState] = useState({
    sort: "default",
    gt_price: "default",
  });

  useEffect(() => {
    if (
      filterState.sort === "default" ||
      (filterState.gt_price === 0 && dataCopy.length !== 0)
    )
      setData((prev) => [...dataCopy]);
    else if (filterState.sort === "highToLow")
      setData((prev) => [...prev].sort((a, b) => b.price - a.price));
    else if (filterState.sort === "lowToHigh")
      setData((prev) => [...prev].sort((a, b) => a.price - b.price));
    if (filterState.gt_price !== "default") {
      const gtPrice = parseFloat(filterState.gt_price);
      setData((prev) => {
        let sorted = prev.filter((item) => item.price >= gtPrice);
        return sorted;
      });
    }
  }, [filterState]);

  useEffect(() => {
    console.log("Data", data);
    console.log("DataCopy", dataCopy);
  }, [data]);

  return (
    <>
      <Features filterState={filterState} setFilterState={setFilterState} />

      <div className="w-full lg:pr-10 flex  justify-center xsm:justify-end mr-10 p-2">
        <Link to={"/mycart"}>
          <span className="font-satisfy shadow-air3  bg-pink-600 p-2 text-white rounded-lg">
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
              className=" my-2 shadow-md m-1 h hover:shadow-air3 transition-all duration-500 hover:-translate-y-3   border-dotted px-5 py-3 font-serif  xsm:h-[300px]  lg:h-[350px]
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
                  className="p-1 mt-1 hover:shadow-air3 text-blue-900 bg-slate-200 hover:bg-black  hover:text-white border-b-2 font-serif md:tracking-widest border-pink-400 md:px-2 hover:border-[2px] hover:border-blue-600 rounded-lg"
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
