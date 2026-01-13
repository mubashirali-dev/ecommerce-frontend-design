import { IoIosStar } from "react-icons/io";
import { BsDot } from "react-icons/bs";
import { MdCheck } from "react-icons/md";

const ProductInfo = () => {
  return (
    <div className="flex-1">
      {/* Title & Status */}
      <div className="mb-3">
        <span className="text-green-500 font-medium text-sm flex items-center mb-1">
          <MdCheck className="mr-1" /> In stock
        </span>
        <h1 className="text-xl font-semibold text-gray-900 leading-snug">
          Mens Long Sleeve T-shirt Cotton Base <br /> Layer Slim Muscle
        </h1>
      </div>

       {/* Ratings */}
      <div className="flex items-center space-x-2 mb-4 text-sm text-gray-500">
        <div className="flex text-orange-400">
             {[...Array(5)].map((_, i) => (
                <IoIosStar key={i} className={i < 4 ? "text-orange-500" : "text-gray-300"} />
             ))}
             <span className="text-orange-500 font-semibold ml-1">9.3</span>
        </div>
        <BsDot />
        <span>32 reviews</span>
        <BsDot />
        <span>154 sold</span>
      </div>

       {/* Pricing Box */}
       <div className="bg-orange-50 p-4 flex gap-8 mb-6 rounded-md">
            <div className="pl-2 border-l-2 border-transparent">
               <span className="text-red-500 text-xl font-bold block">$98.00</span>
               <span className="text-gray-500 text-xs">50-100 pcs</span>
            </div>
            <div className="pl-4 border-l border-gray-300">
               <span className="text-gray-900 text-xl font-bold block">$90.00</span>
               <span className="text-gray-500 text-xs">100-700 pcs</span>
            </div>
            <div className="pl-4 border-l border-gray-300">
               <span className="text-gray-900 text-xl font-bold block">$78.00</span>
               <span className="text-gray-500 text-xs">700+ pcs</span>
            </div>
       </div>

       {/* Attributes Table */}
       <div className="mb-6">
           <div className="grid grid-cols-[120px_1fr] gap-y-2 text-sm">
                <span className="text-gray-500">Price:</span>
                <span className="text-gray-900">Negotiable</span>

                <hr className="col-span-2 border-gray-100 my-1" />

                <span className="text-gray-500">Type:</span>
                <span className="text-gray-900">Classic shoes</span>

                <span className="text-gray-500">Material:</span>
                <span className="text-gray-900">Plastic material</span>

                <span className="text-gray-500">Design:</span>
                <span className="text-gray-900">Modern nice</span>
           </div>
       </div>

        <hr className="border-gray-200 mb-6" />

        {/* Features */}
       <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
            <span className="text-gray-500">Customization:</span>
            <span className="text-gray-900">Customized logo and <br/> design custom packages</span>

            <span className="text-gray-500">Protection:</span>
            <span className="text-gray-900">Refund Policy</span>

            <span className="text-gray-500">Warranty:</span>
            <span className="text-gray-900">2 years full warranty</span>
       </div>

    </div>
  );
};

export default ProductInfo;
