import combineInitialState from "./combineInitialState";

const combineReducers = (slices) => {
  const reducer = (state, action) =>
    Object.keys(slices).reduce(
      (acc, prop) => ({
        ...acc,
        [prop]: slices[prop](acc[prop], action),
      }),
      state
    );

  reducer.initialState = combineInitialState(slices);

  return reducer;
};

export default combineReducers;
