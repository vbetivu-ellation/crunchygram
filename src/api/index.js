import axios from 'axios';
import * as like from './like'
import * as user from './user'
import * as post from './post'

const axiosInstance = axios.create({
  baseURL: 'http://52.42.16.92/api',
  withCredentials: true,
  credentials: 'include',
});

const API = {
  ...like,
  ...user,
  ...post,
}

export { API, axiosInstance };
