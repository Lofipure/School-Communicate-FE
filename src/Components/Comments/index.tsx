import * as React from 'react';
import { Row, Col, Comment, Spin } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';

export interface CommentsProps {
  api: AxiosRequestConfig;
  articleId: string;
}

export interface CommentProps {
  cId: string;
  commenterName: string;
  commentText: string;
  createdAt: string;
}

const Comments: React.FC<CommentsProps> = (props: CommentsProps) => {
  const [commentDatas, setCommentDatas] = React.useState<CommentProps[]>();
  const [loading, setLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    axios({
      method: props.api.method,
      url: props.api.url + `?articleId=${props.articleId}`,
    })
      .then((res) => {
        setCommentDatas(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  });
  return <Spin spinning={loading}></Spin>;
};

export default Comments;
