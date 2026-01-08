import { useState } from "react";
import bannerBg from "../assets/Image/backgrounds/Banner.png";
import { FaUserCircle } from "react-icons/fa";

const HeroSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <div className="w-full flex justify-center py-5">
      <div className="w-[80%] mx-auto">
        <div className="border border-gray-200 rounded-md p-4 flex gap-4 min-h-100">
          {/* Left - Sidebar */}
          <div className="w-64 shrink-0">
            <ul className="space-y-1">
              {categories.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`px-3 py-2 rounded-md cursor-pointer text-gray-700 hover:bg-gray-100 ${
                    activeCategory === index
                      ? "bg-blue-100 text-black font-medium"
                      : "hover:text-black"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </div>

          {/* Middle - Banner */}
          <div className="relative flex-1 rounded-md">
            <img
              className="w-full h-full object-cover"
              src={bannerBg}
              alt="Banner Image"
            />
            <div className="absolute top-12 left-10">
              <h3 className="text-2xl">Latest trending</h3>
              <h2 className="text-3xl font-bold mb-4">Electronic items</h2>
              <button className="px-5 py-2 bg-white font-medium rounded-md shadow-sm hover:shadow-md">
                Learn more
              </button>
            </div>
          </div>

          {/* Right - Cards */}
          <div className="w-56 flex shrink-0 flex-col gap-3">
            {/* User Card */}
            <div className="bg-blue-50 p-3 rounded-md">
              <div className="flex items-center gap-3 mb-3">
                <div>
                  <FaUserCircle
                    size={45}
                    className="text-blue-200 bg-white rounded-full"
                  />
                </div>
                <div>
                  <p>Hi, user</p>
                  <p>let's get started</p>
                </div>
              </div>
              <button className="w-full py-1.5 mb-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
                Join now
              </button>
              <button className="w-full py-1.5 bg-white text-blue-600 border border-gray-200 text-sm font-medium rounded-md hover:bg-gray-50">
                Log in
              </button>
            </div>
            {/* Orange Promo */}
            <div className="flex-1 bg-orange-400 p-4 rounded-md text-white">
              <p className="w-32 leading-tight">
                Get US $10 off with a new supplier
              </p>
            </div>
            {/* Teal Promo */}
            <div className="flex-1 bg-teal-500 p-4 rounded-md text-white">
              <p className="w-32 leading-tight">
                Send quotes with supplier preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
