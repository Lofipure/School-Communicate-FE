import * as React from 'react';
import {
  Comment,
  Spin,
  List,
  Tooltip,
  Button,
  Avatar,
  Tag,
  message,
} from 'antd';
import { getCommentsByArticleId, commentGetGood } from '@/Api';
import axios from 'axios';
import { authorInfoProps } from '@/Components/ArticleShow';
import {
  CoffeeOutlined,
  HeartOutlined,
  NotificationOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import moment from 'moment';
import './index.less';
interface CommentsListProps {
  aId?: string;
  uId?: string;
}

interface CommentDataProps {
  cId: number;
  commentStatus: string;
  commentText: string;
  createdAt: string;
  commenterInfo: authorInfoProps;
  getGoodNumber: number;
}

const CommentsList = (props: CommentsListProps) => {
  const { aId } = props;
  const [spinStatus, setSpinstatus] = React.useState<boolean>(true);
  const [commentsData, setCommentsData] = React.useState<CommentDataProps[]>(
    [],
  );

  const fetchData = () => {
    axios({
      method: getCommentsByArticleId.method,
      url: getCommentsByArticleId.url + `?aId=${aId}`,
    })
      .then((res) => {
        setCommentsData(res.data);
      })
      .finally(() => {
        commentsData?.length >= 0 && setSpinstatus(false);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, [props]);

  const goodComment = (cId: number) => {
    axios({
      url: commentGetGood.url + `?cId=${cId}`,
      method: commentGetGood.method,
    }).then((res) => {
      if (res.data) {
        message.success('点赞成功，谢谢老板的慷慨。');
        fetchData();
      }
    });
  };
  return (
    <Spin spinning={spinStatus}>
      <div className="comments-list">
        <List
          dataSource={commentsData}
          renderItem={(item: CommentDataProps, index: number) => (
            <List.Item>
              <Comment
                key={index}
                author={item.commenterInfo.name}
                content={item.commentText}
                datetime={
                  <Tooltip
                    title={moment(item.createdAt)
                      .subtract(1, 'days')
                      .format('YYYY-MM-DD HH:mm:ss')}
                  >
                    <span>
                      {moment(item.createdAt).subtract(0, 'days').fromNow()}
                    </span>
                  </Tooltip>
                }
                avatar={
                  <Avatar
                    src={item.commenterInfo.avatar}
                    style={{
                      border: '1px solid #999',
                    }}
                  />
                }
                actions={[
                  <Button
                    size="small"
                    danger
                    icon={<HeartOutlined />}
                    className="comment-item-btn"
                    onClick={goodComment.bind(this, item.cId)}
                  >
                    被点赞 {item.getGoodNumber}次
                  </Button>,
                  <span>
                    {item.commenterInfo.uId == props.uId ? (
                      <Tag
                        className="comment-tag"
                        icon={<CoffeeOutlined />}
                        color="orange"
                      >
                        原作者
                      </Tag>
                    ) : (
                      <Tag
                        className="comment-tag"
                        icon={<NotificationOutlined />}
                        color="success"
                      >
                        读者
                      </Tag>
                    )}
                  </span>,
                ]}
              ></Comment>
            </List.Item>
          )}
        ></List>
      </div>
    </Spin>
  );
};

export default CommentsList;
