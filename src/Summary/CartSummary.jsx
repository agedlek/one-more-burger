import styles from "./CartSummary.module.css";
import cartData from "./cartData";
import { countCartTotalPrice } from "../helpers";

function CartSummary() {
  const cart = cartData;
  const totalPrice = countCartTotalPrice(cart);

  return (
    <div className={styles.summary}>
      <h2>Podsumowanie zamówienia</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.name}>
            {item.name} x {item.quantity} - {item.price * item.quantity} zł
          </li>
        ))}
      </ul>
      <p>Do zapłaty: {totalPrice} zł</p>
    </div>
  );
}

export default CartSummary;
