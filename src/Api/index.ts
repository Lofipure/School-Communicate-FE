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

const createTag: AxiosRequestConfig = {
  url: `${ROOT_PATH}/createTag`,
  method: 'POST',
};

const getAllTag: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getAllTag`,
  method: 'GET',
};

const getAllTagDetailInfo: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getAllTagDetailInfo`,
  method: 'GET',
};

const createArticle: AxiosRequestConfig = {
  url: `${ROOT_PATH}/createArticle`,
  method: 'POST',
};

const getUserArticle: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getUserArticle`,
  method: 'GET',
};

const getAllArticle: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getAllArticle`,
  method: 'GET',
};

export {
  getAllArticle,
  createArticle,
  loginApi,
  reigsterApi,
  getUserByEmailApi,
  getAllArticleApi,
  getAllArticleByTagApi,
  updateUserInfo,
  createTag,
  getAllTag,
  getAllTagDetailInfo,
  getUserArticle,
};
