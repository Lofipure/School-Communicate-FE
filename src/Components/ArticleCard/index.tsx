import * as React from 'react';
import './index.less';
import { Tag, Button, List } from 'antd';
import {
  MailOutlined,
  UserOutlined,
  TagsOutlined,
  PushpinOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { history } from 'umi';
import { proviceMap, contryMap, cityMap } from '@/constant/city';
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
  data: ArticleInfoProps[];
}

const ArticleCard = (props: ArticleCardProps) => {
  let [data, setData] = React.useState<ArticleInfoProps[]>();
  React.useEffect(() => {
    let dataTemp: ArticleInfoProps[] = props.data;
    dataTemp = dataTemp.map((item: ArticleInfoProps, index: number) => {
      item.authorInfo.location = JSON.parse(item.authorInfo.location);
      return item;
    });
    setData(dataTemp);
  }, [props]);
  return (
    <div className="article-card-container">
      <List
        itemLayout="vertical"
        size="default"
        // @ts-ignore
        dataSource={data}
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
                <PushpinOutlined className="article-card-item-author-icon" />
                {/* {item.authorInfo.location} */}
                {`${proviceMap[item.authorInfo.location[0]]}/${
                  cityMap[item.authorInfo.location[1]]
                }/${contryMap[item.authorInfo.location[2]]}`}
              </span>,
              <span className="article-card-item-author">
                <CalendarOutlined className="article-card-item-author-icon" />
                {new Date(item.createdAt).toLocaleDateString()}
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
