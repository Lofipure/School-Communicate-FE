import * as React from 'react';
import { Menu } from 'antd';
import { User, Add } from '@byte-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { loginModalStatusActionCreator } from '@/store/actionCreator';
import { history } from 'umi';

import './index.less';

const HeaderMenu: React.FC<{}> = () => {
  const loginModalStatus = useSelector<StateType>(
    (state) => state.loginModalStatus,
  );
  const dispatch = useDispatch<any>();

  return (
    <React.Fragment>
      <Menu mode="horizontal" className="header-menu" theme="dark">
        {history.location.pathname !== '/register' && (
          <Menu.Item
            icon={<User />}
            key="login"
            title="Login"
            onClick={() => {
              dispatch(loginModalStatusActionCreator(true));
            }}
          >
            登录
          </Menu.Item>
        )}
        <Menu.Item
          icon={<Add />}
          key="register"
          title="Register"
          onClick={() => {
            history.push('/register');
          }}
        >
          注册
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

export default HeaderMenu;
