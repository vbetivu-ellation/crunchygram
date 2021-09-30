import { axiosInstance } from '.';

/**
 * Post type
 * @typedef {object} Post
 * @property {string} id
 * @property {string} name
 * @property {string} image
 * @property {string} avatar
 * @property {number} likesCount
 * @property {number} commentsCount
 * @property {array<Comment>} comments
 */

/**
 * @returns {Promise<array<Post>>}
 */
const getPosts = ({
  start = 0,
  limit = 10,
  search = '',
}) => axiosInstance.get('/post', {
  params: { limit, start, search },
}).then(({ data }) => data);

/**
 * @returns {Promise<array<Post>>}
 */
const getMyLikedPosts = ({
  start = 0,
  limit = 10,
}) => axiosInstance.get('/post/liked', {
  params: { limit, start },
}).then(({ data }) => data);

/**
 * @returns {Promise<array<Post>>}
 */
const getPostsLikedByUsername = ({
  username,
  start = 0,
  limit = 10,
}) => axiosInstance.get(`/post/liked/${username}`, {
  params: { limit, start },
}).then(({ data }) => data);

export { getPosts, getMyLikedPosts, getPostsLikedByUsername };
