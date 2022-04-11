import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Adidas",
    description: "Men running shoes",
    price: "5000",
    categoryName: "Shoes",
    brandName: "puma",
    discount: "50",
    rating: "5",
    image:"/Images/Shoes/adidas.webp"
  },
  {
    _id: uuid(),
    name: "Patagonia jackets",
    description: "Winter comfy jackets ",
    price: "4500",
    categoryName: "Jacket",
    brandName: "patagonia",
    discount: "10",
    rating: "4",
    image:"/Images/Jackets/patagonia-jackets.webp"
  },
  {
    _id: uuid(),
    name: "VIP bags",
    description: "VIP bags",
    price: "6000",
    categoryName: "Trolley",
    brandName: "VIP",
    discount: "25",
    rating: "3",
    image:"/Images/Bags/VIP-bags.jpg"
  },
  {
    _id: uuid(),
    name: "Bagpack",
    description: "Light weight Bagpack",
    price: "1000",
    categoryName: "Bagpack",
    brandName: "American Tourister",
    discount: "40",
    rating: "2",
    image:"/Images/Bagpack/travoc.jpg"
  },
  {
    _id: uuid(),
    name: "Fastrack",
    description: "Stylish sunglasses",
    price: "2000",
    categoryName: "Sunglasses",
    brandName: "Fastrack",
    discount: "20%",
    rating: "1",
    image:"/Images/Sunglasses/sunglasses.webp"
  },
  {
    _id: uuid(),
    name: "Travoc",
    description: "Stylish and solid",
    price: "1500",
    categoryName: "Bagpack",
    brandName: "Travoc",
    discount: "",
    rating: "5",
    image:"/Images/Bagpack/bacbag.jpg"
  },
  
  {
    _id: uuid(),
    name: "American Tourister",
    description: "Grey Textured Hard-Sided Medium",
    price: "10500",
    categoryName: "Trolley",
    brandName: "American Tourister",
    discount: "",
    rating: "4",
    image:"/Images/Bags/american-tourister2.jpg"
  },
  {
    _id: uuid(),
    name: "Sky bags",
    description: "Grey Textured Hard-Sided Medium",
    price: "8000",
    categoryName: "Trolley",
    brandName: "Sky bags",
    discount: "10",
    rating: "5",
    image:"/Images/Bags/skybags.jpg"
  },
  {
    _id: uuid(),
    name: "Sky bags",
    description: "Grey Textured Hard-Sided Medium",
    price: "10500",
    categoryName: "Trolley",
    brandName: "Sky bags",
    discount: "",
    rating: "4",
    image:"/Images/Bags/skybags2.jpg"
  },
  {
    _id: uuid(),
    name: "VIP bags",
    description: "Grey Textured Hard-Sided Medium",
    price: "7500",
    categoryName: "Trolley",
    brandName: "VIP",
    discount: "10",
    rating: "3",
    image:"/Images/Bags/VIP2-bags.jpg"
  },
];
