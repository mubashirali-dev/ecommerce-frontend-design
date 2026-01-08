import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="w-full border-b border-gray-200">
      <div className="w-[80%] h-13 mx-auto px-2 flex justify-between items-center font-medium">
        {/* Right */}
        <div className="flex justify-between items-center">
          <IoMdMenu size={24} className="mr-3 cursor-pointer" />
          <div className="flex gap-8">
            <a href="">All category</a>
            <a href="">Hot offers</a>
            <a href="">Gift boxes</a>
            <a href="">Projects</a>
            <a href="">Menu items</a>
            <select className="pr-1 outline-none" name="dropDown1" id="">
              <option value="Help">Help</option>
            </select>
          </div>
        </div>
        {/* Left */}
        <div className="flex justify-between items-center gap-8">
          <div className="">
            <select className="pr-1 outline-none" name="dropDownLanguage" id="">
              <option value="English, USD">English, USD</option>
              <option value="English, USD">English, UK</option>
            </select>
          </div>
          <div className="">
            <select className="pr-1 outline-none" name="dropDownCountry" id="">
              <option value="Germany">Ship to US</option>
              <option value="USA">Ship to UK</option>
              <option value="UK">Ship to DE</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
