import { getAllProducts } from "@/services/productServices";
export default function handler(request, response) {
  const allProducts = getAllProducts();
  console.log("inside api/products");
  response.status(200).json(allProducts);
}
