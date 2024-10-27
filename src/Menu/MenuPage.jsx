import { useState } from "react";
import Menu from "./Menu";
import MenuFooter from "./MenuFooter";

function MenuPage() {
  const [cart, setCart] = useState([]);

  function updateCart(burgerName, price, quantity) {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.name === burgerName);

    if (index === -1) {
      newCart.push({ name: burgerName, price, quantity });
    } else {
      if (quantity === 0) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity = quantity;
      }
    }

    setCart(newCart);
  }
  return (
    <div>
      <Menu onUpdate={updateCart} />
      <MenuFooter cart={cart} />
    </div>
  );
}

export default MenuPage;
