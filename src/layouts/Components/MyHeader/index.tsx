import * as React from 'react';
import MyTitle from '../MyTitle';
import HeaderMenu from '../HeaderMenu';
import { Layout } from 'antd';
const { Header } = Layout;

const MyHeader: React.FC<{}> = () => {
  return (
    <Header>
      <MyTitle />
      <HeaderMenu />
    </Header>
  );
};

export default MyHeader;
