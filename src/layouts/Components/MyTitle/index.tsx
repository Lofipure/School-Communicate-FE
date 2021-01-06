import * as React from 'react';
import './index.less';
import { Baby } from '@byte-design/icons';
const MyTitle: React.FC<{}> = () => {
  return (
    <span className="header-title">
      <Baby />
      <span className="header-title-text">Name</span>
    </span>
  );
};

export default MyTitle;
