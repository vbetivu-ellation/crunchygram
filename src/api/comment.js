import { axiosInstance } from '.';

/**
 * Comment type
 * @typedef {object} Comment
 * @property {string} id
 * @property {string} text
 * @property {string} postId
 */

/**
 * @returns {Promise<Comment>}
 */
const createComment = ({
  text,
  postId,
}) => axiosInstance.post('/commment', { text, postId }).then(({ data }) => data);

export { createComment };
