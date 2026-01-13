import { MdKeyboardArrowRight } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto flex items-center space-x-2 text-sm text-gray-500 py-5">
        <span className="hover:text-gray-800 cursor-pointer transition-colors">
          Home
        </span>
        <MdKeyboardArrowRight className="text-gray-400 text-lg" />
        <span className="hover:text-gray-800 cursor-pointer transition-colors">
          Clothings
        </span>
        <MdKeyboardArrowRight className="text-gray-400 text-lg" />
        <span className="hover:text-gray-800 cursor-pointer transition-colors">
          Men's wear
        </span>
        <MdKeyboardArrowRight className="text-gray-400 text-lg" />
        <span className="text-gray-400">Summer clothing</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
