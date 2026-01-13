import { FaHeart } from "react-icons/fa";
import { MdOutlineVerifiedUser, MdLanguage } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const SupplierCard = () => {
  return (
    <div className="w-[280px] border border-gray-200 rounded-md p-4 bg-white shadow-sm h-fit">
      
      {/* Supplier Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
          <div className="w-10 h-10 bg-blue-100 rounded text-blue-600 font-bold flex justify-center items-center text-xl">
              R
          </div>
          <div>
              <h4 className="font-semibold text-gray-900">Supplier</h4>
              <p className="text-gray-500 text-sm">Guanjoi Trading LLC</p>
          </div>
      </div>

       {/* Flags / Info */}
      <div className="space-y-3 mb-6 text-sm text-gray-500">
           <div className="flex items-center gap-2">
               {/* Using placeholder for flag, or just icon */}
               <img src="https://flagcdn.com/w20/de.png" alt="Germany" className="w-5 h-auto object-contain" />
               <span>Germany, Berlin</span>
           </div>
           <div className="flex items-center gap-2">
               <MdOutlineVerifiedUser className="text-gray-500 text-lg" />
               <span>Verified Seller</span>
           </div>
           <div className="flex items-center gap-2">
               <MdLanguage className="text-gray-500 text-lg" />
               <span>Worldwide shipping</span>
           </div>
      </div>

       {/* Buttons */}
      <div className="flex flex-col gap-2">
          <button className="bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 transition-colors">
              Send inquiry
          </button>
          <button className="bg-white border border-gray-200 text-gray-900 rounded-md py-2 font-medium hover:bg-gray-50 transition-colors">
              Seller's profile
          </button>
      </div>
      
       {/* Save for later */}
      <div className="flex justify-center items-center gap-2 mt-6 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors">
          <FaHeart className="text-sm" />
          <span className="font-medium text-sm">Save for later</span>
      </div>

    </div>
  );
};

export default SupplierCard;
