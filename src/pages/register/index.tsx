import * as React from 'react';
import UserInfoForm from '@/Components/UserInfoForm';
import filterConfig from './filterConfig.index';
import './index.less';
import { Button } from 'antd';

const Register = () => {
  const registerUserForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(
    null,
  );

  const handleSubmit = () => {
    console.log(registerUserForm.current?.getFieldValues());
  };

  return (
    <div className="register-container">
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
  );
};

export default Register;
