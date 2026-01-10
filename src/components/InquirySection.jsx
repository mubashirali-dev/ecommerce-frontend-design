import React from "react";
import inquiryimg from "../assets/Image/backgrounds/inquiryimg.png";

const InquirySection = () => {
  return (
    <div className="w-full pt-5">
      <div className="w-[80%] h-120 mx-auto rounded-md">
        <div
          className="w-full flex bg-center bg-cover bg-no-repeat overflow-hidden rounded-md"
          style={{ backgroundImage: `url(${inquiryimg})` }}
        >
          {/* Left Text */}
          <div className="flex flex-col p-10 pr-40">
            <h2 className="text-4xl font-semibold text-white">
              An easy way to send requests to all suppliers
            </h2>
            <p className="pt-5 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              quibusdam eius? Adipisci, aspernatur!
            </p>
          </div>
          {/* Right Form */}
          <div className="p-8">
            <form className="w-125 p-5 flex flex-col gap-5 bg-white rounded-md">
              <h4 className="text-2xl font-semibold">
                Send quotes to suppliers
              </h4>
              <input
                type="text"
                placeholder="What item you need?"
                className="px-3 py-2 border border-gray-200 text-lg outline-none rounded-md placeholder:text-black placeholder:text-lg"
              />
              <textarea
                name=""
                id=""
                placeholder="Type more detail"
                className="px-3 py-2 border border-gray-200 text-lg outline-none rounded-md placeholder:text-lg"
              ></textarea>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Quantity"
                  className="px-3 py-2 border border-gray-200 text-lg rounded-md outline-none  placeholder:text-black placeholder:text-lg"
                />
                <div className="border border-gray-200 rounded-md">
                  <select
                    name=""
                    id=""
                    className="mr-2 px-3 py-2 pr-10 text-lg outline-none "
                  >
                    <option value="Pcs">Pcs</option>
                  </select>
                </div>
              </div>
              <button className="w-fit px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer">
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquirySection;
