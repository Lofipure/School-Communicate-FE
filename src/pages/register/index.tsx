import * as React from 'react';
import UserInfoForm from '@/Components/InfoForm';
import filterConfig from './filterConfig.index';
import './index.less';
import { Button, message } from 'antd';
import axios from 'axios';
import { reigsterApi } from '@/Api';
import { history } from 'umi';

const Register = () => {
  const registerUserForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(
    null,
  );
  const handleSubmit = () => {
    console.log(registerUserForm.current?.getFieldValues());
    axios({
      url: reigsterApi.url,
      method: reigsterApi.method,
      data: registerUserForm.current?.getFieldValues(),
    }).then((res) => {
      if (res.data) {
        message.success('注册成功');
        history.push('/');
      } else {
        message.error('该用户已注册');
      }
    });
  };

  return (
    <div className="register-container">
      <div className="form-content-container">
        <UserInfoForm
          className="register-form"
          filters={filterConfig}
          layout="vertical"
          ref={registerUserForm}
        />
        <Button
          type="primary"
          onClick={handleSubmit}
          className="register-submit-btn"
        >
          注册
        </Button>
      </div>
    </div>
  );
};

export default Register;
