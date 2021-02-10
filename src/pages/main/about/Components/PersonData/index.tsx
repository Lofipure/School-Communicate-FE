import * as React from 'react';
// @ts-ignore
import styles from './index.less';
import { Row, Col, Card, Statistic } from 'antd';
import { getGoodNumberFromEmail, getArticleNumberFromEmail } from '@/Api';
import axios from 'axios';

interface PersonDataProps {
  email: string;
}

type showProps = {
  data: number;
  status: boolean;
};

const PersonalData = (props: PersonDataProps) => {
  const [articleNumber, setArticleNumber] = React.useState<showProps>({
    data: 0,
    status: true,
  });
  const [goodNumber, setGoodNumber] = React.useState<showProps>({
    data: 0,
    status: true,
  });

  const fetchData = () => {
    axios({
      method: getGoodNumberFromEmail.method,
      url: getGoodNumberFromEmail.url + `?email=${props.email}`,
    })
      .then((res) => {
        setArticleNumber({ ...articleNumber, data: res.data });
      })
      .finally(() => {
        setArticleNumber({ ...articleNumber, status: false });
      });

    axios({
      method: getArticleNumberFromEmail.method,
      url: getArticleNumberFromEmail.url + `?email=${props.email}`,
    })
      .then((res) => {
        setGoodNumber({ ...goodNumber, data: res.data });
      })
      .finally(() => {
        setGoodNumber({ ...goodNumber, status: false });
      });
  };
  React.useEffect(() => {
    fetchData();
  }, [props]);
  return (
    <div className={styles['container']}>
      <Row justify="space-around" align="middle">
        <Col span={10}>
          <Card title="我的发文数量" loading={goodNumber.status}>
            <Statistic>{goodNumber.data}</Statistic>
          </Card>
        </Col>
        <Col span={10}>
          <Card title="我收到的点赞数" loading={articleNumber.status}>
            <Statistic>{articleNumber.data}</Statistic>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalData;
