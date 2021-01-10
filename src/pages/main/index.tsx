import * as React from 'react';
import UserInfoCard, { UserInfoCardProps } from '@/Components/UserInfoCard';
import axios from 'axios';
import { getUserByEmailApi } from '@/Api';

const MainPage: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfoCardProps>({});
  React.useEffect(() => {
    const userEmail = JSON.parse(localStorage.getItem('userInfo') || '').email;
    console.log(userEmail);
    axios({
      url: getUserByEmailApi.url + `?email=${userEmail}`,
      method: getUserByEmailApi.method,
    }).then((res) => {
      setUserInfo(res.data[0]);
    });
  }, []);
  return (
    <div className="main-page">
      <UserInfoCard {...userInfo} />
    </div>
  );
};

export default MainPage;
