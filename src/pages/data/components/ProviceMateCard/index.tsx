import * as React from 'react';
import { List, Tag, Row, Col } from 'antd';
import { Major } from '@/constant/enum';
import {
  EnvironmentOutlined,
  ExperimentOutlined,
  HeartOutlined,
} from '@ant-design/icons';
import { cityMap, contryMap } from '@/constant/city';
import './index.less';
export interface MateProps {
  name?: string;
  major?: string;
  location?: string;
  email?: string;
  grade?: string;
}
export interface ProviceMateCardProps {
  matesList: MateProps[];
}

const ProviceMateCard = (props: ProviceMateCardProps) => {
  const [userInfo, setUserInfo] = React.useState<MateProps[]>([]);
  React.useEffect(() => {
    let tempList: MateProps[] = props.matesList.map(
      (item: MateProps, index: number) => ({
        name: item.name,
        major: Major[item.major || ''],
        email: item.email,
        location: `${cityMap[JSON.parse(item.location || '')[1]]} / ${
          contryMap[JSON.parse(item.location || '')[2]]
        }`,
        grade: item.grade,
      }),
    );
    setUserInfo(tempList);
  }, [props]);
  return (
    <List
      itemLayout="vertical"
      dataSource={userInfo}
      renderItem={(item: MateProps, index) => (
        <List.Item
          key={index}
          actions={[
            <Tag
              color="processing"
              icon={<ExperimentOutlined />}
              className="provice-mate-tag"
            >
              {item.major}
            </Tag>,
            <Tag
              color="processing"
              icon={<EnvironmentOutlined />}
              className="provice-mate-tag"
            >
              {item.location}
            </Tag>,
            <Tag
              color="red"
              icon={<HeartOutlined />}
              className="provice-mate-tag provice-mate-tag-hidden"
            >
              {item.grade}级校友
            </Tag>,
          ]}
        >
          <Row align="middle">
            <span className="mate-card-name">{item.name}</span>
            <span className="mate-card-email">{item.email}</span>
          </Row>
        </List.Item>
      )}
    ></List>
  );
};

export default ProviceMateCard;
