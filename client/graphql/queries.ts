import { gql } from "graphql-request";

export const GET_PRODUCTS = gql`
  query GetProducts {
    allProducts {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;
