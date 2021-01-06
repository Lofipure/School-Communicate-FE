import * as React from 'react';
import './index.less';
import { Baby } from '@byte-design/icons';
const MyTitle: React.FC<{}> = () => {
  return (
    <div className="header-title">
      <Baby />
      <span className="header-title-text">Name</span>
    </div>
  );
};

export default MyTitle;
