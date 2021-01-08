import * as React from 'react';
import './index.less';
import { Avatar } from 'antd';
import { history } from 'umi';

const MyTitle: React.FC<{}> = () => {
  return (
    <span
      className="header-title"
      onClick={() => {
        history.push('/');
      }}
    >
      <Avatar style={{ backgroundColor: 'red' }}>L</Avatar>
      <span className="header-title-text">Name</span>
    </span>
  );
};

export default MyTitle;
