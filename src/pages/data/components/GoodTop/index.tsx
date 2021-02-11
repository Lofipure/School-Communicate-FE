import * as React from 'react';
import { Tag, List, Avatar } from 'antd';
import {
  LikeOutlined,
  CalendarOutlined,
  CodepenOutlined,
} from '@ant-design/icons';
import { getOrderedArticleList } from '@/Api';
import axios from 'axios';
import { Major } from '@/constant/enum';
import './index.less';

interface AuthorInfoProps {
  avatar: string;
  name: string;
  email: string;
  major: number;
}

interface ArticleInfoProps {
  authorInfo: AuthorInfoProps;
  articleTitle: string;
  createdAt: string;
  getGoodNumber: number;
  shortDesc: string;
}

const GoodTop = () => {
  const [articleList, setArticleList] = React.useState<Array<ArticleInfoProps>>(
    [],
  );
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchData = () => {
    axios({
      method: getOrderedArticleList.method,
      url: getOrderedArticleList.url,
    })
      .then((res) => {
        setArticleList(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <List
        itemLayout="vertical"
        loading={loading}
        dataSource={articleList}
        renderItem={(item: ArticleInfoProps, index: number) => (
          <List.Item
            key={index}
            actions={[
              <Tag icon={<LikeOutlined />} color="success">
                {item.getGoodNumber}
              </Tag>,
              <Tag icon={<CalendarOutlined />} color="processing">
                {new Date(item.createdAt).toLocaleDateString()}
              </Tag>,
              <Tag
                color="volcano"
                icon={<CodepenOutlined />}
                className="mobile-hidden"
              >
                {Major[item.authorInfo.major]}
              </Tag>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.authorInfo?.avatar}></Avatar>}
              title={item.articleTitle}
              description={item.shortDesc}
            ></List.Item.Meta>
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default GoodTop;
