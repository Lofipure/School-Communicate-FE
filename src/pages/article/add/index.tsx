import * as React from 'react';
import './index.less';
import InfoForm from '@/Components/InfoForm';
import { addArticleFormColumn } from './addArticlePage.config';
import { Button, Row, Col, message } from 'antd';
import axios from 'axios';
import { createArticle } from '@/Api';
import { history } from 'umi';

const AddArticle = () => {
  const articleFormRef = React.useRef<React.ElementRef<typeof InfoForm>>(null);
  React.useEffect(() => {}, []);

  const handleOnClick = () => {
    axios({
      url: createArticle.url,
      method: createArticle.method,
      data: articleFormRef.current?.getFieldValues(),
    }).then((res) => {
      if (res.data) {
        message.success('发布成功');
        history.push('/main');
      } else {
        message.error('发布失败，请重试');
      }
    });
  };
  return (
    <div className="add-article-container">
      <div className="add-article-page-container-item">
        <InfoForm
          ref={articleFormRef}
          filters={addArticleFormColumn}
          layout={'vertical'}
          initialValues={{ author: localStorage.getItem('email') }}
        />
        <Row justify="space-around" align="middle">
          <Col span={10}>
            <Button
              type="primary"
              style={{ width: '100%' }}
              onClick={handleOnClick}
            >
              发布
            </Button>
          </Col>
          <Col span={10}>
            <Button style={{ width: '100%' }}>预览</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddArticle;
