import * as React from 'react';
import { Layout } from 'antd';

import MyHeader from '../Components/MyHeader';

const { Content } = Layout;
const LayoutContainer: React.FC<{}> = (props) => {
  return (
    <Layout>
      <MyHeader />
      <Content style={{ height: 'calc(100vh - 64px)' }}>
        {props.children}
      </Content>
    </Layout>
  );
};

export default LayoutContainer;
