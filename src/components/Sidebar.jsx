import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

const Sidebar = ({ toggleFilter, activeFilters = [] }) => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 999999 });
  const [selectedCondition, setSelectedCondition] = useState("Any");

  const [sections, setSections] = useState({
    category: true,
    brands: true,
    features: true,
    priceRange: false,
    condition: false,
    ratings: false,
    manufacturer: false,
  });

  const toggleSection = (section) => {
    setSections({ ...sections, [section]: !sections[section] });
  };

  const categories = [
    "Mobile accessory",
    "Electronics",
    "Smartphones",
    "Modern tech",
  ];

  const brands = ["Samsung", "Apple", "Huawei", "Poco", "Lenovo"];
  const features = [
    "Metallic",
    "Plastic cover",
    "8GB Ram",
    "Super power",
    "Large Memory",
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex text-orange-400 text-sm">
        {[...Array(5)].map((_, i) => (
          <IoIosStar
            key={i}
            className={i < rating ? "text-orange-500" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-[230px] shrink-0 hidden lg:block pr-4">
      {/* Category */}
      <div className="border-t border-gray-200 py-2">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h3 className="font-semibold">Category</h3>
          {sections.category ? (
            <MdKeyboardArrowUp className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" />
          )}
        </div>
        {sections.category && (
          <ul className="space-y-2 text-gray-600 cursor-pointer">
            {categories.map((cat, index) => (
              <li key={index} className="hover:text-blue-600 transition-colors">
                {cat}
              </li>
            ))}
            <li className="text-blue-500 text-sm mt-2 hover:underline">
              See all
            </li>
          </ul>
        )}
      </div>

      {/* Brands */}
      <div className="border-t border-gray-200 py-2">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection("brands")}
        >
          <h3 className="font-semibold">Brands</h3>
          {sections.brands ? (
            <MdKeyboardArrowUp className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" />
          )}
        </div>
        {sections.brands && (
          <ul className="space-y-2">
            {brands.map((brand, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 accent-blue-600 h-4 w-4 cursor-pointer"
                  checked={activeFilters.includes(brand)}
                  onChange={() => toggleFilter(brand)}
                />
                <span>{brand}</span>
              </li>
            ))}
            <li className="text-blue-500 text-sm mt-2 hover:underline cursor-pointer">
              See all
            </li>
          </ul>
        )}
      </div>

      {/* Features */}
      <div className="border-t border-gray-200 py-2">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection("features")}
        >
          <h3 className="font-semibold">Features</h3>
          {sections.features ? (
            <MdKeyboardArrowUp className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" />
          )}
        </div>
        {sections.features && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 accent-blue-600 h-4 w-4 cursor-pointer"
                  checked={activeFilters.includes(feature)}
                  onChange={() => toggleFilter(feature)}
                />
                <span>{feature}</span>
              </li>
            ))}
            <li className="text-blue-500 text-sm mt-2 hover:underline cursor-pointer">
              See all
            </li>
          </ul>
        )}
      </div>

      {/* Price Range */}
      <div className="border-t border-gray-200 py-2">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection("priceRange")}
        >
          <h3 className="font-semibold">Price range</h3>
          {sections.priceRange ? (
            <MdKeyboardArrowUp className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" />
          )}
        </div>
        {sections.priceRange && (
          <>
            {/* CSS for dual slider interaction */}
            <style>{`
          .range-slider-thumb::-webkit-slider-thumb {
            pointer-events: auto;
            appearance: none;
            height: 16px;
            width: 16px;
            background: #ffffff;
            border: 1px solid #bfdbfe;
            border-radius: 50%;
            cursor: pointer;
            margin-top: 0px; /* center thumb */
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
          .range-slider-thumb::-moz-range-thumb {
            pointer-events: auto;
            appearance: none;
            height: 16px;
            width: 16px;
            background: #ffffff;
            border: 1px solid #bfdbfe;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          }
          /* Remove default track styles so our custom div shows */
          .range-slider-thumb::-webkit-slider-runnable-track {
            background: transparent; 
            height: 100%;
          }
          .range-slider-thumb::-moz-range-track {
            background: transparent;
            height: 100%;
          }
        `}</style>

            {/* Dual Range Slider */}
            <div className="relative w-full h-4 mb-4 mt-2">
              {/* Background Track (Gray) */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-1 bg-blue-100 rounded-lg z-0"></div>
              {/* Active Range Track (Blue) */}
              <div
                className="absolute top-1/2 -translate-y-1/2 h-1 bg-blue-500 rounded-lg z-10"
                style={{
                  left: `${(priceRange.min / 999999) * 100}%`,
                  right: `${100 - (priceRange.max / 999999) * 100}%`,
                }}
              ></div>

              <input
                type="range"
                min="0"
                max="999999"
                value={priceRange.min}
                onChange={(e) => {
                  const value = Math.min(
                    Number(e.target.value),
                    priceRange.max - 1
                  );
                  setPriceRange({ ...priceRange, min: value });
                }}
                className="range-slider-thumb absolute pointer-events-none appearance-none z-20 h-full w-full bg-transparent p-0 margin-0 outline-none focus:outline-none"
              />
              <input
                type="range"
                min="0"
                max="999999"
                value={priceRange.max}
                onChange={(e) => {
                  const value = Math.max(
                    Number(e.target.value),
                    priceRange.min + 1
                  );
                  setPriceRange({ ...priceRange, max: value });
                }}
                className="range-slider-thumb absolute pointer-events-none appearance-none z-20 h-full w-full bg-transparent p-0 margin-0 outline-none focus:outline-none"
              />
            </div>

            <div className="flex space-x-2 mb-3">
              <div className="w-1/2">
                <label>Min</label>
                <input
                  type="number"
                  value={priceRange.min}
                  onChange={(e) => {
                    let val = Number(e.target.value);
                    if (val < 0) val = 0;
                    if (val >= priceRange.max) val = priceRange.max - 1;
                    setPriceRange({ ...priceRange, min: val });
                  }}
                  placeholder="0"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-1/2">
                <label>Max</label>
                <input
                  type="number"
                  value={priceRange.max}
                  onChange={(e) => {
                    let val = Number(e.target.value);
                    if (val > 999999) val = 999999;
                    if (val <= priceRange.min) val = priceRange.min + 1;
                    setPriceRange({ ...priceRange, max: val });
                  }}
                  placeholder="999999"
                  className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <button className="w-full py-1 text-blue-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 text-sm font-medium transition-colors">
              Apply
            </button>
          </>
        )}
      </div>

      {/* Condition */}
      <div className="border-t border-gray-200 py-2">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection("condition")}
        >
          <h3 className="font-semibold">Condition</h3>
          {sections.condition ? (
            <MdKeyboardArrowUp className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" />
          )}
        </div>
        {sections.condition && (
          <ul className="space-y-2">
            {["Any", "Refurbished", "Brand new", "Old items"].map((item, i) => (
              <li key={i} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="condition"
                  className="accent-blue-600 outline-none cursor-pointer h-4 w-4"
                  checked={selectedCondition === item}
                  onChange={() => setSelectedCondition(item)}
                />
                <span
                  className={`${
                    selectedCondition === item ? "text-black" : "text-gray-600"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Ratings */}
      <div className="border-t border-gray-200 py-2">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection("ratings")}
        >
          <h3 className="font-semibold">Ratings</h3>
          {sections.ratings ? (
            <MdKeyboardArrowUp className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" />
          )}
        </div>
        {sections.ratings && (
          <ul className="space-y-2">
            {[5, 4, 3, 2].map((r, i) => (
              <li
                key={i}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="rounded border-gray-300 accent-blue-600 h-4 w-4 cursor-pointer"
                  checked={activeFilters.includes(`${r} star`)}
                  onChange={() => toggleFilter(`${r} star`)}
                />
                <StarRating rating={r} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Manufacturer */}
      <div className="border-t border-gray-200 py-4">
        <div
          className="flex justify-between items-center mb-2 cursor-pointer"
          onClick={() => toggleSection("manufacturer")}
        >
          <h3 className="font-semibold">Manufacturer</h3>
          {sections.manufacturer ? (
            <MdKeyboardArrowUp className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown className="text-gray-500" />
          )}
        </div>
        {sections.manufacturer && (
          <ul className="space-y-2 text-gray-600 cursor-pointer">
            <li className="hover:text-blue-600 transition-colors">Samsung</li>
            <li className="hover:text-blue-600 transition-colors">Apple</li>
            <li className="hover:text-blue-600 transition-colors">Huawei</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
