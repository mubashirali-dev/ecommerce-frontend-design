import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Newsletter from "../components/Newsletter";

const ProductView = ({ onBack, onProductClick }) => {
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
    <div className="w-full pb-10">
      <BreadCrumb onBack={onBack} />

      <div className="w-[80%] mx-auto flex gap-6 align-start">
        {/* Sidebar */}
        <Sidebar toggleFilter={toggleFilter} activeFilters={activeFilters} />

        {/* Main Content */}
        <MainContent
          activeFilters={activeFilters}
          toggleFilter={toggleFilter}
          clearFilters={clearFilters}
          onProductClick={onProductClick}
        />
      </div>
      <Newsletter />
    </div>
  );
};

export default ProductView;
