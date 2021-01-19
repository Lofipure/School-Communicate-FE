import * as React from 'react';
import { history } from 'umi';
import { getArticleById } from '@/Api';
import axios from 'axios';
import ArticleShow, { ArticleShowPorps } from './components/ArticleShow';
import { Row, Col, Spin } from 'antd';
import './index.less';

const ArticleMainPage = () => {
  const id = history.location.pathname.split('/').pop();
  const [articleInfo, setArticleInfo] = React.useState<ArticleShowPorps>();
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    axios({
      method: getArticleById.method,
      url: getArticleById.url + `?aId=${id}`,
    })
      .then((res) => {
        setArticleInfo(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Spin spinning={loading}>
      <div className="article-main-page">
        <Row justify="center" align="middle" className="article-main-page-text">
          <Col span={23}>
            <ArticleShow {...articleInfo} />
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default ArticleMainPage;
