import { ADD_TO_CART , INCREASE, DECREASE} from "../actionType";

import * as actionTypes from '../actionType'
const initialState = {
  cartItems: [],
}




  const CartReducer = (state = initialState, action)=> {
   let cartItems = state.cartItems;
    switch (action.type) {
    case "ADD_TO_CART" : 
    cartItems.push(action.payload) ;
    return {
      ...state,
      cartItems: cartItems
    };
                break;
 
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };

   
   
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

   
      
      case actionTypes.CLEAR_ITEMS:
        return {
          ...state,
          cartItems: [],
        };
   
      
    default:
      return state;
  }
};

export default CartReducer;
