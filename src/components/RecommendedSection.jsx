import shirt from "../assets/Image/cloth/img1.png";
import jacket from "../assets/Image/cloth/img2.png";
import coat from "../assets/Image/cloth/img3.png";
import wallet from "../assets/Image/cloth/img4.png";
import bag from "../assets/Image/cloth/img5.png";
import shorts from "../assets/Image/cloth/img6.png";
import hedset from "../assets/Image/tech/hedset.png";
import jug from "../assets/Image/tech/jug.png";
import pot from "../assets/Image/interior/pot.png";

const RecommendedSection = () => {
  const products = [
    {
      id: 1,
      image: shirt,
      price: "$10.30",
      name: "T-shirts with multiple colors, for men",
    },
    {
      id: 2,
      image: jacket,
      price: "$10.30",
      name: "Jeans shorts for men blue color",
    },
    {
      id: 3,
      image: coat,
      price: "$12.50",
      name: "Brown winter coat medium size",
    },
    {
      id: 4,
      image: wallet,
      price: "$34.00",
      name: "Jeans bag for travel for men",
    },
    {
      id: 5,
      image: bag,
      price: "$99.00",
      name: "Leather wallet",
    },
    {
      id: 6,
      image: shorts,
      price: "$9.99",
      name: "Canon camera black, 100x zoom",
    },
    {
      id: 7,
      image: hedset,
      price: "$8.99",
      name: "Headset for gaming with mic",
    },
    {
      id: 8,
      image: bag,
      price: "$10.30",
      name: "Smartwatch silver color modern",
    },
    {
      id: 9,
      image: pot,
      price: "$10.30",
      name: "Blue wallet for men leather material",
    },
    {
      id: 10,
      image: jug,
      price: "$80.95",
      name: "Jeans bag for travel for men",
    },
  ];

  return (
    <div className="w-full pt-8">
      <div className="w-[80%] mx-auto">
        <h2 className="pb-8 text-3xl font-semibold">Recommended items</h2>
        <div className="grid grid-cols-5 gap-5">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-2 flex flex-col border-2 border-gray-200 rounded-md"
            >
              <div className="p-2">
                <div className="flex items-center justify-center">
                  <img
                    className="w-50 h-50 bg-cover"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="pt-4 flex flex-col">
                  <p className="font-semibold text-lg">{product.price}</p>
                  <p className="text-gray-400 text-lg">{product.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedSection;
