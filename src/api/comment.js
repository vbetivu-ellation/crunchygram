import { axiosInstance } from ".";

/**
 * Comment type
 * @typedef {object} Comment
 * @property {string} id
 * @property {string} text
 * @property {string} postId
 * @property {string} avatar
 */

/**
 * @returns {Promise<Comment>}
 */
const createComment = ({ text, postId } = {}) =>
  axiosInstance.post("/comment", { text, postId }).then(({ data }) => data);

export { createComment };
