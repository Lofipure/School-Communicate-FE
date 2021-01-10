import * as React from 'react';
import { history } from 'umi';
import {
  UserOutlined,
  FileAddOutlined,
  LogoutOutlined,
  MacCommandOutlined,
} from '@ant-design/icons';
interface MenuItemProps {
  icon: React.ReactNode;
  key: string;
  title: string;
  text: string;
  onClick?: () => void;
}

const indexMainPageConfig: MenuItemProps[] = [
  {
    key: 'login',
    title: 'Login',
    text: '登录',
    icon: <UserOutlined />,
  },
  {
    key: 'register',
    title: 'Register',
    text: '注册',
    icon: <FileAddOutlined />,
    onClick: () => {
      history.push('/register');
    },
  },
];

const indexRegisterPageConfig: MenuItemProps[] = [
  {
    key: 'register',
    title: 'Register',
    text: '注册',
    icon: <FileAddOutlined />,
    onClick: () => {
      history.push('/register');
    },
  },
];

const mainPageConfig: MenuItemProps[] = [
  {
    key: 'playground',
    title: 'PlayGround',
    text: '广场',
    icon: <MacCommandOutlined />,
    onClick: () => {
      history.push('/main');
    },
  },
  {
    key: 'mine',
    title: 'Mine',
    text: '关于我',
    icon: <UserOutlined />,
    onClick: () => {
      history.push('/main/about');
    },
  },
  {
    key: 'logout',
    title: 'Logout',
    text: '退出',
    icon: <LogoutOutlined />,
    onClick: () => {
      localStorage.removeItem('userInfo');
      history.push('/');
    },
  },
];
export { indexMainPageConfig, indexRegisterPageConfig, mainPageConfig };
