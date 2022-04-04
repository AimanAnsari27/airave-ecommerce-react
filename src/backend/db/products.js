import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Adidas",
    description: "Men running shoes",
    price: "5000",
    categoryName: "Shoes",
    brandName: "puma",
    discount: "50%",
    image:"/Images/Shoes/adidas.webp"
  },
  {
    _id: uuid(),
    title: "Patagonia jackets",
    description: "Winter comfy jackets ",
    price: "5000",
    categoryName: "Jackets",
    brandName: "patagonia",
    discount: "10%",
    image:"/Images/Jackets/patagonia-jackets.webp"
  },
  {
    _id: uuid(),
    title: "VIP bags",
    description: "VIP bags",
    price: "5500",
    categoryName: "bags",
    brandName: "puma",
    discount: "25%",
    image:"/Images/Bags/VIP-bags.jpg"
  },
  {
    _id: uuid(),
    title: "American tourister bagpack",
    description: "Bagpack",
    price: "1000",
    categoryName: "bagpack",
    brandName: "American Tourister",
    discount: "40%",
    image:"/Images/Bagpack/travoc.jpg"
  },
  {
    _id: uuid(),
    title: "Puma",
    description: "Men running shoes",
    price: "5000",
    categoryName: "Shoes",
    brandName: "puma",
    discount: "20%",
    image:"/Images/Shoes/puma.jpg"
  },
];
