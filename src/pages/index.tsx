import * as React from 'react';
import UserInfoForm from '@/Components/UserInfoForm';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { loginModalStatusActionCreator } from '@/store/actionCreator';
import './index.less';

import filterConfig from './filterConfig.index';

const IndexPage = () => {
  const loginModalStatus: boolean = useSelector(
    (state: StateType) => state.loginModalStatus,
  );
  const dispatch = useDispatch<any>();

  const loginForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(null);
  return (
    <div className="index-page">
      <Modal
        visible={loginModalStatus}
        onCancel={() => {
          dispatch(loginModalStatusActionCreator(false));
        }}
        onOk={() => {
          console.log(loginForm.current?.getFieldValues());
        }}
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
