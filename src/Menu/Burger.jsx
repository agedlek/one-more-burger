import { useState } from "react";
import styles from "./Burger.module.css";

function Burger(props) {
  const updateCart = props.onUpdate;

  const burger = props.burgerObject;

  const [quantity, setQuantity] = useState(0);
  const [inCart, setInCart] = useState(false);

  function updateQuantity(quantity) {
    updateCart(burger.name, burger.price, quantity);
    setQuantity(quantity);
  }

  function increase() {
    updateQuantity(quantity + 1);
  }

  function decrease() {
    if (quantity === 1) {
      updateQuantity(0);
      setInCart(false);
    } else {
      updateQuantity(quantity - 1);
    }
  }

  function addToCart() {
    updateQuantity(1);
    setInCart(true);
  }

  return (
    <li className={styles.burger}>
      <div>
        <h3> {burger.name} </h3>
        <div className={styles.burgerImg}>
          <img src={burger.photoName} alt={burger.name} />
        </div>

        <div className={styles.price}>
          <span>{burger.price} zł</span>
        </div>
        <div className={styles.burgerDescription}>
          <p> {burger.ingredients}</p>
        </div>
      </div>

      <div className={styles.burgerAdd}>
        {inCart ? (
          <>
            <button className={styles.changeBtn} onClick={decrease}>
              -
            </button>
            <div className={styles.quantity}>{quantity}</div>
            <button className={styles.changeBtn} onClick={increase}>
              +
            </button>
          </>
        ) : (
          <button className={styles.addBtn} onClick={addToCart}>
            Dodaj do koszyka
          </button>
        )}
      </div>
    </li>
  );
}

export default Burger;
