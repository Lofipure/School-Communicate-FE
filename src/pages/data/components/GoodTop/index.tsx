import * as React from 'react';
import { Tag } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
const GoodTop = () => {
  return (
    <div>
      <Tag color="warning" icon={<WarningOutlined />}>
        正在紧张开发中，尽情期待。
      </Tag>
    </div>
  );
};

export default GoodTop;
