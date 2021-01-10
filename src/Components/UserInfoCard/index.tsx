import * as React from 'react';
import {} from 'antd';
import { PLACEHOLDER } from '@/constant';
import { College, Major } from '@/constant/enum';
export interface UserInfoCardProps {
  name?: string;
  email?: string;
  grade?: string;
  location?: string;
  major?: string;
  college?: string;
  telephone?: string;
}

const UserInfoCard: React.FC<UserInfoCardProps> = (
  props: UserInfoCardProps,
) => {
  React.useEffect(() => {
    console.log(props);
  });
  return (
    <div className="user-info-card">
      <div>{props.college ? College[props.college] : PLACEHOLDER}</div>
      <div>{props.major ? Major[props.major] : PLACEHOLDER}</div>
    </div>
  );
};

export default UserInfoCard;
