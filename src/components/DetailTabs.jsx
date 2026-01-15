import React, { useState } from "react";
import { MdCheck } from "react-icons/md";

const DetailTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");
  const tabs = ["Description", "Reviews", "Shipping", "About seller"];

  return (
    <div className="bg-white border border-gray-200 rounded-md p-6">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 font-medium text-sm transition-colors ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content (Description) */}
      <div className="text-gray-600 text-sm leading-relaxed mb-6">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam,
        </p>
        <div className="bg-gray-50 p-3 border-l-4 border-gray-300 italic text-gray-500 mb-4">
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>

      {/* Specs Table */}
      <div className="max-w-150 border border-gray-200 text-gray-600 overflow-hidden text-sm mb-6">
        <div className="grid grid-cols-[150px_1fr] bg-gray-50 border-b border-gray-300">
          <span className="p-2 bg-gray-200 border-r border-gray-300">
            Model
          </span>
          <span className="p-2 ">#8786867</span>
        </div>
        <div className="grid grid-cols-[150px_1fr] border-b border-gray-300">
          <span className="p-2 bg-gray-200 border-r border-gray-300">
            Style
          </span>
          <span className="p-2 ">Classic style</span>
        </div>
        <div className="grid grid-cols-[150px_1fr] border-b border-gray-300">
          <span className="p-2 bg-gray-200 border-r border-gray-300">
            Certificate
          </span>
          <span className="p-2 ">ISO-898921212</span>
        </div>
        <div className="grid grid-cols-[150px_1fr] border-b border-gray-300">
          <span className="p-2 bg-gray-200 border-r border-gray-300">Size</span>
          <span className="p-2">34mm x 450mm x 19mm</span>
        </div>
        <div className="grid grid-cols-[150px_1fr]">
          <span className="p-2 bg-gray-200 border-r border-gray-300">
            Memory
          </span>
          <span className="p-2">36GB RAM</span>
        </div>
      </div>

      {/* Feature List */}
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <MdCheck className="text-gray-400" />
          <span>Some great feature name here</span>
        </div>
        <div className="flex items-center gap-2">
          <MdCheck className="text-gray-400" />
          <span>Lorem ipsum dolor sit amet, consectetur</span>
        </div>
        <div className="flex items-center gap-2">
          <MdCheck className="text-gray-400" />
          <span>Duis aute irure dolor in reprehenderit</span>
        </div>
        <div className="flex items-center gap-2">
          <MdCheck className="text-gray-400" />
          <span>Some great feature name here</span>
        </div>
      </div>
    </div>
  );
};

export default DetailTabs;
