import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import googlePlay from "../assets/Misc/button1.png";
import appleStore from "../assets/Misc/button2.png";
import logo from "../assets/brand/logo.png";

const Footer = () => {
  return (
    <div className="w-full">
      {/* Footer Content Section */}
      <div className="bg-white">
        <div className="w-[80%] mx-auto py-10 flex items-center">
          <div className="w-60 flex flex-col gap-4">
            <img src={logo} alt="" className="w-40 h-12" />
            <p>
              Best information about company gies here but now lorem ipsum is
            </p>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-400 text-white rounded-full cursor-pointer">
                <FaFacebookF />
              </div>
              <div className="p-2 bg-gray-400 text-white rounded-full cursor-pointer">
                <FaTwitter />
              </div>
              <div className="p-2 bg-gray-400 text-white rounded-full cursor-pointer">
                <FaLinkedinIn />
              </div>
              <div className="p-2 bg-gray-400 text-white rounded-full cursor-pointer">
                <TiSocialInstagram />
              </div>
              <div className="p-2 bg-gray-400 text-white rounded-full cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>
          <div className="pl-20 grid grid-cols-5 text-gray-400 text-lg gap-15">
            <div className="flex flex-col">
              <h4 className="pb-2 text-black font-semibold">About</h4>
              <a href="">About Us</a>
              <a href="">Find Store</a>
              <a href="">Categories</a>
              <a href="">Blogs</a>
            </div>
            <div className="flex flex-col">
              <h4 className="pb-2 text-black font-semibold">Partnership</h4>
              <a href="">About Us</a>
              <a href="">Find Store</a>
              <a href="">Categories</a>
              <a href="">Blogs</a>
            </div>
            <div className="flex flex-col">
              <h4 className="pb-2 text-black font-semibold">Information</h4>
              <a href="">Help Center</a>
              <a href="">Money Refund</a>
              <a href="">Shipping</a>
              <a href="">Contact Us</a>
            </div>
            <div className="flex flex-col">
              <h4 className="pb-2 text-black text-lg font-semibold">
                For Users
              </h4>
              <a href="">Login</a>
              <a href="">Register</a>
              <a href="">Settings</a>
              <a href="">My Orders</a>
            </div>
            <div className="flex flex-col">
              <h4 className="pb-2 text-black text-lg font-semibold">Get app</h4>
              <div className="pt-2 flex flex-col gap-2">
                <img src={appleStore} alt="" className="w-30 cursor-pointer" />
                <img src={googlePlay} alt="" className="w-30 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-100">
        <div className="w-[80%] mx-auto py-6 text-neutral-600 text-lg flex justify-between items-center">
          {/* Left Copyright */}
          <p>© 2023 Ecommerce.</p>
          {/* Right Country */}
          <select name="" id="" className="outline-none">
            <option value="English">English</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
