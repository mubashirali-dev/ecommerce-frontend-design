import React from "react";

const DiscountBanner = () => {
  return (
    <div className="bg-blue-600 rounded-md p-6 lg:p-10 flex justify-between items-center text-white mb-6">
        <div>
            <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2>
            <p className="text-blue-100 text-sm">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition-colors">
            Shop now
        </button>
    </div>
  );
};

export default DiscountBanner;
