import * as React from 'react';
import { getAllArticle } from '@/Api';
import axios from 'axios';
import ArticleCard, { ArticleInfoProps } from '@/Components/ArticleCard';

const MainPage: React.FC = () => {
  const [cardInfo, setCardInfo] = React.useState<ArticleInfoProps[]>();
  React.useEffect(() => {
    axios({
      method: getAllArticle.method,
      url: getAllArticle.url,
    }).then((res) => {
      setCardInfo(res.data);
    });
  }, []);
  return (
    <div className="main-page">
      <ArticleCard data={cardInfo || []} />
    </div>
  );
};

export default MainPage;
