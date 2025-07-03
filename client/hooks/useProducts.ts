import { useState, useEffect } from "react";

import { Product } from "../types";
import { client, GET_PRODUCTS, GetProductsResponse } from "../graphql";

interface UseProductsResult {
  products: Product[] | null;
  loading: boolean;
  error: string | null;
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await client.request<GetProductsResponse>(GET_PRODUCTS);
        setProducts(data.allProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}
