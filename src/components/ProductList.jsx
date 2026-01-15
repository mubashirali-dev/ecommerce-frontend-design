import img1 from "../assets/Image/cloth/img1.png";
import img2 from "../assets/Image/cloth/img2.png";
import img3 from "../assets/Image/cloth/img3.png";
import img5 from "../assets/Image/cloth/img5.png";
import img8 from "../assets/Image/cloth/img8.png";
import img4 from "../assets/Image/cloth/img4.png";
import img6 from "../assets/Image/cloth/img6.png";
import headset from "../assets/Image/tech/hedset.png";
import watch from "../assets/Image/tech/smrtwch.png";
import pot from "../assets/Image/tech/jug.png";
import rug from "../assets/Image/interior/rug.png";

const products = [
  {
    name: "Men Blazers Sets Elegant Formal",
    price: "$7.00 - $99.50",
    img: img3,
  },
  {
    name: "Men Shirt Sleeve Polo Contrast",
    price: "$7.00 - $99.50",
    img: img1,
  },
  { name: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: img2 },
  {
    name: "Basketball Crew Socks Long Stuff",
    price: "$7.00 - $89.50",
    img: img8,
  },
  {
    name: "New Summer Men's castrol T-Shirts",
    price: "$7.00 - $99.50",
    img: img5,
  },
];

const YouMayLike = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-4 w-70 h-fit hidden lg:block">
      <h3 className="font-semibold text-gray-900 mb-4">You may like</h3>
      <div className="space-y-4">
        {products.map((p, i) => (
          <div key={i} className="flex gap-3">
            <div className="w-16 h-16 border border-gray-200 rounded p-1 shrink-0">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-gray-800 line-clamp-2">{p.name}</h4>
              <span className="text-gray-500 text-xs block mt-1">
                {p.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const RelatedProducts = () => {
  const related = [
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: img4 },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: watch },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: headset },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: img6 },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: pot },
    { name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: rug },
  ];
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 mb-8">
      <h3 className="font-semibold text-xl text-gray-900 mb-6">
        Related products
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {related.map((p, i) => (
          <div key={i}>
            <div className="bg-gray-100 rounded-md h-35 p-2 mb-2 flex justify-center items-center">
              <img
                src={p.img}
                alt={p.name}
                className="max-h-full max-w-full object-contain mix-blend-multiply"
              />
            </div>
            <h4 className="text-gray-700 text-sm mb-1">{p.name}</h4>
            <span className="text-gray-500 text-sm">{p.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouMayLike;
