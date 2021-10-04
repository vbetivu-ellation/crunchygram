export const getPostList = () => (state) => state.homePage.posts.list;

export const arePostsLoading = () => (state) => state.homePage.posts.loading;

export const getSearchQuery = () => (state) => state.homePage.posts.searchQuery;
