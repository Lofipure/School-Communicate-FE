import * as React from 'react';
import { history } from 'umi';
import { getArticleById, articleGetGood, articleGetBad } from '@/Api';
import axios, { AxiosRequestConfig } from 'axios';
import ArticleShow, { ArticleShowPorps } from '@/Components/ArticleShow';
import CommentsList from './components/CommentsList';
import CommentInput from './components/CommentInput';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Row, Col, Spin, Divider, Button } from 'antd';
import './index.less';

const ArticleMainPage = () => {
  const id = history.location.pathname.split('/').pop();
  const [articleInfo, setArticleInfo] = React.useState<ArticleShowPorps>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const fetchData = () => {
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
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const addReaderAction = (type: 'good' | 'bad') => {
    // console.log(type, id);
    let targetApi: AxiosRequestConfig =
      type == 'good' ? articleGetGood : articleGetBad;
    axios({
      url: targetApi.url + `?aId=${id}`,
      method: targetApi.method,
    })
      .then((res) => {
        if (res.data) {
          if (type == 'good') {
            setArticleInfo({
              ...articleInfo,
              // @ts-ignore
              getGoodNumber: articleInfo.getGoodNumber + 1,
            });
          } else {
            setArticleInfo({
              ...articleInfo,
              // @ts-ignore
              getBadNumber: articleInfo.getBadNumber + 1,
            });
          }
        }
      })
      .finally(() => {
        fetchData();
      });
  };
  return (
    <Spin spinning={loading}>
      <div className="article-main-page">
        <Row justify="center" align="middle" className="article-main-page-text">
          <Col span={23}>
            <ArticleShow {...articleInfo} />
          </Col>
          <Col span={24}>
            <Divider>
              <span className="article-main-page-divider">
                阅读完毕，说说你的看法吧。
              </span>
            </Divider>
          </Col>
          <Col>
            <Row justify="center" align="middle">
              <Button
                type="primary"
                icon={<LikeOutlined />}
                className="article-atti-btn"
                onClick={addReaderAction.bind(this, 'good')}
              >
                <span className="article-atti-number">
                  {articleInfo?.getGoodNumber}
                </span>
              </Button>
              <Button
                icon={<DislikeOutlined />}
                className="article-atti-btn"
                onClick={addReaderAction.bind(this, 'bad')}
              >
                <span className="article-atti-number">
                  {articleInfo?.getBadNumber}
                </span>
              </Button>
            </Row>
          </Col>
          <Col span={23}>
            <CommentInput {...(articleInfo?.authorInfo || {})} />
          </Col>
        </Row>
      </div>
      <div className="article-main-page">
        <Row justify="center" align="middle" className="article-main-page-text">
          <Col span={24}>
            <Divider>
              <span className="article-main-page-divider">
                来看看大家的评论。
              </span>
            </Divider>
          </Col>
          <Col span={22}>
            <CommentsList aId={id} uId={articleInfo?.authorInfo?.uId} />
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default ArticleMainPage;
