import * as React from 'react';
import { Layout, Menu, Modal, Form, Input, message } from 'antd';
import { Oceanengine, User, Key, Me, Logout } from '@byte-design/icons';
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
    setTimeout(() => {
      window.location.href = '/main';
      localStorage.setItem('email', loginUserInfo?.email || '');
    }, 500);
  };

  const render = (): React.ReactNode => {
    if (props.type === 'WelcomePage') {
      return (
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
      );
    } else if (props.type === 'RegisterPage') {
      return null;
    } else {
      return (
        <React.Fragment>
          <Menu.Item className="main-page-menu-item">
            <Me className="main-page-icon" />
            <span>Mine</span>
          </Menu.Item>
          <Menu.Item
            className="main-page-menu-item"
            onClick={() => {
              window.location.href = '/';
              localStorage.removeItem('email');
            }}
          >
            <Logout className="main-page-icon" />
            <span>DropOut</span>
          </Menu.Item>
        </React.Fragment>
      );
    }
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
        <span className="header-title">XUST-School Mate Family</span>
      </div>
      <Menu theme="dark" mode="horizontal" className="header-menu">
        {render()}
      </Menu>
    </Layout.Header>
  );
};

export default MyHeader;
