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
import {
  youZanPageLoad,
  categoryPageLoad,
  searchContentLoad
} from "./store/sagas";

const sagaMiddleware = createSagaMiddlreware();

/**
 * Implement redux
 */

const rootReducer = combineReducers({
  youzan: youzanReducer,
  category: categoryReducer,
  search: searchReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(youZanPageLoad);
sagaMiddleware.run(categoryPageLoad);
sagaMiddleware.run(searchContentLoad);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
