import * as React from 'react';
import { history } from 'umi';
import { User, Add } from '@byte-design/icons';
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
    icon: <User />,
  },
  {
    key: 'register',
    title: 'Register',
    text: '注册',
    icon: <Add />,
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
    icon: <Add />,
    onClick: () => {
      history.push('/register');
    },
  },
];

const mainPageConfig: MenuItemProps[] = [];
export { indexMainPageConfig, indexRegisterPageConfig, mainPageConfig };
