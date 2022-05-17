import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ITEMS, INCREASE, DECREASE, GET_TOTALS, UPDATE_CART_UNITS } from "../actionType"; 
import * as types from '../actionType'

const CART_INITIAL_STATE = {
  totalAmount: 0,
  totalCount: 0,
  cartItems: [],
};

export const CartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;

      console.log("============================================"+JSON.stringify(item))

      const existItem = state.cartItems.find((x) => x.product === item.product);
   

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
           
          
          ),
       
        };
      } 
    
    else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

      case UPDATE_CART_UNITS: {
        const payload = action.payload;
        const cart = state;

   //     const existItem = findItem(cart, payload.id);

        if(existItem >=0) {
          let product = cart[existItem];
          product.units = payload.units;

          cart[existItem] = product;
        }

        return [...cart]
      }

      

       
      case INCREASE:
        console.log("payload.. itemmmm "+JSON.stringify(action.payload))
        
        let tempCartInc = state.cartItems.map((cartItems) => {
          if (cartItems.id === action.payload) {
            return { ...cartItems, qty: cartItems.qty + 1 };
          }
          return cartItems;
        });
        return { ...state, cartItems: tempCartInc };
      case DECREASE:
        let tempCartDec = state.cartItems
          .map((cartItems) => {
            if (cartItems.id === action.payload) {
              return { ...cartItems, amount: cartItems.amount - 1 };
            }
            return cartItems;
          })
          .filter((cartItems) => cartItems.amount !== 0);
        return { ...state, cartItems: tempCartDec };
      
      case CLEAR_ITEMS:
        return {
          ...state,
          cartItems: [],
        };
     
      
    default:
      return state;
  }
};
