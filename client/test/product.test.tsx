import { render, fireEvent } from "@testing-library/react";

import Product from "../pages/product";

// Mock hook and Redux
jest.mock("../hooks/useProducts", () => require("../__mocks__/useProducts"));
const dispatchMock = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => dispatchMock,
}));

describe("Product component", () => {
  test("should be able to increase and decrease product quantity", () => {
    const { getByText, getByTitle } = render(<Product />);

    const increaseQuantity = getByText("+");
    const decreaseQuantity = getByText("–");
    const currentQuantity = getByTitle("Current quantity");

    // Initial quantity should be 1
    expect(currentQuantity).toHaveTextContent("1");

    // Click on +
    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent("2");

    // Click on –
    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent("1");
  });

  test("should be able to add items to the basket", () => {
    const { getByText, getByTitle } = render(<Product />);

    const increaseQuantity = getByText("+");
    const addToBasketElement = getByText("Add to cart");
    const currentQuantity = getByTitle("Current quantity");

    // Increase quantity to 4
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent("4");

    // Click "Add to cart"
    fireEvent.click(addToBasketElement);

    // Check if dispatch was called correctly
    expect(dispatchMock).toHaveBeenCalledWith(
      expect.objectContaining({
        type: expect.any(String), // addToCart action
        payload: expect.objectContaining({
          quantity: 4,
        }),
      })
    );
  });
});
