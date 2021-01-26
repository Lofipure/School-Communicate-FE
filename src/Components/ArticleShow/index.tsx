import * as React from 'react';
import { Typography, Row, Col, Tag } from 'antd';
import {
  UserOutlined,
  CalendarOutlined,
  TagsOutlined,
} from '@ant-design/icons';
//@ts-ignore
import styles from './index.less';
import Vditor from '@/Components/VditorContainer';

const { Title } = Typography;
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

// import * as React from 'react';
// import Vditor from '@/Components/VditorContainer';
// // @ts-ignore
// import styles from './index.less';

// const ArticleShow = (props: ArticleShowPorps) => {
//   const { preview = false } = props;
//   React.useEffect(() => {
//     console.log(props);
//   }, []);
//   return (
//     <div className={styles['container']}>
//       {!preview && <Vditor value={props.mainText} />}
//     </div>
//   );
// };

// export default ArticleShow;
