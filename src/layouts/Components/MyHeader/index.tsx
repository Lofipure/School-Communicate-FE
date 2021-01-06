import * as React from 'react';
import MyTitle from '../MyTitle';

import { Layout } from 'antd';

const { Header } = Layout;

const MyHeader: React.FC<{}> = () => {
  return (
    <Header>
      <MyTitle />
    </Header>
  );
};

export default MyHeader;
