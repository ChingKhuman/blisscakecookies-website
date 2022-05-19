import { combineReducers } from "redux";
//import { CartReducer } from "../reducer/CartReducer";
import { ProductReducer } from "./ProductReducer";
 import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {AuthReducer, authReducer}  from "./AuthReducer";
import messageReducer from "./messageReducer";
//import CartReducer from './CartReducer'
import CartReducer from "./CartReducer";





const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};


const rootReducer = combineReducers({
  product: ProductReducer,
  cart: CartReducer,
  auth: AuthReducer,
  message: messageReducer,
});

//export default rootReducer;

 export default persistReducer(persistConfig,rootReducer);
