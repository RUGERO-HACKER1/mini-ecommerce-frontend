export type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Charging Stand",
    price: "$35",
    image: "https://via.placeholder.com/300x300?text=Charging+Stand",
    description: "Fast wireless charging for all devices.",
  },
  {
    id: 2,
    name: "Smartphone X",
    price: "$799",
    image: "https://via.placeholder.com/300x300?text=Smartphone+X",
    description: "High-performance smartphone with stunning display.",
  },
  {
    id: 3,
    name: "Noise-Cancelling Headphones",
    price: "$199",
    image: "https://via.placeholder.com/300x300?text=Headphones",
    description: "Immersive sound with deep bass.",
  },
];
