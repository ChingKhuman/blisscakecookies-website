import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET, GET_TOTALS, INCREASE, DECREASE, CLEAR_ITEMS, UPDATE_CART_UNITS } from "../actionType"; 

import * as actionTypes from "../actionType"


export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload:data
}
  };

  export const delCart = (data) => {
    return {
      type: "DELITEM",
      payload : data
    }
  }

export const increase = (data) => ({
  type: INCREASE,
  payload: data,
});

export const decrease = (data) => ({
  type: DECREASE,
  payload: data,
});


export const clearItems = () => ({
  type: CLEAR_ITEMS,
});

export const removeFromCart = (dataID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
    id: dataID,
     
  },
}  
}









