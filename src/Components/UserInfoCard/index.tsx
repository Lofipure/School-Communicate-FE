import * as React from 'react';
import { Avatar, Tag } from 'antd';
import { College, Major } from '@/constant/enum';
import axios from 'axios';
import { getUserByEmailApi } from '@/Api';
import {
  DribbbleOutlined,
  CodepenCircleOutlined,
  UserOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import './index.less';

type UserInfoType = {
  name: string;
  email: string;
  telephone: string;
  college: string;
  major: string;
  studentID: string;
  grade: string;
  location: string;
};

const UserInfoCard: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfoType>();

  React.useEffect(() => {
    const { email } = JSON.parse(localStorage.getItem('userInfo') || '');
    axios({
      method: getUserByEmailApi.method,
      url: getUserByEmailApi.url + `?email=${email}`,
    }).then((res) => {
      setUserInfo(res.data[0]);
    });
  }, []);
  return (
    <div className="user-info-card">
      <div className="user-info-row">
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
      <div className="user-info-row">
        <span className="user-info-row-inner">{userInfo?.name}</span>
        <span className="user-info-row-inner">{userInfo?.grade}级</span>
      </div>
      <div className="user-info-row">
        <Tag color="success" icon={<DribbbleOutlined />}>
          {College[userInfo?.college || '']}
        </Tag>
      </div>
      <div className="user-info-row">
        <Tag color="processing" icon={<CodepenCircleOutlined />}>
          {Major[userInfo?.major || '']}
        </Tag>
      </div>
      <div className="user-info-row">
        <Tag color="magenta" icon={<EnvironmentOutlined />}>
          {userInfo?.location}
        </Tag>
      </div>
    </div>
  );
};

export default UserInfoCard;
