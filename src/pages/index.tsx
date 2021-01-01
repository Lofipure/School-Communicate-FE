import React, { ChangeEvent } from 'react';
import './index.less';

import MyHeader from '@/Components/MyHeader';
import { Layout, Form, Input, Row, Col, Select } from 'antd';

interface IRegisterUserInfo {
  name: string;
  studentID: string;
  major: number;
  college: number;
  email: string;
  telephone: string;
}

const MainPage = () => {
  const [
    registerUserInfo,
    setRegisterUserInfo,
  ] = React.useState<IRegisterUserInfo>();

  const handleUserInfoChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {};
  return (
    <div className="main-page">
      <Layout>
        <MyHeader type="MainPage" />
      </Layout>
    </div>
  );
};

export default MainPage;
