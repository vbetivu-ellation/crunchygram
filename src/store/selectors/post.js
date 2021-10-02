export const getPostList = () => state => state.post.list;

export const arePostsLoading = () => state => state.post.loading;

export const getSearchQuery = () => state => state.post.searchQuery;
