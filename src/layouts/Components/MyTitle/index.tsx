import * as React from 'react';
import './index.less';
import { Divider } from 'antd';
import { history } from 'umi';
import { CrownOutlined } from '@ant-design/icons';
const MyTitle: React.FC<{}> = () => {
  return (
    <div
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
        <span className="mini-hidden"></span>
        <span>校友会</span>
      </span>
    </div>
  );
};

export default MyTitle;
