import React, { ChangeEvent } from 'react';
import './index.less';

import MyHeader from '@/Components/MyHeader';
import { Layout, Form, Input, Row, Col, Select } from 'antd';

const MainPage = () => {
  React.useEffect(() => {
    document.title = 'Welcome';
  }, []);
  return (
    <div className="main-page">
      <Layout>
        <MyHeader type="MainPage" />
        <Layout.Content className="main-page-content">
          <h1>Welcome To Use XUST School Mate System</h1>
        </Layout.Content>
      </Layout>
    </div>
  );
};

export default MainPage;
