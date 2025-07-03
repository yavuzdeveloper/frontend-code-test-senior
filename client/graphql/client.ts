import { GraphQLClient } from "graphql-request";

const endpoint = "http://localhost:3001/graphql";

export const client = new GraphQLClient(endpoint, {
  headers: {
    // Authorization: `Bearer ${token}`,
  },
});
