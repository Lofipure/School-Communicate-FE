import * as React from 'react';
import { Layout } from 'antd';
import { Provider } from 'react-redux';
import store from '@/store';
import { history } from 'umi';
import MyHeader from '../Components/MyHeader';
import SideBar from '../Components/SideBar';
import './index.less';
const { Content, Sider, Footer } = Layout;

const LayoutContainer: React.FC<{}> = (props) => {
  return (
    <Provider store={store}>
      <Layout className="root-container">
        <MyHeader />
        <Layout>
          {history.location.pathname != '/' &&
            history.location.pathname != '/register' && (
              <Sider
                className={'sidebar-container'}
                style={{
                  backgroundColor: 'rgb(240,242,245)',
                  marginLeft: '1rem',
                }}
              >
                <SideBar />
              </Sider>
            )}
          <Layout>
            <Content className="layout-content"> {props.children}</Content>
          </Layout>
        </Layout>
        <Footer className="layout-footer">
          XUST School Mate Group © 2021 王子恒
        </Footer>
      </Layout>
    </Provider>
  );
};

export default LayoutContainer;
