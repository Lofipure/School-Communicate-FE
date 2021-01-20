import * as React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import { Typography, Row, Col, Tag } from 'antd';
import { PLACEHOLDER } from '@/constant';
import {
  UserOutlined,
  CalendarOutlined,
  TagsOutlined,
} from '@ant-design/icons';
//@ts-ignore
import styles from './index.less';
import 'highlight.js/styles/googlecode.css';

const { Title, Paragraph } = Typography;
interface authorInfoProps {
  name: string;
  major: string;
  college: string;
  email: string;
  telephone: string;
  location: string;
}
export interface ArticleShowPorps {
  articleTitle?: string;
  createdAt?: string;
  authorInfo?: authorInfoProps;
  tags?: Array<string>;
  mainText?: string;
  preview?: boolean;
}

const ArticleShow = (props: ArticleShowPorps) => {
  const render = new marked.Renderer();
  const { preview = false } = props;
  marked.setOptions({
    renderer: render,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: (code) => hljs.highlightAuto(code).value,
  });
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
        <Paragraph>
          <span
            className={styles['content']}
            dangerouslySetInnerHTML={{
              __html: marked(props.mainText || PLACEHOLDER),
            }}
          ></span>
        </Paragraph>
      </Typography>
      {!preview && (
        <Row justify="end" align="middle">
          {props.tags?.map((item, index) => (
            <Tag key={index} color="processing" icon={<TagsOutlined />}>
              {item}
            </Tag>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ArticleShow;
