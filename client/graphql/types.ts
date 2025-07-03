export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  power: string;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
}

export interface GetProductsResponse {
  allProducts: Product[];
}
