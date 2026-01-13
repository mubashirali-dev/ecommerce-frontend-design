import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";

const ProductView = () => {
  const [activeFilters, setActiveFilters] = React.useState([]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) => 
      prev.includes(filter) 
        ? prev.filter((f) => f !== filter) 
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="w-full pb-10 bg-[#F7FAFC]">
      <BreadCrumb />
      
      <div className="w-[80%] mx-auto flex gap-6 align-start">
        {/* Sidebar */}
        <Sidebar toggleFilter={toggleFilter} activeFilters={activeFilters} />

        {/* Main Content */}
        <MainContent 
            activeFilters={activeFilters} 
            toggleFilter={toggleFilter} 
            clearFilters={clearFilters} 
        />
      </div>
    </div>
  );
};

export default ProductView;