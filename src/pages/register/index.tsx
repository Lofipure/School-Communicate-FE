import * as React from 'react';
import UserInfoForm from '@/Components/UserInfoForm';
import filterConfig from './filterConfig.index';
import './index.less';

const Register = () => {
  const registerUserForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(
    null,
  );
  return (
    <div className="register-container">
      <UserInfoForm
        className="register-form"
        filters={filterConfig}
        layout="vertical"
        ref={registerUserForm}
      />
    </div>
  );
};

export default Register;
