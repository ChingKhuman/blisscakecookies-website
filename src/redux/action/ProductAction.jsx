import { GET_PRODUCTS, GET_SINGLE_PRODUCT } from "../actionType";
import ProductService from "../services/ProductService";

const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

const getSingleProduct = (product) => ({
  type: GET_SINGLE_PRODUCT,
  payload: product,
});

export const loadProducts = () => async (dispatch) => {
  try {
    const res = await ProductService.getAll();
    dispatch(getProducts(res.data));
  } catch (err) {  
    console.log(err);
  }
};

export const singleProduct = (id) => async (dispatch) => {
  try {
    const res = await ProductService.getSingleByID(id);
    dispatch(getSingleProduct(res.data));
  } catch (err) {
    console.log(err);
  }
};
