import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import toggleThemeReducer from "./reducers/toggleThemeReducers";
import countriesReducer from "./reducers/Countries";

const rootReducer = combineReducers({
  toggleThemeReducer,
  countriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
