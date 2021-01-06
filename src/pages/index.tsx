import * as React from 'react';
import UserInfoForm from '@/Components/UserInfoForm';
import { Modal } from 'antd';
import './index.less';

import filterConfig from './filterConfig.index';

const IndexPage = () => {
  const loginForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(null);
  return (
    <div className="index-page">
      <Modal
        visible={true}
        onOk={() => {
          console.log(loginForm.current?.getFieldValues());
        }}
      >
        <UserInfoForm
          className="loginForm"
          filters={filterConfig}
          layout="vertical"
          ref={loginForm}
        />
      </Modal>
    </div>
  );
};

export default IndexPage;
