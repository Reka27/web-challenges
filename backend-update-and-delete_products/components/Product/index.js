import useSWR from "swr";
import { useState } from "react";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import Comments from "../Comments";
import { StyledButton } from "@/components/Button/Button.styled";
import ProductForm from "../ProductForm";

export default function Product() {
  const [isEditMode, setIsEditMode] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  console.log(data);

  async function handleEditProduct(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateData = Object.fromEntries(formData);
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct(event) {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  return (
    <ProductCard>
      <StyledButton
        onClick={() => {
          setIsEditMode(!isEditMode);
        }}
      >
        Edit
      </StyledButton>
      <StyledButton onClick={() => handleDeleteProduct(id)}>
        Delete
      </StyledButton>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}

      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          value={data}
          isEditMode={isEditMode}
        />
      )}

      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
