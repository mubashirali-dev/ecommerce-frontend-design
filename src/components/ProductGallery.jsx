import { useState } from "react";
import img7 from "../assets/Image/cloth/img7.jpg";
import img71 from "../assets/Image/cloth/img71.jpg";
import img72 from "../assets/Image/cloth/img72.jpg";
import img73 from "../assets/Image/cloth/img73.jpg";
import img74 from "../assets/Image/cloth/img74.jpg";
import img75 from "../assets/Image/cloth/img75.jpg";

const ProductGallery = () => {
  const images = [img7, img71, img72, img73, img74, img75];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="border border-gray-200 rounded-md p-4 flex justify-center items-center h-95 bg-white">
        <img
          src={selectedImage}
          alt="Product Main"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`border rounded-sm p-1 cursor-pointer h-14 w-14 flex justify-center items-center ${
              selectedImage === img ? "border-gray-500" : "border-gray-200"
            }`}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
