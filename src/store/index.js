import { createContext, useMemo, useReducer } from "react";
import PropTypes from "prop-types";

import combineReducers from "../util/combineReducers";
import combineInitialState from "../util/combineInitialState";
import homePage from "./reducers/homePage";
import postPage from "./reducers/postPage";
import profilePage from "./reducers/profilePage";
import currentUser from "./reducers/currentUser";

const initialState = combineInitialState({
  homePage,
  postPage,
  profilePage,
  currentUser,
});

const rootReducer = combineReducers({
  homePage,
  postPage,
  profilePage,
  currentUser,
});

const StoreContext = createContext({
  store: {},
  dispatch: () => {},
});

const initState = (user) => (initialState) => {
  return {
    ...initialState,
    currentUser: user,
  };
};

const StoreProvider = ({ children, user }) => {
  const [state, dispatch] = useReducer(
    rootReducer,
    initialState,
    initState(user)
  );
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
  user: PropTypes.object,
};

export { StoreContext };

export default StoreProvider;
