import * as React from 'react';
import './index.less';
import { Tag, Button, List } from 'antd';
import {
  MailOutlined,
  UserOutlined,
  TagsOutlined,
  PushpinOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
export interface UserInfoProps {
  name: string;
  email: string;
  major: number;
  college: number;
  location: string;
  telephone: string;
}

export interface ArticleInfoProps {
  articleTitle: string;
  shortDesc: string;
  authorInfo: UserInfoProps;
  createdAt: string;
  tags: Array<string>;
  aId: string;
}

export interface ArticleCardProps {
  data: ArticleCardProps[];
}

const ArticleCard = (props: ArticleCardProps) => {
  return (
    <div className="article-card-container">
      <List
        itemLayout="vertical"
        size="default"
        // @ts-ignore
        dataSource={props.data}
        renderItem={(item: ArticleInfoProps, index: number) => (
          <List.Item
            className="article-card-item"
            key={index}
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  history.push('/main/article/' + item.aId);
                }}
              >
                进来康康
              </Button>,
              <span className="article-card-item-author">
                <UserOutlined className="article-card-item-author-icon" />
                {item.authorInfo.name}
              </span>,
              <span className="article-card-item-author">
                <MailOutlined className="article-card-item-author-icon" />
                {item.authorInfo.email}
              </span>,
              <span className="article-card-item-author">
                <PhoneOutlined className="article-card-item-author-icon" />
                {item.authorInfo.telephone}
              </span>,
              <span className="article-card-item-author">
                <PushpinOutlined className="article-card-item-author-icon" />
                {item.authorInfo.location}
              </span>,
            ]}
            extra={
              <React.Fragment>
                {item.tags.map((ele, idx) => (
                  <Tag key={idx} color="processing" icon={<TagsOutlined />}>
                    {ele}
                  </Tag>
                ))}
              </React.Fragment>
            }
          >
            <List.Item.Meta
              title={item.articleTitle}
              description={item.shortDesc}
            ></List.Item.Meta>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default ArticleCard;
