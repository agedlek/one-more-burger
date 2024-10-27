import { useState } from "react";
import styles from "./OrderForm.module.css";
import { useNavigate } from "react-router-dom";

function OrderForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const navigate = useNavigate();

  function handleOrder() {
    navigate("/summary");
  }

  function goToMenu() {
    navigate("/");
  }
  return (
    <form className={styles.orderForm} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.formRow}>
        <label>Imię</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.formRow}>
        <label>Nazwisko</label>
        <input
          type="text"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      <div className={styles.formRow}>
        <label>Numer telefonu</label>
        <input type="text" />
      </div>
      <div className={styles.formRow}>
        <label>Adres dostawy</label>
        <textarea />
      </div>
      <div className={styles.formRow}>
        <label>Uwagi</label>
        <textarea />
      </div>
      <div className={styles.navigation}>
        <button className={styles.orderBtn} onClick={handleOrder}>
          Zamawiam
        </button>
        <button className={styles.backBtn} onClick={goToMenu}>
          Wróc do menu
        </button>
      </div>
    </form>
  );
}
export default OrderForm;
