import * as React from 'react';

import { Layout, Menu } from 'antd';

const MySider = () => {
  return (
    <Layout.Sider>
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Item>3</Menu.Item>
      </Menu>
    </Layout.Sider>
  );
};

export default MySider;
