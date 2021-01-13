import * as React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';
import { history } from 'umi';
import MyHeader from '../Components/MyHeader';
import SideBar from '../Components/SideBar';
import './index.less';

const { Content, Sider } = Layout;
const LayoutContainer: React.FC<{}> = (props) => {
  return (
    <Provider store={store}>
      <Layout className="root-container">
        <MyHeader />
        <Layout>
          {history.location.pathname != '/' &&
            history.location.pathname != '/register' && (
              <Sider
                style={{
                  backgroundColor: 'rgb(240,242,245)',
                  marginLeft: '1rem',
                }}
              >
                <SideBar />
              </Sider>
            )}
          <Layout>
            <Content style={{ height: 'calc(100vh - 64px)' }}>
              {props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Provider>
  );
};

export default LayoutContainer;
