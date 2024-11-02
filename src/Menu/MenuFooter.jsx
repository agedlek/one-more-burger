import styles from "./MenuFooter.module.css";
import { countCartTotalPrice } from "../helpers";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../appContext";

function MenuFooter() {
  const navigate = useNavigate();
  const { cart } = useContext(AppContext);
  const cartIsEmpty = cart.length === 0;
  const totalPrice = countCartTotalPrice(cart);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  function goToCart() {
    navigate("/order");
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.order}>
        {cartIsEmpty ? (
          <p>Zacznij dodawać burgery do koszyka</p>
        ) : (
          <div className={styles.cartSummary}>
            <p>
              W koszyku masz łącznie {totalQuantity} pozycji o wartości{" "}
              {totalPrice} zł.
            </p>
            <button className={styles.btn} onClick={goToCart}>
              Przejdź do zamówienia
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}

export default MenuFooter;
