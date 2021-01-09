import * as React from 'react';
import UserInfoForm from '@/Components/UserInfoForm';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { loginModalStatusActionCreator } from '@/store/actionCreator';
import './index.less';

import filterConfig from './filterConfig.index';
import axios, { AxiosResponse } from 'axios';
import { loginApi } from '@/Api';

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
      console.log(res.data);
    });
  };
  const loginForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(null);
  return (
    <div className="index-page">
      <Modal
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
      MainPage
    </div>
  );
};

export default IndexPage;
