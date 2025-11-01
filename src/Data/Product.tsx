import minecraftImg from "../assets/images/Products/minecraft.png";
import pcgamer from "../assets/images/Products/pcgamer.png";
import ps3 from "../assets/images/Products/ps3.png";
import ps4 from "../assets/images/Products/ps4slim.png";
import ps5 from "../assets/images/Products/ps5.png";
import N3dsxl from "../assets/images/Products/3dsxl.png";
import { DiSafari } from "react-icons/di";

export const products = [
  {
    id: 1,
    name: "Minecraft Ps4",
    description: "Vendo minecraft de ps4",
    price: 12000,
    stock: "In stock",
    images: [
      minecraftImg
    ],
    location: "Recoleta, RM"
  },
  {
    id: 2,
    name: "Pc Gamer",
    description: "pc gamer r5 5600 gtx 1070",
    price: 400000,
    stock: "In stock",
    images: [
       pcgamer 
    ],
    location: "Santiago, RM"
  },
   {
    id: 3,
    name: "Ps3",
    description: "ps3 en buen estado",
    price: 50000,
    stock: "In stock",
    images: [
       ps3
    ],
    location: "Santiago, RM"
  },
   {
    id: 4,
    name: "ps4 slim",
    description: "pc gamer r5 5600 gtx 1070",
    price: 120000,
    stock: "In stock",
    images: [
       ps4 
    ],
    location: "Santiago, RM"
  },
   {
    id: 5,
    name: "ps5",
    description: "pc gamer r5 5600 gtx 1070",
    price: 450000,
    stock: "In stock",
    images: [
       ps5 
    ],
    location: "Santiago, RM"
  },
   {
    id: 6,
    name: "3ds xl",
    description: "pc gamer r5 5600 gtx 1070",
    price: 70000,
    stock: "In stock",
    images: [
       N3dsxl
    ],
    location: "Santiago, RM"
  }
];