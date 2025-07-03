import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../store/cartSlice";
import Cart from "../components/cart/Cart";

// Helper to render Cart with a custom store
function renderWithStore(initialCartItems = []) {
  const store = configureStore({
    reducer: { cart: cartReducer },
    preloadedState: {
      cart: { items: initialCartItems },
    },
  });

  return render(
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}

describe("Cart component", () => {
  test("should show total quantity when cart has items", () => {
    const { getByText } = renderWithStore([
      { id: "1", name: "Product 1", quantity: 2 },
      { id: "2", name: "Product 2", quantity: 3 },
    ]);

    // Should show total quantity (2 + 3 = 5)
    expect(getByText("5")).toBeInTheDocument();
  });

  test("should show no quantity badge when cart is empty", () => {
    const { container } = renderWithStore([]);

    // Badge should be empty (empty string rendered)
    const badge = container.querySelector("span");
    expect(badge?.textContent).toBe("");
  });
});
