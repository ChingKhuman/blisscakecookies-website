import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "../actionType";

const initialState = {
  products: [],
  loading: true,
};

export const ProductReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
  {/*}  case GET_SINGLE_PRODUCT:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    */}
    default:
      return state;
  }
};
