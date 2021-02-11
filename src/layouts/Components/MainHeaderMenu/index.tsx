import * as React from 'react';
import { Menu, Dropdown } from 'antd';
import { useDispatch } from 'react-redux';
import { loginModalStatusActionCreator } from '@/store/actionCreator';
import { history } from 'umi';
import {
  indexMainPageConfig,
  indexRegisterPageConfig,
  mainPageConfig,
} from './MenuItemConfig';
import './index.less';
import { MenuFoldOutlined } from '@ant-design/icons';
const HeaderMenu: React.FC<{}> = () => {
  const dispatch = useDispatch<any>();

  return (
    <React.Fragment>
      <Menu mode="horizontal" className="header-menu" theme="dark">
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
      <Dropdown
        className="header-menu-mobile"
        trigger={['click']}
        overlay={
          <Menu mode="inline" theme="dark">
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
        }
      >
        <a onClick={(e) => e.preventDefault()}>
          <MenuFoldOutlined />
        </a>
      </Dropdown>
    </React.Fragment>
  );
};

export default HeaderMenu;
