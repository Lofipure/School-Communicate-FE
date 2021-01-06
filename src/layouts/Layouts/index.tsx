import * as React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';

import MyHeader from '../Components/MyHeader';

const { Content } = Layout;
const LayoutContainer: React.FC<{}> = (props) => {
  return (
    <Provider store={store}>
      <Layout>
        <MyHeader />
        <Content style={{ height: 'calc(100vh - 64px)' }}>
          {props.children}
        </Content>
      </Layout>
    </Provider>
  );
};

export default LayoutContainer;
