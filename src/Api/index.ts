import { ROOT_PATH } from '@/constant';
import { AxiosRequestConfig } from 'axios';
const loginApi: AxiosRequestConfig = {
  url: `${ROOT_PATH}/login`,
  method: 'POST',
};
export { loginApi };
