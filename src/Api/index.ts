import { ROOT_PATH } from '@/constant';
import { AxiosRequestConfig } from 'axios';

const loginApi: AxiosRequestConfig = {
  url: `${ROOT_PATH}/login`,
  method: 'POST',
};

const reigsterApi: AxiosRequestConfig = {
  url: `${ROOT_PATH}/register`,
  method: 'POST',
};

const getUserByEmailApi: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getUserInfoByEmail`,
  method: 'GET',
};

const getAllArticleApi: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getAllArticle`,
  method: 'GET',
};

const getAllArticleByTagApi: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getAllArticleByTag`,
  method: 'GET',
};

const updateUserInfo: AxiosRequestConfig = {
  url: `${ROOT_PATH}/updateUserInfo`,
  method: 'POST',
};

export {
  loginApi,
  reigsterApi,
  getUserByEmailApi,
  getAllArticleApi,
  getAllArticleByTagApi,
  updateUserInfo,
};
