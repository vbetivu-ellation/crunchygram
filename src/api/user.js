import { axiosInstance } from '.';

/**
 * User type
 * @typedef {object} User
 * @property {string} id
 * @property {string} username
 * @property {string} avatar
 * @property {string} likesCount
 * @property {string} commentsCount
 */

/**
 * @returns {Promise<User>}
 */
const login = ({
  username,
}) => axiosInstance.post('/user/login', { username }).then(({ data }) => data);

/**
 * @returns {null}
 */
const logout = () => axiosInstance.get('/user/logout').then(() => null);

/**
 * @returns {Promise<array<User>>}
 */
const getUsers = () => axiosInstance.get('/user').then(({ data }) => data);

export { login, logout, getUsers };
