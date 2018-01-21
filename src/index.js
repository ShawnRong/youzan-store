import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddlreware from "redux-saga";

import App from "./App";
import youzanReducer from "./store/reducers/youzan";
import categoryReducer from "./store/reducers/category";
import searchReducer from "./store/reducers/search";
import goodsReducer from "./store/reducers/goods";
import addressReducer from "./store/reducers/address";
import cartReducer from "./store/reducers/cart";
import {
  youZanPageLoad,
  categoryPageLoad,
  searchContentLoad,
  goodsContentLoad,
  addressLoad,
  shoppingCartLoad
} from "./store/sagas";

const sagaMiddleware = createSagaMiddlreware();

/**
 * Implement redux
 */

const rootReducer = combineReducers({
  youzan: youzanReducer,
  category: categoryReducer,
  search: searchReducer,
  goods: goodsReducer,
  address: addressReducer,
  cart: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(youZanPageLoad);
sagaMiddleware.run(categoryPageLoad);
sagaMiddleware.run(searchContentLoad);
sagaMiddleware.run(goodsContentLoad);
sagaMiddleware.run(addressLoad);
sagaMiddleware.run(shoppingCartLoad);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
