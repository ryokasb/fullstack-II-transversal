import minecraftImg from "../images/Products/minecraft.png";
import pcgamer from "../images/Products/pcgamer.png";
import ps3 from "../images/Products/ps3.png";
import ps4 from "../images/Products/ps4slim.png";
import ps5 from "../images/Products/ps5.png";
import N3dsxl from "../images/Products/3dsxl.png";
import ipad from "../images/Products/ipad.png";
import xboxOne from "../images/Products/xboxone.png";
import nSwitch from "../images/Products/switch.png";

export interface Product{
    id: number,
    publicId: string,
    name: string,
    description: string,
    price: number,
    stock: number,
    images: string,
    location: string
}

export const products = [
  {
    id: 1,
    publicId: "PRD-0001",
    name: "Minecraft Ps4",
    description: "Vendo minecraft de ps4",
    price: 12000,
    stock: 1,
    images: [minecraftImg],
    location: "Recoleta, RM"
  },
  {
    id: 2,
    publicId: "PRD-0002",
    name: "Pc Gamer",
    description: "pc gamer r5 5600 gtx 1070",
    price: 400000,
    stock: 1,
    images: [pcgamer],
    location: "Santiago, RM"
  },
  {
    id: 3,
    publicId: "PRD-0003",
    name: "Ps3",
    description: "ps3 en buen estado",
    price: 50000,
    stock: 2,
    images: [ps3],
    location: "Santiago, RM"
  },
  {
    id: 4,
    publicId: "PRD-0004",
    name: "ps4 slim",
    description: "ps4 slim en buen estado",
    price: 120000,
    stock: 1,
    images: [ps4],
    location: "Santiago, RM"
  },
  {
    id: 5,
    publicId: "PRD-0005",
    name: "ps5",
    description: "ps5 como nueva",
    price: 450000,
    stock: 1,
    images: [ps5],
    location: "Santiago, RM"
  },
  {
    id: 6,
    publicId: "PRD-0006",
    name: "nintendo 3ds",
    description: "nintendo 3ds xl",
    price: 70000,
    stock: 1,
    images: [N3dsxl],
    location: "Santiago, RM"
  },

  {
    id: 7,
    publicId: "PRD-0007",
    name: "iPad 8th Gen",
    description: "iPad 8 con cargador original",
    price: 180000,
    stock: 1,
    images: [ipad],
    location: "La Florida, RM"
  },
  {
    id: 8,
    publicId: "PRD-0008",
    name: "Xbox One S",
    description: "Xbox One S 1TB + 1 control",
    price: 150000,
    stock: 1,
    images: [xboxOne],
    location: "Providencia, RM"
  },
  {
    id: 9,
    publicId: "PRD-0009",
    name: "Nintendo Switch",
    description: "Switch V2 ",
    price: 220000,
    stock: 1,
    images: [nSwitch],
    location: "Ñuñoa, RM"
  }
];
