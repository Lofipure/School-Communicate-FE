import * as React from 'react';
import './index.less';
import InfoForm from '@/Components/InfoForm';
import { addArticleFormColumn } from './addArticlePage.config';
import { Button } from 'antd';

const AddArticle = () => {
  const articleFormRef = React.useRef<React.ElementRef<typeof InfoForm>>(null);
  React.useEffect(() => {}, []);
  return (
    <div className="add-article-container">
      <div className="add-article-page-container-item">
        <InfoForm
          ref={articleFormRef}
          filters={addArticleFormColumn}
          layout={'vertical'}
          initialValues={{ author: localStorage.getItem('email') }}
        />
        <Button
          onClick={() => {
            console.log(articleFormRef.current?.getFieldValues());
          }}
        >
          Index
        </Button>
      </div>
    </div>
  );
};

export default AddArticle;
