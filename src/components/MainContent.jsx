import React from "react";
import { BsGridFill, BsListUl } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import ListView from "./ListView";
import GridView from "./GridView";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import product5 from "../assets/products/product5.png";
import product6 from "../assets/products/product6.png";
import product7 from "../assets/products/product7.png";
import product8 from "../assets/products/product8.png";

const MainContent = ({
  activeFilters,
  toggleFilter,
  clearFilters,
  onProductClick,
}) => {
  const [view, setView] = React.useState("list");

  //  List View items
  const products = [
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      freeShipping: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      image: product1,
    },
    {
      id: 2,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: product2,
    },
    {
      id: 3,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: product3,
    },
    {
      id: 4,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: product4,
    },
    {
      id: 5,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: product5,
    },
    {
      id: 6,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 998.0,
      originalPrice: 1128.0,
      rating: 7.5,
      orders: 154,
      freeShipping: true,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
      image: product6,
    },
  ];

  /* 
     Grid View Data: 9 items 
  */
  const gridProducts = [
    {
      id: 1,
      name: "Canon Camera EOS 2000, Black 10x zoom",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product1,
    },
    {
      id: 2,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 5.9,
      image: product2,
    },
    {
      id: 3,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product3,
    },
    {
      id: 4,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product4,
    },
    {
      id: 5,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product5,
    },
    {
      id: 6,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product6,
    },
    {
      id: 7,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product7,
    },
    {
      id: 8,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product8,
    },
    {
      id: 9,
      name: "GoPro Hero6 4K Action Camera - Black",
      price: 99.5,
      originalPrice: 1128.0,
      rating: 7.5,
      image: product1,
    },
  ];

  const currentProducts = view === "grid" ? gridProducts : products;

  return (
    <div className="flex-1">
      {/* Top Bar */}
      <div className="bg-white border border-gray-200 rounded-md p-3 mb-5 flex justify-between items-center">
        <div className="text-gray-800">
          <span>12,911</span> items in{" "}
          <span className="font-semibold">Mobile accessory</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="rounded border-gray-300 accent-blue-600 h-4 w-4 cursor-pointer"
              defaultChecked
            />
            <span className="text-black text-sm">Verified only</span>
          </div>

          <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white">
            <select className="text-black text-sm outline-none bg-transparent">
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="flex border border-gray-300 rounded overflow-hidden">
            <button
              className={`p-2 ${
                view === "grid" ? "bg-gray-200" : "bg-white"
              } text-black hover:bg-gray-100`}
              onClick={() => setView("grid")}
            >
              <BsGridFill />
            </button>
            <button
              className={`p-2 ${
                view === "list" ? "bg-gray-200" : "bg-white"
              } text-black border-l border-gray-300`}
              onClick={() => setView("list")}
            >
              <BsListUl />
            </button>
          </div>
        </div>
      </div>

      {/* Active Filters */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {activeFilters.map((filter, index) => (
          <div
            key={index}
            className="flex items-center border border-blue-500 rounded px-3 py-1 bg-white"
          >
            <span className="text-gray-600 text-sm mr-2">{filter}</span>
            <RxCross2
              className="text-gray-500 cursor-pointer h-4 w-4"
              onClick={() => toggleFilter(filter)}
            />
          </div>
        ))}
        {activeFilters.length > 0 && (
          <button
            className="text-blue-500 font-semibold text-sm hover:underline ml-2 cursor-pointer"
            onClick={clearFilters}
          >
            Clear all filter
          </button>
        )}
      </div>

      {/* Product List */}
      <div
        className={`${
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            : ""
        }`}
      >
        {currentProducts.map((product) =>
          view === "grid" ? (
            <GridView
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          ) : (
            <ListView
              key={product.id}
              product={product}
              onClick={onProductClick}
            />
          )
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-5 space-x-2">
        <div className="flex items-center border border-gray-300 rounded px-2 py-1 bg-white mr-2">
          <span className="text-black text-sm mr-2">Show 10</span>
          <MdKeyboardArrowDown className="text-gray-500" />
        </div>

        <div className="flex border border-gray-300 rounded bg-white">
          <button className="px-3 py-1 border-r border-gray-300 text-gray-500 hover:bg-gray-100">
            <MdKeyboardArrowLeft />
          </button>
          <button className="px-3 py-1 border-r border-gray-300 text-gray-500 font-medium bg-gray-100">
            1
          </button>
          <button className="px-3 py-1 border-r border-gray-300 text-black hover:bg-gray-100">
            2
          </button>
          <button className="px-3 py-1 border-r border-gray-300 text-black hover:bg-gray-100">
            3
          </button>
          <button className="px-3 py-1 text-gray-500 hover:bg-gray-100">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
