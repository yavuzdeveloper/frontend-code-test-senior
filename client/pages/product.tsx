import React, { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./product.module.css";
import { addToCart } from "../store/cartSlice";
import { useProducts } from "../hooks/useProducts";
import Spinner from "../ui/Spinner";

const Product: React.FC = () => {
  const { products, loading } = useProducts();

  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  if (loading) return <Spinner />;

  const product = products[0];

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id.toString(),
        name: product.name,
        quantity: qty,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src={product.img_url}
          alt={product.name}
          className={styles.image}
        />
      </div>

      <div className={styles.textSection}>
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.sub}>
          {product.power} // Packet of {product.quantity}
        </p>

        <div className={styles.priceRow}>
          <p className={styles.price}>
            £{((product.price / 100) * qty).toFixed(2)}
          </p>

          <div className={styles.qtyWrapper}>
            <div className={styles.qtyLabel}>Qty</div>
            <div className={styles.qtyControls}>
              <button
                className={`${styles.qtyBtn} ${styles.decreaseBtn}`}
                onClick={() => setQty(prev => Math.max(1, prev - 1))}
                aria-label="Decrease quantity"
              >
                –
              </button>
              <span className={styles.qty} title="Current quantity">
                {qty}
              </span>

              <button
                className={`${styles.qtyBtn} ${styles.increaseBtn}`}
                onClick={() => setQty(prev => prev + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button className={styles.cartBtn} onClick={handleAddToCart}>
          Add to cart
        </button>

        <div className={styles.section}>
          <div className={styles.descriptionWrapper}>
            <h3 className={styles.sectionTitle}>Description</h3>
            <p className={styles.text}>{product.description}</p>
          </div>

          <h3 className={styles.sectionTitle}>Specifications</h3>
          <div className={styles.specGrid}>
            <div>
              <strong>Brand</strong>
            </div>
            <div>{product.brand}</div>
            <div>
              <strong>Item weight</strong>
            </div>
            <div>{product.weight}g</div>
            <div>
              <strong>Dimensions</strong>
            </div>
            <div>
              {product.height} x {product.width} x {product.length} cm
            </div>
            <div>
              <strong>Model Code</strong>
            </div>
            <div>{product.model_code}</div>
            <div>
              <strong>Colour</strong>
            </div>
            <div>{product.colour}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
