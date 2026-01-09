const ItemGroup = ({ section }) => {
  return (
    <div className="w-full pt-5">
      <div className="w-[80%] mx-auto flex border-2 border-b-0 border-gray-200 rounded-md">
        {/* Banner */}
        <div
          className="w-75 h-65 p-5 bg-cover flex flex-col shrink-0"
          style={{ backgroundImage: `url(${section.bannerImage})` }}
        >
          <div className="">
            <h3 className="text-xl font-semibold w-32">
              {section.categoryName}
            </h3>
            <button className="mt-4 px-4 py-2 bg-white rounded-md font-medium text-sm shadow-sm cursor-pointer">
              {section.buttonText}
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="flex-1 grid grid-cols-4">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="border-l border-b border-gray-200 p-4 pt-5 flex cursor-pointer hover:shadow-lg transition-shadow relative"
            >
              <div className="flex flex-col justify-start z-10">
                <p>{item.title}</p>
                <p className="text-xs text-gray-400 mt-2">
                  From <br /> USD {item.price}
                </p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain absolute bottom-2 right-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemGroup;
