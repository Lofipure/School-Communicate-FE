import * as React from 'react';
// @ts-ignore
import styles from './index.less';
import { Row, Tag } from 'antd';
import { WarningOutlined } from '@ant-design/icons';
const MainPageShow = () => {
  return (
    <div className="main-show-container">
      <Row justify="center" align="middle">
        <span className={styles['title']}>欢迎使用西安科技大学 校友会</span>
      </Row>
      <Row justify="center" align="middle">
        <span className={styles['subtitle']}>
          主页暂无，凑合着看吧，反正不是上线版
        </span>
      </Row>
      <Row justify="center" align="middle">
        <span className={styles['tips']}>
          <Tag color="warning" icon={<WarningOutlined />}>
            因为前端比较懒，没做移动端适配，所以仅支持PC端访问，请见谅。
          </Tag>
        </span>
      </Row>
    </div>
  );
};

export default MainPageShow;
