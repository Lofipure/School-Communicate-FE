import * as React from 'react';
import MyTitle from '../MyTitle';
import HeaderMenu from '../MainHeaderMenu';
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
