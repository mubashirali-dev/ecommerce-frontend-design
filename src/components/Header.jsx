import { FaUserAlt, FaHeart, FaShoppingBag } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoMdCart } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Header = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="w-[80%] h-20 mx-auto px-2 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-blue-500 p-2.5 shadow-[5px_0_0_#dae5fd] rounded-lg">
            <HiOutlineShoppingBag className="text-white text-xl" />
          </div>
          <span className="text-3xl font-bold text-[#8CB7F5]">Brand</span>
        </div>

        {/* Searchbar */}
        <div className="flex items-center flex-1 max-w-2xl mx-8">
          <input
            className="w-full h-10 px-4 py-2 border-2 border-r-0 border-blue-500 rounded-l-md outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="h-10 p-1.5 pr-2 border-2 border-blue-500 border-r-0">
            <select
              className="pr-2 outline-none cursor-pointer hover:bg-gray-50"
              name="inputCategory"
              id="inputC"
            >
              <option value="All category">All category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
          <button className="h-10 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-r-md tracking-wide">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center cursor-pointer text-gray-400">
            <FaUserAlt size={20} />
            <span className="text-xs mt-1">Profile</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-gray-400">
            <MdMessage size={22} />
            <span className="text-xs mt-1">Message</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-gray-400">
            <FaHeart size={20} />
            <span className="text-xs mt-1">Orders</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer text-gray-400">
            <IoMdCart size={22} />
            <span className="text-xs mt-1">My Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
