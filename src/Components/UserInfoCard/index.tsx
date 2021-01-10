import * as React from 'react';

export interface UserInfoCardProps {
  name?: string;
  email?: string;
  grade?: string;
  location?: string;
  major?: string;
  collage?: string;
  telephone?: string;
}

const UserInfoCard: React.FC<UserInfoCardProps> = (
  props: UserInfoCardProps,
) => {
  return <div className="user-info-card">{props.email}</div>;
};

export default UserInfoCard;
