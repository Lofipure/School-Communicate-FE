import * as React from 'react';
import { Card, Image, Tag } from 'antd';
import './index.less';

export interface AuthorShowProps {
  name: string;
  tags: Array<{ icon: React.ReactNode; text: string }>;
  avatar: string;
}
const AuthorShow = (props: AuthorShowProps) => {
  return (
    <Card
      className="author-show-card"
      hoverable
      cover={<Image src={props.avatar}></Image>}
      actions={props.tags.map(
        (item: { icon: React.ReactNode; text: string }, idx: number) => (
          <Tag icon={item.icon} color="processing">
            {item.text}
          </Tag>
        ),
      )}
    >
      <Card.Meta description={props.name}></Card.Meta>
    </Card>
  );
};

export default AuthorShow;
