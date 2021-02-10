import * as React from 'react';
import { Typography, Row, Tag } from 'antd';
import {
  UserOutlined,
  CalendarOutlined,
  TagsOutlined,
} from '@ant-design/icons';
//@ts-ignore
import styles from './index.less';
import Vditor from '@/Components/VditorContainer';

const { Title } = Typography;
export interface authorInfoProps {
  uId?: string;
  name?: string;
  major?: string;
  college?: string;
  email?: string;
  telephone?: string;
  location?: string;
  avatar?: string;
}
export interface ArticleShowPorps {
  articleTitle?: string;
  createdAt?: string;
  authorInfo?: authorInfoProps;
  tags?: Array<string>;
  mainText?: string;
  preview?: boolean;
  getGoodNumber?: number;
  getBadNumber?: number;
}

const ArticleShow = (props: ArticleShowPorps) => {
  const { preview = false } = props;

  return (
    <div className={styles['container']}>
      <Typography>
        <Title level={2} style={{ textAlign: 'center' }}>
          {props.articleTitle}
        </Title>
        {!preview && (
          <div className={styles['head']}>
            <div className={styles['container']}>
              <UserOutlined className={styles['icon']} />
              {props.authorInfo?.name}
            </div>
            <div className={styles['container']}>
              <CalendarOutlined className={styles['icon']} />
              {new Date(props?.createdAt || '').toLocaleDateString()}
            </div>
            <div className={styles['container']}></div>
          </div>
        )}
        <div className={styles['content']}>
          <Vditor value={props.mainText} mode="render" />
        </div>
      </Typography>
      {!preview && (
        <div className={styles['container']}>
          <Row justify="end" align="middle">
            {props.tags?.map((item, index) => (
              <Tag
                key={index}
                color="processing"
                icon={<TagsOutlined />}
                className={styles['tag']}
              >
                {item}
              </Tag>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
};

export default ArticleShow;
