import { axiosInstance } from '.';

/**
 * Like type
 * @typedef {object} Like
 * @property {string} id
 * @property {string} username
 * @property {string} postId
 */

/**
 * @returns {Promise<Like>}
 */
const togglePostLike = ({
  postId,
}) => axiosInstance.post(`/like/toggle/${postId}`)
  .then(({ data }) => data || null);

export { togglePostLike };
