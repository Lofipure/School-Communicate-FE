import * as React from 'react';
import { getAllArticle } from '@/Api';
import axios from 'axios';
import ArticleCard, { ArticleCardProps } from '@/Components/ArticleCard';
import { Spin } from 'antd';
const MainPage: React.FC = () => {
  const [cardInfo, setCardInfo] = React.useState<ArticleCardProps[]>();
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    axios({
      method: getAllArticle.method,
      url: getAllArticle.url,
    })
      .then((res) => {
        setCardInfo(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Spin spinning={loading}>
      <div className="main-page">
        <ArticleCard data={cardInfo || []} />
      </div>
    </Spin>
  );
};

export default MainPage;
