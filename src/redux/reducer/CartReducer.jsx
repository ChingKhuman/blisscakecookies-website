
import * as actionTypes from '../actionType'

const CART_INITIAL_STATE = {
  totalAmount: 0,
  totalCount: 0,
  cartItems: [],
};

export const CartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART" : 
    return {
      cartItems: [...state.cartItems, action.payload]
    };


    break;
    
    
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.id !== action.payload.id),
      };


   //     const existItem = findItem(cart, payload.id);

    

      

       
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

export default CartReducer;
