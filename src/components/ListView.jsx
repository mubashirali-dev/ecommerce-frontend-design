import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const ListView = ({ product, onClick }) => {
  return (
    <div
      className="flex bg-white border border-gray-200 rounded-md p-5 mb-4 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-40 h-40 shrink-0 flex items-center justify-center mr-6 p-2">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full object-contain mix-blend-multiply"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* Header: Title & Wishlist */}
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-[17px] font-medium hover:text-blue-600 cursor-pointer">
              {product.name}
            </h3>
            <button
              className="text-blue-500 hover:text-blue-600 transition-colors bg-white border border-gray-200 rounded p-2 outline-none shadow-sm cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <FaRegHeart />
            </button>
          </div>

          {/* Price & Rating */}
          <div className="flex items-baseline space-x-3 mb-1">
            <span className="text-xl font-semibold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 font-semibold text-sm line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-3 mb-2">
            <div className="flex text-orange-400">
              {[...Array(5)].map((_, i) =>
                i < Math.floor(product.rating) ? (
                  <IoIosStar key={i} />
                ) : (
                  <IoIosStarOutline key={i} className="text-gray-300" />
                )
              )}
            </div>
            <span className="text-orange-400 font-medium">
              {product.rating}
            </span>
            <span className="text-gray-300">•</span>
            <span className="text-gray-500">{product.orders} orders</span>
            {product.freeShipping && (
              <>
                <span className="text-gray-300">•</span>
                <span className="text-green-500">Free Shipping</span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-500 line-clamp-2 pr-25">
            {product.description}
          </p>
          <div className="mt-1">
            <button className="text-blue-600 font-semibold outline-none hover:underline cursor-pointer">
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
