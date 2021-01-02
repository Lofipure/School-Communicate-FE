import * as React from 'react';
import { Layout, Menu, Modal, Form, Input, message } from 'antd';
import { Oceanengine, User, Key } from '@byte-design/icons';
import './index.less';

interface ILoginFormData {
  email?: string;
  password?: string;
}

interface IPorps {
  type: string;
}

const MyHeader = (props: IPorps) => {
  const [loginModalStatus, setLoginModalStatus] = React.useState<boolean>(
    false,
  );
  const [loginUserInfo, setLoginUserInfo] = React.useState<ILoginFormData>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string,
  ) => {
    let ret: ILoginFormData = { ...loginUserInfo };
    if (type === 'email') {
      ret.email = e.target.value;
    } else {
      ret.password = e.target.value;
    }
    setLoginUserInfo(ret);
  };

  const handleLogin = () => {
    console.log(loginUserInfo);
    setLoginModalStatus(false);
    message.success('Login Success.');
  };
  return (
    <Layout.Header className="header">
      <Modal
        title="Login"
        visible={loginModalStatus}
        onCancel={() => {
          setLoginModalStatus(false);
        }}
        closable={false}
        onOk={handleLogin}
      >
        <Form layout="vertical">
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Email is required.' }]}
            label={'Email'}
          >
            <Input
              value={loginUserInfo?.email}
              allowClear={true}
              onChange={(e) => {
                handleInputChange(e, 'email');
              }}
              prefix={<User />}
            ></Input>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Password is required' }]}
            label={'Password'}
          >
            <Input.Password
              suppressHydrationWarning
              value={loginUserInfo?.password}
              onChange={(e) => {
                handleInputChange(e, 'password');
              }}
              prefix={<Key />}
            ></Input.Password>
          </Form.Item>
        </Form>
      </Modal>
      <div
        className="header-logo"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        <Oceanengine theme="outline" />
        <span className="header-title">西安科技大学-校友汇</span>
      </div>
      <Menu theme="dark" mode="horizontal" className="header-menu">
        {props.type === 'MainPage' ? (
          <React.Fragment>
            <Menu.Item
              onClick={() => {
                setLoginModalStatus(true);
              }}
            >
              Login
            </Menu.Item>
            <Menu.Item
              onClick={() => {
                window.location.href = '/register';
              }}
            >
              Register
            </Menu.Item>
          </React.Fragment>
        ) : null}
      </Menu>
    </Layout.Header>
  );
};

export default MyHeader;
