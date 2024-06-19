import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }

  if (request.method === "POST") {
    try {
      const newProductData = request.body;
      console.log("newproductdata:", newProductData);
      const products = await Product.create(newProductData);
      return response
        .status(200)
        .json({ status: "product created:" }, products);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
