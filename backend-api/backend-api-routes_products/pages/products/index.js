import useSWR from "swr";
//const fetcher =({...args})=> fetch(...args).then((res)=>res.json());

export default function Products() {
  const { data, isLoading } = useSWR("api/products/");
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <h2> Name: {product.name}</h2>
          <p>Description:{product.description}</p>
          <p>
            Price:{product.price} {product.currency}
          </p>
          <p> Category:{product.category}</p>
        </li>
      ))}
    </ul>
  );
}
