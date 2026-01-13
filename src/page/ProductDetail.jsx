import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import SupplierCard from "../components/SupplierCard";
import DetailTabs from "../components/DetailTabs";
import YouMayLike, { RelatedProducts } from "../components/product-lists";
import DiscountBanner from "../components/DiscountBanner";

const ProductDetail = ({ onBack }) => {
  return (
    <div className="w-full bg-[#F7FAFC] pb-10">
      {/* BreadCrumb */}
      <BreadCrumb onBack={onBack} />

      <div className="w-[85%] mx-auto">
          {/* Top Section: Overview Card */}
          <div className="bg-white border border-gray-200 rounded-md p-4 mb-6">
              <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Gallery */}
                  <div className="w-full lg:w-[350px] shrink-0">
                       <ProductGallery />
                  </div>

                  {/* Middle: Info */}
                  <ProductInfo />

                  {/* Right: Supplier */}
                  <div className="shrink-0 hidden xl:block">
                       <SupplierCard />
                  </div>
              </div>
          </div>

          {/* Middle Section: Details & Sidebar */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
              {/* Main Details */}
              <div className="flex-1">
                  <DetailTabs />
              </div>

              {/* Right Sidebar: You May Like */}
              <div className="shrink-0">
                  <YouMayLike />
              </div>
          </div>

          {/* Bottom Section */}
          <RelatedProducts />
          <DiscountBanner />
      </div>
    </div>
  );
};

export default ProductDetail;
