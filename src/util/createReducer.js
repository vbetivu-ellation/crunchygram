const createReducer = (initialState, handlers) => {
  const reducer = (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };

  reducer.initialState = initialState;

  return reducer;
};

export default createReducer;
