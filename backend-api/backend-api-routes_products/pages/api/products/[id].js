import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;
  const product = getProductById(id);
  if (!product) {
    response.status(404).json({ status: "not found" });
  }
  response.json(product);
}
