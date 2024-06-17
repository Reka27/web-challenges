import useSWR from "swr";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return;
  }
  return (
    <>
      <h1>{product.name}</h1>
      <p> Description:{product.description}</p>
      <p>
        Price:{product.price} Currency:{product.currency}{" "}
      </p>
      <p> Category:{product.category}</p>
    </>
  );
}
