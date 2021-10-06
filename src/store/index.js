import { createContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";

import combineReducers from "../util/combineReducers";
import combineInitialState from "../util/combineInitialState";
import homePage from "./reducers/homePage";

const initialState = combineInitialState({
  homePage,
});

const rootReducer = combineReducers({
  homePage,
});

const StoreContext = createContext({
  store: {},
  dispatch: () => {},
});

const initState = () => (initialState) => ({
  ...initialState,
});

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(
    rootReducer,
    initialState,
    initState(),
  );
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
