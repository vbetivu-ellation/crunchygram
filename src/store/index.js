import { createContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";

import combineReducers from "../util/combineReducers";
import combineInitialState from "../util/combineInitialState";
import homePage from "./reducers/homePage";
import postPage from "./reducers/postPage";

const initialState = combineInitialState({
  homePage,
  postPage,
});

const rootReducer = combineReducers({
  homePage,
  postPage,
});

const StoreContext = createContext({
  store: {},
  dispatch: () => {},
});

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StoreContext };

export default StoreProvider;
