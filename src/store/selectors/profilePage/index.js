export const getUser =
  ({ username }) =>
  (state) =>
    state.profilePage?.username === username ? state.profilePage : null;
