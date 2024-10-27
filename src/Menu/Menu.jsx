import burgersData from "./burgerData";
import Burger from "./Burger";
import styles from "./Menu.module.css";

function Menu(props) {
  const burgers = burgersData;
  const numBurgers = burgers.length;
  const updateCart = props.onUpdate;

  return (
    <main className={styles.menu}>
      <h2> Our menu </h2>

      {numBurgers > 0 ? (
        <ul className={styles.burgers}>
          {burgersData.map((burgers) => (
            <Burger
              onUpdate={updateCart}
              burgerObject={burgers}
              key={burgers.name}
            />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please back later ;)</p>
      )}
    </main>
  );
}

export default Menu;
