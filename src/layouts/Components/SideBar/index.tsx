import * as React from 'react';
import './index.less';
import UserInfoCard from '@/Components/UserInfoCard';

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <UserInfoCard />
    </div>
  );
};

export default SideBar;
