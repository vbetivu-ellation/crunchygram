const combineInitialState = (slices) =>
  Object.entries(slices).reduce(
    (acc, [prop, reducer]) => ({
      ...acc,
      [prop]: reducer.initialState,
    }),
    {}
  );

export default combineInitialState;
