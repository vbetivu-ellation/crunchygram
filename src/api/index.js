import axios from 'axios';
import * as like from './like';
import * as user from './user';
import * as post from './post';
import * as comment from './comment';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  withCredentials: true,
  credentials: 'include',
});

const API = {
  ...like,
  ...user,
  ...post,
  ...comment,
};

export { API, axiosInstance };
