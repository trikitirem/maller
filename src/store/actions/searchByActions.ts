import { Dispatch } from "react";
import { ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import SearchBy from "../../interfaces/searchBy";

import { SearchByAction } from "../reducers/resultsByReducer";
import { rootState } from "../reducers/rootReducer";

/**
 * @param searchBy -> might be {SearchByCategory | SearchBySubcategory | SearchByPhrase } @class
 * @dispatches Redux Thunk Action to {searchByReducer} @reducer
 */

const setSearchByAction: ActionCreator<
  ThunkAction<void, rootState, void, SearchByAction>
> = (searchBy: SearchBy) => {
  return (dispatch: Dispatch<SearchByAction>) => {
    dispatch({ type: "SET_RESULTS", payload: searchBy });
  };
};

export { setSearchByAction };
