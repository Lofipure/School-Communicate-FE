import * as React from 'react';
import { Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { loginModalStatusActionCreator } from '@/store/actionCreator';
import { history } from 'umi';
import {
  indexMainPageConfig,
  indexRegisterPageConfig,
  mainPageConfig,
} from './MenuItemConfig';
import './index.less';

const HeaderMenu: React.FC<{}> = () => {
  const dispatch = useDispatch<any>();

  return (
    <React.Fragment>
      <Menu
        mode="horizontal"
        className="header-menu"
        theme="dark"
        defaultSelectedKeys={['playground']}
      >
        {history.location.pathname === '/' && (
          <>
            {indexMainPageConfig.map((item) => (
              <Menu.Item
                key={item.key}
                title={item.title}
                icon={item.icon}
                onClick={
                  item.onClick
                    ? item.onClick
                    : () => {
                        dispatch(loginModalStatusActionCreator(true));
                      }
                }
              >
                {item.text}
              </Menu.Item>
            ))}
          </>
        )}
        {history.location.pathname === '/register' && (
          <>
            {indexRegisterPageConfig.map((item) => (
              <Menu.Item
                key={item.key}
                title={item.title}
                icon={item.icon}
                onClick={item.onClick}
              >
                {item.text}
              </Menu.Item>
            ))}
          </>
        )}
        {history.location.pathname !== '/' &&
          history.location.pathname !== '/register' && (
            <>
              {mainPageConfig.map((item) => (
                <Menu.Item
                  key={item.key}
                  title={item.title}
                  icon={item.icon}
                  onClick={item.onClick}
                >
                  {item.text}
                </Menu.Item>
              ))}
            </>
          )}
      </Menu>
    </React.Fragment>
  );
};

export default HeaderMenu;
