import { createContext, useState} from "react";

export const AppContext = createContext();

export const AppProvider = ({children}) => {
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
        <AppContext.Provider value={{cart, updateCart}}>
            {children}
        </AppContext.Provider>
    );
}