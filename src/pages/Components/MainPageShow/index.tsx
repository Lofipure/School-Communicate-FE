import * as React from 'react';
import './index.less';
import { Row, Col, Divider } from 'antd';
import { authorList } from './config';
import AuthorShow from '../AuthorShow';

const MainPageShow = () => {
  return (
    <div className="main-page-root">
      <div className="main-page-container">
        <div className="main-title">校友会</div>
        <div className="desc">基于Web的校友信息交流平台</div>
        <div className="author-list-container">
          <Divider orientation="center">关于作者</Divider>
          <Row justify="space-around" align="middle">
            {authorList.map((item: any, idx: number) => (
              <Col xs={20} sm={6} key={idx}>
                <AuthorShow {...item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MainPageShow;
