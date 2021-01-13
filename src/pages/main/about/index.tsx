import * as React from 'react';
import { Button, Descriptions, Typography, Modal, Spin, message } from 'antd';
import { getUserByEmailApi, updateUserInfo } from '@/Api';
import axios from 'axios';

import {
  getUserInfo,
  DescriptionItemProps,
  modifiedFilterConfig,
} from './userInfo.config';
import UserInfoForm from '@/Components/UserInfoForm';

import './index.less';
import { UserInfo } from 'typings';
import { PLACEHOLDER } from '@/constant';

const AboutPage = () => {
  const [renderItem, setRenderItem] = React.useState<DescriptionItemProps[]>(
    [],
  );
  const [modifiedModalStatus, setModifiedModalStatus] = React.useState<boolean>(
    false,
  );
  const [userInfo, setUserInfo] = React.useState<UserInfo>();
  const [userInfoCardStatus, setUserInfoCardStatus] = React.useState<boolean>(
    true,
  );
  const [username, setUserName] = React.useState<string>('');
  const modifiedForm = React.useRef<React.ElementRef<typeof UserInfoForm>>(
    null,
  );
  React.useEffect(() => {
    axios({
      url: getUserByEmailApi.url + `?email=${localStorage.getItem('email')}`,
      method: getUserByEmailApi.method,
    })
      .then((res) => {
        let userInfoTemp = res.data[0];
        userInfoTemp.collegeAndMajor = [
          userInfoTemp.college.toString(),
          userInfoTemp.major.toString(),
        ];
        setUserInfo(userInfoTemp);
        setRenderItem(getUserInfo(res.data[0]));
        setUserName(res.data[0].name);
      })
      .finally(() => {
        setUserInfoCardStatus(false);
      });
  }, []);

  const modifiedUserInfo = () => {
    axios({
      url: updateUserInfo.url,
      method: updateUserInfo.method,
      data: modifiedForm.current?.getFieldValues(),
    })
      .then((res) => {
        res.data ? message.success('修改成功') : message.error('修改失败');
        modifiedForm.current?.resetForm();
      })
      .finally(() => {
        setModifiedModalStatus(false);
      });
  };
  return (
    <div className="about-page">
      <Modal
        visible={modifiedModalStatus}
        title={`修改${username}的信息`}
        closable
        okText="修改"
        cancelText="取消"
        onCancel={() => {
          setModifiedModalStatus(false);
        }}
        onOk={modifiedUserInfo}
      >
        <UserInfoForm
          ref={modifiedForm}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          initialValues={userInfo}
          filters={modifiedFilterConfig}
          layout="horizontal"
        />
      </Modal>
      <Spin spinning={userInfoCardStatus}>
        <Descriptions
          className="about-page-info-descriptions-container"
          title={
            <Typography.Text style={{ textAlign: 'center', margin: '0 auto' }}>
              {username + '的个人信息'}
            </Typography.Text>
          }
          extra={
            <Button
              type="primary"
              onClick={() => {
                setModifiedModalStatus(true);
              }}
            >
              修改信息
            </Button>
          }
          bordered
        >
          {renderItem.map((item, key) => (
            <Descriptions.Item
              label={item.label}
              key={item.label}
              span={item.span}
            >
              {item.content || PLACEHOLDER}
            </Descriptions.Item>
          ))}
        </Descriptions>
      </Spin>
    </div>
  );
};

export default AboutPage;
