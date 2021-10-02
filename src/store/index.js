import { createContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";

import combineReducers from "../util/combineReducers";
import combineInitialState from "../util/combineInitialState";
import post from "./reducers/post";
import user from "./reducers/user";

const initialState = combineInitialState({
  post,
  user,
});

const rootReducer = combineReducers({
  post,
  user,
});

const StoreContext = createContext({
  store: {},
  dispatch: () => {},
});

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StoreContext };

export default StoreProvider;
