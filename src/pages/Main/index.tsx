import * as React from 'react';

import MyHeader from '@/Components/MyHeader';
import MySider from '@/Components/MySider';

import { Layout } from 'antd';
const MainPage = () => {
  React.useEffect(() => {
    console.log(localStorage.getItem('email'));
  }, []);
  return (
    <div className="main-page-root" style={{ height: '100vh' }}>
      <Layout style={{ height: '100%' }}>
        <MyHeader type="MainPage" />
        <Layout className="main-page-content">
          <MySider />
        </Layout>
      </Layout>
    </div>
  );
};

export default MainPage;
