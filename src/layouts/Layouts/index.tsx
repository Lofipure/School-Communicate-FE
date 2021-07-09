import * as React from 'react';
import { Layout } from 'antd';
import { history } from 'umi';
import MyHeader from '../Components/MyHeader';
import SideBar from '../Components/SideBar';
import './index.less';
// @ts-ignore
import Home from '@/Home';
const { Content, Sider, Footer } = Layout;

const LayoutContainer: React.FC<{}> = (props) => {
  return (
    <>
      {['/', '/register', '/login'].includes(history.location.pathname) ? (
        <div>
          {history.location.pathname === '/' ? (
            <Home />
          ) : (
            <div className="root-container">{props.children}</div>
          )}
        </div>
      ) : (
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
              <Content className="layout-content">{props.children}</Content>
            </Layout>
          </Layout>
          <Footer className="layout-footer">
            School Mate Group © 2021 王子恒
          </Footer>
        </Layout>
      )}
    </>
  );
};

export default LayoutContainer;
