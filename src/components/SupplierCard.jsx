import { MdOutlineVerifiedUser, MdLanguage } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import flag from "../assets/flags/DE@2x.png";

const SupplierCard = () => {
  return (
    <div className="w-70  h-fit">
      <div className="w-full border border-gray-200 rounded-md p-4 shadow-sm">
        {/* Supplier Header */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
          <div className="w-10 h-10 bg-teal-100 rounded text-[#4CA7A7] font-semibold flex justify-center items-center text-2xl">
            R
          </div>
          <div>
            <h4>Supplier</h4>
            <p className="text-sm">Guanjoi Trading LLC</p>
          </div>
        </div>

        {/* Flags / Info */}
        <div className="space-y-3 mb-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img
              src={flag}
              alt="Germany"
              className="w-5 h-auto object-contain"
            />
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
      </div>

      {/* Save for later */}
      <div className="flex justify-center items-center gap-2 mt-6 cursor-pointer text-blue-500 hover:text-blue-600 transition-colors">
        <FaRegHeart size={18} />
        <span className="font-medium text-sm">Save for later</span>
      </div>
    </div>
  );
};

export default SupplierCard;
