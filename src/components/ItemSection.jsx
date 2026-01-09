import ItemGroup from "./ItemGroup";
import blender from "../assets/Image/interior/blender.png";
import chair from "../assets/Image/interior/chair.png";
import juicer from "../assets/Image/interior/juicer.png";
import lamp from "../assets/Image/interior/lamp.png";
import mattress from "../assets/Image/interior/mattress.png";
import plant from "../assets/Image/interior/plant.png";
import pot from "../assets/Image/interior/pot.png";
import rug from "../assets/Image/interior/rug.png";
import camera from "../assets/Image/tech/gpcam.png";
import headset1 from "../assets/Image/tech/hedphn.png";
import headset2 from "../assets/Image/tech/hedset.png";
import jug from "../assets/Image/tech/jug.png";
import laptop from "../assets/Image/tech/lptp.png";
import phone2 from "../assets/Image/tech/phone1.png";
import phone3 from "../assets/Image/tech/phone2.png";
import smartWatch from "../assets/Image/tech/smrtwch.png";
import banner1 from "../assets/Image/backgrounds/block1.png";
import banner2 from "../assets/Image/backgrounds/block2.png";

const homeItems = [
  {
    title: "Soft chairs",
    price: 19,
    image: chair,
  },
  {
    title: "Sofa & chair",
    price: 19,
    image: lamp,
  },
  {
    title: "Kitchen dishes",
    price: 19,
    image: mattress,
  },
  {
    title: "Smart watches",
    price: 19,
    image: pot,
  },
  {
    title: "Kitchen mixer",
    price: 100,
    image: juicer,
  },
  {
    title: "Blenders",
    price: 39,
    image: blender,
  },
  {
    title: "Home appliance",
    price: 19,
    image: rug,
  },
  {
    title: "Coffee maker",
    price: 10,
    image: plant,
  },
];

const electronicsItems = [
  {
    title: "Smart watches",
    price: 19,
    image: smartWatch,
  },
  {
    title: "Cameras",
    price: 89,
    image: camera,
  },
  {
    title: "Headphones",
    price: 10,
    image: headset2,
  },
  {
    title: "Smart watches",
    price: 90,
    image: jug,
  },
  {
    title: "Gaming set",
    price: 35,
    image: headset1,
  },
  {
    title: "Laptops & PC",
    price: 340,
    image: laptop,
  },
  {
    title: "Smartphones",
    price: 19,
    image: phone2,
  },
  {
    title: "Electric kettle",
    price: 240,
    image: phone3,
  },
];

const sections = [
  {
    id: "home",
    categoryName: "Home and outdoor",
    bannerImage: banner1,
    buttonText: "Source now",
    items: homeItems,
  },
  {
    id: "electronics",
    categoryName: "Consumer electronics and gadgets",
    bannerImage: banner2,
    buttonText: "Source now",
    items: electronicsItems,
  },
];

const ItemSection = () => {
  return (
    <div>
      {sections.map((section) => (
        <ItemGroup key={section.id} section={section} />
      ))}
    </div>
  );
};

export default ItemSection;
