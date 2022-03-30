import { v4 as uuid } from "uuid";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Shoes",
    image:"/Images/Shoes/puma.webp",
  },
  {
    _id: uuid(),
    categoryName: "Jacket",
    image:"/Images/Jackets/arcteryx-jackets3.webp",
  },
  {
    _id: uuid(),
    categoryName: "Bagpack",
    image:"/Images/Bagpack/bacbag.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Trolley",
    image:"/Images/Bags/american-tourister2.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Sunglasses",
    image:"/Images/Sunglasses/sunglasses.webp",
  },
];
