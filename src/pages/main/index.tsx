import * as React from 'react';
import { getAllArticle } from '@/Api';
import axios from 'axios';
import ArticleCard, { ArticleCardProps } from '@/Components/ArticleCard';

const MainPage: React.FC = () => {
  const [cardInfo, setCardInfo] = React.useState<ArticleCardProps[]>();
  React.useEffect(() => {
    axios({
      method: getAllArticle.method,
      url: getAllArticle.url,
    }).then((res) => {
      console.log(res.data);
      setCardInfo(res.data);
    });
  }, []);
  return (
    <div className="main-page">
      {cardInfo?.map((item, index) => (
        <ArticleCard {...item} key={index} />
      ))}
    </div>
  );
};

export default MainPage;
