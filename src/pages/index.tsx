import * as React from 'react';
import UserInfoForm from '@/Components/InfoForm';
import { message, Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { loginModalStatusActionCreator } from '@/store/actionCreator';
import './index.less';
import { history } from 'umi';
import filterConfig from './filterConfig.index';
import axios, { AxiosResponse } from 'axios';
import { loginApi } from '@/Api';
import { StateType } from 'typings';
import MainPageShow from './Components/MainPageShow';

const IndexPage = () => {
  const loginModalStatus: boolean = useSelector(
    (state: StateType) => state.loginModalStatus,
  );
  const dispatch = useDispatch<any>();
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
  const loginForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(null);
  return (
    <div className="index-page">
      <Modal
        title="欢迎您登录西安科技大学校友会"
        visible={loginModalStatus}
        onCancel={() => {
          dispatch(loginModalStatusActionCreator(false));
        }}
        onOk={handleLogin}
        okText="登录"
        cancelText="退出"
        closable={false}
      >
        <UserInfoForm
          className="loginForm"
          filters={filterConfig}
          layout="vertical"
          ref={loginForm}
        />
      </Modal>
      <MainPageShow />
    </div>
  );
};

export default IndexPage;
