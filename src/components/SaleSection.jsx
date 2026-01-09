import { useState, useEffect } from "react";
import smrtwch from "../assets/Image/tech/smrtwch.png";
import lptp from "../assets/Image/tech/lptp.png";
import gpcam from "../assets/Image/tech/gpcam.png";
import hedphn from "../assets/Image/tech/hedphn.png";
import cancam from "../assets/Image/tech/cancam.png";

const SaleSection = () => {
  const items = [
    { name: "Smart watches", image: smrtwch, discount: 25 },
    { name: "Laptops", image: lptp, discount: 15 },
    { name: "GoPro cameras", image: gpcam, discount: 40 },
    { name: "Headphones", image: hedphn, discount: 25 },
    { name: "Canon cameras", image: cancam, discount: 25 },
  ];

  //   Setting Date & Time
  const [dealEndTime] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 2);
    return date;
  });

  //   Calculating Sale Time
  const calculateTimeLeft = (targetDate) => {
    const difference = targetDate - new Date();

    const format = (num) => num.toString().padStart(2, "0");

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        min: "00",
        sec: "00",
      };
    }

    return {
      days: format(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: format(Math.floor((difference / (1000 * 60 * 60)) % 24)),
      min: format(Math.floor((difference / 1000 / 60) % 60)),
      sec: format(Math.floor((difference / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(dealEndTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(dealEndTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [dealEndTime]);

  return (
    <div className="w-full pt-5 flex items-center justify-center">
      <div className="w-[80%] mx-auto flex border-2 border-gray-200 rounded-md">
        {/* Time */}
        <div className="p-5 pr-15 shrink-0">
          <h3 className="font-medium text-xl">Deals and Offer</h3>
          <p className="text-sm text-gray-500 leading-3">Hygiene equipments</p>
          {/* Countdown */}
          <div className="flex gap-2 mt-6">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className="w-12 h-12 pt-1 flex flex-col items-center justify-center bg-neutral-500 text-white rounded-md "
              >
                <span className="font-bold leading-none">{value}</span>
                <span className="text-[15px] capitalize">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="flex">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-5 px-6 flex flex-col items-center justify-center border-l-2 border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover cursor-pointer"
              />
              <p className="pt-5 cursor-pointer">{item.name}</p>
              <p className="px-4 py-1 mt-2 flex items-center justify-center bg-red-100 font-semibold text-red-500 rounded-2xl cursor-pointer">
                -{item.discount}%
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleSection;
