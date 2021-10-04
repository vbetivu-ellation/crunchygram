export const getUserList = () => (state) => state.homePage.users.list;

export const getUserByUsername = (username) => (state) =>
  state.homePage.users.list.find((user) => user.username === username);

export const getUsersLoading = () => (state) => state.homePage.users.loading;
