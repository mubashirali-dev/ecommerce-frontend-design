import service1 from "../assets/Image/backgrounds/service1.png";
import service2 from "../assets/Image/backgrounds/service2.png";
import service3 from "../assets/Image/backgrounds/service3.png";
import service4 from "../assets/Image/backgrounds/service4.png";
import { IoMdSearch } from "react-icons/io";
import { FaBoxArchive } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { MdOutlineSecurity } from "react-icons/md";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      image: service1,
      icon: <IoMdSearch size={26} />,
      title1: "Source from",
      title2: "Industry Hubs",
    },
    {
      id: 2,
      image: service2,
      icon: <FaBoxArchive size={22} />,
      title1: "Customize Your",
      title2: "Products",
    },
    {
      id: 3,
      image: service3,
      icon: <IoMdSend size={26} />,
      title1: "Fast, reliable shipping",
      title2: "by ocean or air",
    },
    {
      id: 4,
      image: service4,
      icon: <MdOutlineSecurity size={26} />,
      title1: "Product monitoring",
      title2: "and inspection",
    },
  ];

  return (
    <div className="w-full pt-8">
      <div className="w-[80%] mx-auto">
        <h2 className="pb-8 text-3xl font-semibold">Recommended items</h2>
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col rounded-md">
              {/* Image */}
              <div className="relative bg-transparent">
                <img
                  className="w-full overflow-hidden rounded-t-md"
                  src={service.image}
                  alt=""
                />
                {/* Icon */}
                <div className="absolute w-15 h-15 inset-0 mt-25 ml-55 flex items-center justify-center bg-blue-200 border-2 border-white rounded-full">
                  {service.icon}
                </div>
              </div>
              {/* Detail */}
              <div className="p-3 font-semibold border-2 border-gray-200 border-t-0 rounded-b-md">
                <p className="pr-20 text-lg text-neutral-800">
                  {service.title1}
                </p>
                <p className="pr-28 text-lg text-neutral-800">
                  {service.title2}
                </p>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
