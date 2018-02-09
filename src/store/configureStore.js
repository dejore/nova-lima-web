import { createStore, combineReducers } from "redux";

import adiantamento from "./../reducers/adiantamento";
const store = createStore(
  combineReducers({
    adiantamento
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
