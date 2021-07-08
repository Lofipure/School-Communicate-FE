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

const getArticleById: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getArticleById`,
  method: 'GET',
};

const removeArticle: AxiosRequestConfig = {
  url: `${ROOT_PATH}/removeArticle`,
  method: 'GET',
};

const removeTag: AxiosRequestConfig = {
  url: `${ROOT_PATH}/removeTag`,
  method: 'GET',
};

const pushComment: AxiosRequestConfig = {
  url: `${ROOT_PATH}/pushComment`,
  method: 'POST',
};

const articleGetGood: AxiosRequestConfig = {
  url: `${ROOT_PATH}/articleGetGood`,
  method: 'GET',
};

const articleGetBad: AxiosRequestConfig = {
  url: `${ROOT_PATH}/articleGetBad`,
  method: 'GET',
};

const getCommentsByArticleId: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getCommentsByArticleId`,
  method: 'GET',
};

const commentGetGood: AxiosRequestConfig = {
  url: `${ROOT_PATH}/commentGetGood`,
  method: 'GET',
};

const getUserInfoByProviceCode: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getUserInfoByProviceCode`,
  method: 'GET',
};

const getGoodNumberFromEmail: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getGoodNumberFromEmail`,
  method: 'GET',
};

const getArticleNumberFromEmail: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getArticleNumberFromEmail`,
  method: 'GET',
};

const getOrderedArticleList: AxiosRequestConfig = {
  url: `${ROOT_PATH}/getOrderedArticleList`,
  method: 'GET',
};

const uploadImg: AxiosRequestConfig = {
  url: 'http://114.116.246.240:1188/upload',
  method: 'POST',
};
export {
  getOrderedArticleList,
  getArticleNumberFromEmail,
  getGoodNumberFromEmail,
  getUserInfoByProviceCode,
  commentGetGood,
  articleGetGood,
  articleGetBad,
  pushComment,
  removeTag,
  removeArticle,
  getCommentsByArticleId,
  getArticleById,
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
  uploadImg,
};
