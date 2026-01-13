import React from "react";
import { IoIosStar } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const GridView = ({ product, onClick }) => {
  return (
    <div 
        className="bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow bg-white h-full flex flex-col justify-between overflow-hidden cursor-pointer"
        onClick={onClick}
    >
        
      {/* Image Container */}
      <div className="flex justify-center items-center h-[280px] py-8 border-b border-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
                <span className="font-semibold text-xl text-gray-900">${product.price}</span>
                <span className="text-gray-400 line-through">${product.originalPrice}</span>
            </div>
             {/* Heart Icon Button */}
            <div 
                className="p-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 text-blue-500"
                onClick={(e) => {
                    e.stopPropagation();
                    // Add wishlist logic here later
                }}
            >
                <FaRegHeart />
            </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2 mb-2">
            <div className="flex text-orange-400 text-sm">
                 {[...Array(5)].map((_, i) => (
                    <IoIosStar key={i} className={i < 4 ? "text-orange-500" : "text-gray-300"} />
                 ))}
             </div>
             <span className="text-orange-500 text-sm font-semibold">{product.rating}</span>
        </div>

        {/* Title */}
        <h3 className="text-gray-600 pr-20">
           {product.name}
        </h3>
      </div>
    </div>
  );
};

export default GridView;
