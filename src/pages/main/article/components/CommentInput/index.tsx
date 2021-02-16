import * as React from 'react';
// @ts-ignore
import styles from './index.less';
import { Comment, Tag, Button, message, Avatar, Input } from 'antd';
import { CoffeeOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { authorInfoProps } from '@/Components/ArticleShow';
import { history } from 'umi';
import { pushComment } from '@/Api';
import axios from 'axios';

interface CommentInputProps extends authorInfoProps {}

interface CommentPorps {
  commenterEmail?: string;
  commentText?: string;
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
      <Comment
        avatar={
          <Avatar
            src={
              props.avatar
                ? props.avatar
                : 'http://114.116.246.240/static/wangziheng.42e14961.png'
            }
          />
        }
        content={
          <Input.TextArea
            value={commentInfo?.commentText}
            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
              setCommentInfo({
                ...commentInfo,
                commentText: event.target.value,
              });
            }}
          ></Input.TextArea>
        }
        actions={[
          <Button
            loading={pushStatus}
            icon={<ThunderboltOutlined />}
            onClick={handlePush}
            type="primary"
          >
            发布评论
          </Button>,
        ]}
      />
    </div>
  );
};

export default CommentInput;
