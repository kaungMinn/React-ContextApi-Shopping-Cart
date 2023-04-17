import React,{useContext, useState, createContext} from 'react'
import { PRODUCTS } from '../product';

const stateContext = createContext(
    {
        cartItems: null,
        setCartItems: () => {},
        products: null,
        setProducts: () => {},
        addCartItem: () => {},
        getTotalAmount: () => {},
        removeCartItem: () => {},
        updateCartItemCount: () => {},
    }
);

const defaultCart = () => {
    const cart = {};

    for(let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }

    return cart;
}

const ContextProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(defaultCart);
    const [products, setProducts] = useState(PRODUCTS);    

   const getTotalAmount = () => {
    let totalAmount = 0;

    for(const item in cartItems){
        if(cartItems[item] > 0){
          let itemInfo = products.find((product) => product.id === Number(item));

          totalAmount += cartItems[item] * itemInfo.price;

          
        }
    }

    return totalAmount;
   }

    const addCartItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeCartItem = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) =>  ({...prev, [itemId]: newAmount}));
    }

    const value = {cartItems,setCartItems,products,setProducts, addCartItem,getTotalAmount, removeCartItem, updateCartItemCount};
    

  return (
    <stateContext.Provider value={value}>
        {children}
    </stateContext.Provider>
  )
}

export default ContextProvider
export const useStateContext = () => useContext(stateContext);
