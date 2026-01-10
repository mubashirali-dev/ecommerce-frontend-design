import { MdOutlineEmail } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="w-full mt-12 py-10 bg-gray-100">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-xl font-semibold">Subscribe our newsletter</h3>
        <p className="text-gray-500">
          Get daily news on upcomming offers from many suppliers all over the
          world
        </p>
        <div className="flex gap-3 pt-6">
          <div className="pl-2 flex items-center justify-center bg-white border-2 border-gray-200 rounded-md">
            <MdOutlineEmail className="text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Email"
              className="w-65 h-10 pl-1 text-gray-500 outline-none placeholder:text-gray-400"
            />
          </div>
          <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
