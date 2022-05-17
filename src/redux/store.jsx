import {applyMiddleware, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistStore from 'redux-persist/es/persistStore';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer';
//import { Logger } from 'logger';


const middlewares=[reduxThunk];

{/*
if (process.env.NODE_ENV === "development") {
    middlewares.push(Logger);
  }
*/}


export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)));

export const persistor = persistStore(store);