import React from "react";

import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={styles.cartWrapper}>
      <span className={styles.badge}>
        {totalQuantity > 0 ? totalQuantity : ""}
      </span>
      <img src="/basket.svg" alt="Basket" className={styles.cartIcon} />
    </div>
  );
};

export default Cart;
