import * as React from 'react';
import UserInfoForm from '@/Components/InfoForm';
import filterConfig from './filterConfig.index';
import './index.less';
import { Button, message } from 'antd';
import axios from 'axios';
import { reigsterApi, uploadImg } from '@/Api';
import { history } from 'umi';

const Register = () => {
  const registerUserForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(
    null,
  );
  const handleSubmit = () => {
    const fileElement = document.getElementById(
      'avatar_uploader',
    ) as HTMLInputElement;
    if (!fileElement) {
      message.error('请上传头像');
      return;
    }
    const file = (fileElement as any).files[0];
    const formData = new FormData();
    formData.append('file', file);
    axios({
      url: uploadImg.url,
      method: uploadImg.method,
      data: formData,
    }).then((res) => {
      const avatarURL = 'http://114.116.246.240:1188/img/' + res.data.name;
      axios({
        url: reigsterApi.url,
        method: reigsterApi.method,
        data: {
          ...registerUserForm.current?.getFieldValues(),
          avatar: avatarURL,
        },
      }).then((res) => {
        if (res.data) {
          message.success('注册成功');
          history.push('/');
        } else {
          message.error('该用户已注册');
        }
      });
    });
  };

  return (
    <div className="register-container mobile-no-margin">
      <div className="form-content-container mobile-no-margin mobile-no-padding">
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
