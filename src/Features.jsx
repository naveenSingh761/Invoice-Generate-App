import React, { useEffect, useState } from "react";

const Features = ({ filterState, setFilterState }) => {
  useEffect(() => {
    console.log("Features ~ filterState: Line 89", filterState);
  }, [filterState]);

  const [inputValue, setInputValue] = useState("");
  return (
    <div className="font-serif mb-2 sm:items-center flex flex-col gap-4 xsm:gap-4 md:gap-0 sm:flex-row  sm:justify-around">
      <div id="sorting">
        <label
          htmlFor="sort"
          className="font-bold text-orange-500 xsm:shadow-air3 p-1 xsm:p-2 font-pacifico "
        >
          Sort by:
        </label>
        <select
          className="md:pl-3 lg:pl-5 font-serif md:tracking-widest"
          onChange={(event) => {
            setFilterState((prev) => ({
              ...prev,
              sort: event.target.value,
            }));
          }}
        >
          <option value="default">Apply filter</option>
          <option value="highToLow"> High to Low</option>
          <option value="lowToHigh"> Low to High</option>
        </select>
      </div>

      <div id="filtering">
        <label
          htmlFor="priceInput"
          className="font-bold xsm:shadow-air3 p-1 xsm:p-2 font-pacifico text-orange-500"
        >
          Minimum Price:
        </label>
        <input
          type="number"
          value={Math.max(0, inputValue) === 0 ? "" : inputValue}
          min="0"
          className="placeholder:sm:pl-5 pl-1  w-[3rem] xsm:w-auto   mr-2 border-b-2 border-red-500  outline-none lg:mx-4 rounded-2xl focus:border-blue-600 "
          placeholder="Enter price"
          onChange={(event) => {
            setInputValue((prev) => event.target.value);
          }}
        />
        <button
          className="py-1  px-3 rounded-2xl bg-slate-500 hover:bg-slate-700 hover:scale-105 text-white "
          onClick={() => {
            setFilterState((prev) => ({
              ...prev,
              gt_price: Math.max(0, inputValue),
            }));
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default Features;
