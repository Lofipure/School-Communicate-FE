import * as React from 'react';
import marked from 'marked';
import hljs from 'highlight.js';
import { Typography, Row, Col, Tag } from 'antd';
import { PLACEHOLDER } from '@/constant';
import {
  UserOutlined,
  MailOutlined,
  CalendarOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import { College, Major } from '@/constant/enum';
import './index.less';

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
}

const ArticleShow = (props: ArticleShowPorps) => {
  const render = new marked.Renderer();
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
    <div className="article-show-container">
      <Typography>
        <Title level={1} style={{ textAlign: 'center' }}>
          {props.articleTitle}
        </Title>
        <Row>
          <div className="article-show-info-container"></div>
          <div className="article-show-info-container"></div>
          <div className="article-show-info-container"></div>
        </Row>
        <Paragraph>
          <span
            dangerouslySetInnerHTML={{
              __html: marked(props.mainText || PLACEHOLDER),
            }}
          ></span>
        </Paragraph>
      </Typography>
      <Row justify="end" align="middle">
        {props.tags?.map((item, index) => (
          <Tag key={index} color="processing" icon={<TagsOutlined />}>
            {item}
          </Tag>
        ))}
      </Row>
    </div>
  );
};

export default ArticleShow;
