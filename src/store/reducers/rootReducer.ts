import { combineReducers } from "redux";
import Basket from "../../interfaces/basket";
import Category from "../../interfaces/categories";
import User from "../../interfaces/user";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import shoppingBasketReducer from "./shoppingBasketReducer";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import ResultsFilter from "../../interfaces/results";
import resultsReducer from "./resultsFilterReducer";

/**
 * rootState interface
 * defines what kind of data rootReducer returns
 */
interface rootState {
  basket: Basket;
  categories: Array<Category>;
  user: User;
  results: ResultsFilter;
}

/**
 * Redux rootReducer that combines other reducers
 */
const rootReducer = combineReducers<rootState>({
  basket: shoppingBasketReducer,
  categories: categoryReducer,
  user: authReducer,
  results: resultsReducer,
});

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
};

export default persistReducer(persistConfig, rootReducer);
export type { rootState };
