import * as React from 'react';
// @ts-ignore
import styles from './index.less';
import { Row, Col, Statistic } from 'antd';
import { getGoodNumberFromEmail, getArticleNumberFromEmail } from '@/Api';
import { LikeOutlined, BookOutlined } from '@ant-design/icons';
import axios from 'axios';

interface PersonDataProps {
  email: string;
}

type showProps = {
  data: number;
  status: boolean;
};

const PersonalData = (props: PersonDataProps) => {
  const [articleNumber, setArticleNumber] = React.useState<number>(0);
  const [goodNumber, setGoodNumber] = React.useState<number>(0);
  const [articleStatus, setArticleStatue] = React.useState<boolean>(true);
  const [goodStatus, setGoodStatus] = React.useState<boolean>(true);

  const fetchData = () => {
    axios({
      method: getGoodNumberFromEmail.method,
      url: getGoodNumberFromEmail.url + `?email=${props.email}`,
    })
      .then((res) => {
        setGoodNumber(res.data);
      })
      .finally(() => {
        setGoodStatus(false);
      });

    axios({
      method: getArticleNumberFromEmail.method,
      url: getArticleNumberFromEmail.url + `?email=${props.email}`,
    })
      .then((res) => {
        setArticleNumber(res.data);
      })
      .finally(() => {
        setArticleStatue(false);
      });
  };
  React.useEffect(() => {
    fetchData();
  }, [props]);
  return (
    <div className={styles['container']}>
      <Row justify="space-around" align="middle">
        <Col span={10}>
          <Statistic
            title="我收到的点赞数"
            value={goodNumber}
            loading={goodStatus}
            prefix={<LikeOutlined />}
          />
        </Col>
        <Col span={10}>
          <Statistic
            title="我的发文数量"
            value={articleNumber}
            loading={articleStatus}
            prefix={<BookOutlined />}
          />
        </Col>
      </Row>
    </div>
  );
};

export default PersonalData;
