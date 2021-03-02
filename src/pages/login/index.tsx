import * as React from 'react';
// @ts-ignore
import styles from './index.less';
import UserInfoForm from '@/Components/InfoForm';
import { message, Button } from 'antd';
import { history } from 'umi';
import { loginApi } from '@/Api';
import filterConfig from './filterConfig';
import axios, { AxiosResponse } from 'axios';
const Login = () => {
  const loginForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(null);

  const handleLogin = () => {
    axios({
      url: loginApi.url,
      method: loginApi.method,
      data: loginForm.current?.getFieldValues(),
    }).then((res: AxiosResponse) => {
      const storageData = loginForm.current?.getFieldValues() || {};
      if (res.data == 2) {
        message.warn('用户不存在，请先注册');
        history.push('/register');
      } else if (res.data == 1) {
        message.success('登录成功');
        localStorage.setItem('userInfo', JSON.stringify(storageData));
        localStorage.setItem(
          'email',
          // @ts-ignore
          loginForm.current?.getFieldValues()?.email,
        );
        history.push('/main');
      } else {
        message.error('密码错误');
      }
    });
  };
  return (
    <div className={styles['container']}>
      <div className={styles['container__left']}></div>
      <div className={styles['container__right']}>
        <div className={styles['container__right__header']}>
          欢迎您登录校友汇
        </div>
        <div className={styles['container__right__content']}>
          <UserInfoForm
            filters={filterConfig}
            layout="vertical"
            ref={loginForm}
          />
        </div>
        <div className={styles['container__right__btn']}>
          <Button type="primary" onClick={handleLogin}>
            登录
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
