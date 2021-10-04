export const getPost =
  ({ id }) =>
  (state) =>
    state.postPage?.id === id ? state.postPage : null;
