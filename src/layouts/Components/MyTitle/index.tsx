import * as React from 'react';
import './index.less';
import { Avatar } from 'antd';
import { history } from 'umi';

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
      <Avatar style={{ backgroundColor: '#999' }}>L</Avatar>
      <span className="header-title-text">校友会</span>
    </span>
  );
};

export default MyTitle;
