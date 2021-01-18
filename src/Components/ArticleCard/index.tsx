import * as React from 'react';
import './index.less';
import { Row, Col, Tag, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export interface UserInfoProps {
  name: string;
  email: string;
  major: number;
  college: number;
  location: string;
}

export interface ArticleCardProps {
  articleTitle: string;
  shortDesc: string;
  authorInfo: UserInfoProps;
  createdAt: string;
  tags: Array<string>;
}

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className="article-card-container">
      <Row justify="space-around" align="middle">
        <Col span={8}>
          <span className="article-card-title">{props.articleTitle}</span>
        </Col>
        <Col span={2}>
          <UserOutlined className="article-card-container-user-logo article-card-author-name" />
          <span className="article-card-author-name">
            {props.authorInfo?.name}
          </span>
        </Col>
        <Col span={6}>
          {props.tags.map((item, index) => (
            <Tag key={index} color="processing">
              {item}
            </Tag>
          ))}
        </Col>
        <Col span={2}>
          <span className="article-card-date">
            {new Date(props.createdAt).toLocaleDateString()}
          </span>
        </Col>
      </Row>
      <Row justify="start" align="middle">
        <Col span={18}>
          <Divider
            className="article-card-container-short-desc-divider"
            type="vertical"
          />
          <span className="article-card-container-short-desc">
            {props.shortDesc}
          </span>
        </Col>
      </Row>
      <Divider style={{ marginTop: '.7rem', marginBottom: '.7rem' }} />
      <Row justify="end" align="middle">
        <Col span={6}>
          <Button className="article-card-container-btn" type="primary">
            进来康康
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ArticleCard;
