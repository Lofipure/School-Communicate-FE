import * as React from 'react';
// @ts-ignore
import styles from './index.less';
import { SelectStatusComponent } from './config';
import { Col, Input, Row, Tag, Button, message } from 'antd';
import {
  UserOutlined,
  CoffeeOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';
import { authorInfoProps } from '@/Components/ArticleShow';
import { history } from 'umi';
import { pushComment } from '@/Api';
import axios from 'axios';

interface CommentInputProps extends authorInfoProps {}

interface CommentPorps {
  commenterEmail?: string;
  commentText?: string;
  commentStatus?: string;
  articleId?: string;
}

const CommentInput = (props: CommentInputProps) => {
  const [commentInfo, setCommentInfo] = React.useState<CommentPorps>();
  const [pushStatus, setPushStatus] = React.useState<boolean>(false);
  const { email } = props;

  const handlePush = () => {
    setPushStatus(true);
    axios({
      url: pushComment.url,
      method: pushComment.method,
      data: commentInfo,
    }).then((res) => {
      setPushStatus(false);
      if (res.data) {
        message.success('评论成功');
      } else {
        message.error('评论失败');
      }

      setTimeout(() => {
        location.reload();
      }, 500);
    });
  };
  React.useEffect(() => {
    setCommentInfo({
      ...commentInfo,
      commenterEmail: localStorage.getItem('email') || '',
      articleId: history.location.pathname.split('/').pop(),
    });
  }, []);
  return (
    <div className={styles['container']}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCommentInfo({ ...commentInfo, commentText: e.target.value });
        }}
        addonBefore={
          <SelectStatusComponent
            onChange={(value: string) => {
              setCommentInfo({ ...commentInfo, commentStatus: value });
            }}
          />
        }
      />
      <Row justify="end" align="middle">
        <Col span={3}>
          <span className={styles['tip']}>
            <Tag
              icon={<CoffeeOutlined />}
              color={
                email == localStorage.getItem('email') ? 'warning' : 'success'
              }
            >
              {email == localStorage.getItem('email') ? '我是作者' : '我是读者'}
            </Tag>
          </span>
        </Col>
        <span className={styles['commenter']}>
          <UserOutlined className={styles['comment-icon']} />
          {`${localStorage.getItem('email')}`}
        </span>
        <Col span={2}>
          <span className={styles['tip']}>
            <Button
              type="primary"
              icon={<ThunderboltOutlined />}
              onClick={handlePush}
              loading={pushStatus}
            >
              发布评论
            </Button>
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default CommentInput;
