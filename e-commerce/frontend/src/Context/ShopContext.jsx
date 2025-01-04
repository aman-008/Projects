<<<<<<< HEAD
import React, { createContext } from "react";
=======
import React, { createContext, useState } from "react";
>>>>>>> 9cd6acad1ab1ec3e6da6809de4e4ec1f28e93d45
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

<<<<<<< HEAD
const ShopContextProvider = (props)=>{
    const contextValue = {all_product}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;
=======
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems)
    {
      if(cartItems[item]>0)
      {
        let itemInfo = all_product.find((product)=>product.id===Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for(const item in cartItems)
    {
      if (cartItems[item]>0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }


  const contextValue = {getTotalCartItems ,getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
>>>>>>> 9cd6acad1ab1ec3e6da6809de4e4ec1f28e93d45
