export const getUserList = () => state => state.user.list;

export const getUserByUsername = username => state =>
  state.user.list.find(user => user.username === username) || {};

export const getUsersLoading = () => state => state.user.loading;
