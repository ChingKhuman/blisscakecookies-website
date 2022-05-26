import { ADD_TO_CART, REMOVE_FROM_CART, CART_RESET, GET_TOTALS, INCREASE, DECREASE, CLEAR_ITEMS, UPDATE_CART_UNITS } from "../actionType"; 
import axios from "../../helper/Constant";
import * as actionTypes from "../actionType"



export const increase = (id) => ({
  type: INCREASE,
  payload: id,
});

export const decrease = (id) => ({
  type: DECREASE,
  payload: id,
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


export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload:data
}
  };




export const updateCartUnits = (data, qtyy) => async (dispatch, getState) => {
  console.log("update... checking.. "+JSON.stringify(data)+"    qty "+qtyy)

  console.log("------------------- "+JSON.stringify(getState().cart.cartItems))

  dispatch ({
    type: INCREASE,
    payload: {
      product: data.id,
      name: data.name,
      imageUrl: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: 2,
    },
  })
  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
}


