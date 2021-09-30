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
 * @returns {Promise<User>}
 */
const getMe = () => axiosInstance.get('/user/me').then(({ data }) => data);

/**
 * @returns {Promise<User>}
 */
const getUserByUsername = ({
  username,
}) => axiosInstance.get(`/user/${username}`).then(({ data }) => data);

/**
 * @returns {Promise<array<User>>}
 */
const getUsers = ({
  search = '',
}) => axiosInstance.get('/user', {
  params: { search },
}).then(({ data }) => data);

export { login, logout, getUsers, getMe, getUserByUsername };
