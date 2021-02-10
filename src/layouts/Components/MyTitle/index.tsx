import * as React from 'react';
import './index.less';
import { Divider } from 'antd';
import { history } from 'umi';
import { CrownOutlined } from '@ant-design/icons';
const MyTitle: React.FC<{}> = () => {
  return (
    <span
      className="header-title"
      onClick={() => {
        if (
          history.location.pathname === '/' ||
          history.location.pathname === '/register'
        ) {
          history.push('/');
        } else {
          history.push('/main');
        }
      }}
    >
      <CrownOutlined />
      <span className="header-title-text">
        <span className="mini-hidden">西安科技大学</span>
        <Divider
          className="mini-hidden"
          type="vertical"
          style={{ color: 'white', backgroundColor: 'white' }}
        />
        <span>校友会</span>
      </span>
    </span>
  );
};

export default MyTitle;
