import styles from "./CartSummary.module.css";
import { countCartTotalPrice } from "../helpers";
import { AppContext } from "../appContext";
import { useContext } from "react";

// za pomoca useContext mozemy pobrac nasz koszyk w dowolnym komponencie
// nie potrzebujemy juz statycznego koszyku z cartData
// metody updateCart do komponentu burger nie musimy przenosic przez wszystkie pietra

function CartSummary() {
  const { cart } = useContext(AppContext);
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
