import * as React from 'react';
import { Avatar, Tag, Spin } from 'antd';
import { College, Major } from '@/constant/enum';
import axios from 'axios';
import { getUserByEmailApi } from '@/Api';
import {
  DribbbleOutlined,
  CodepenCircleOutlined,
  EnvironmentOutlined,
  UserOutlined,
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
  avatar: string;
};
import { proviceMap, contryMap, cityMap } from '@/constant/city';
const UserInfoCard: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfoType>();
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    const { email } = JSON.parse(localStorage.getItem('userInfo') || '');
    axios({
      method: getUserByEmailApi.method,
      url: getUserByEmailApi.url + `?email=${email}`,
    })
      .then((res) => {
        let userInfoTemp: UserInfoType = res.data[0];
        userInfoTemp.location = JSON.parse(userInfoTemp.location);
        setUserInfo(userInfoTemp);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Spin spinning={loading}>
      <div className="user-info-card">
        <div className="user-info-row">
          <Avatar
            size="large"
            src={
              userInfo?.avatar
                ? userInfo.avatar
                : 'http://114.116.246.240/static/wangziheng.42e14961.png'
            }
            className="user-info-avatar"
          ></Avatar>
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
            {`${proviceMap[userInfo?.location[0] || 0]}/${
              cityMap[userInfo?.location[1] || 0]
            }/${contryMap[userInfo?.location[2] || 0]}`}
          </Tag>
        </div>
      </div>
    </Spin>
  );
};

export default UserInfoCard;
