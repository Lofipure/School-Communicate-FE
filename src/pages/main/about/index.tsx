import * as React from 'react';
import { Button, Descriptions, Typography, Modal } from 'antd';
import { getUserByEmailApi } from '@/Api';
import axios from 'axios';
import { getUserInfo, DescriptionItemProps } from './userInfo.config';
import './index.less';

const AboutPage = () => {
  const [renderItem, setRenderItem] = React.useState<DescriptionItemProps[]>(
    [],
  );
  const [modifiedModalStatus, setModifiedModalStatus] = React.useState<boolean>(
    false,
  );

  const [username, setUserName] = React.useState<string>('');

  React.useEffect(() => {
    axios({
      url: getUserByEmailApi.url + `?email=${localStorage.getItem('email')}`,
      method: getUserByEmailApi.method,
    }).then((res) => {
      setRenderItem(getUserInfo(res.data[0]));
      setUserName(res.data[0].name);
    });
  }, []);
  return (
    <div className="about-page">
      <Modal
        visible={modifiedModalStatus}
        title={`修改${username}的信息`}
        closable
      >
        123
      </Modal>
      <Descriptions
        className="about-page-info-descriptions-container"
        title={
          <Typography.Text style={{ textAlign: 'center', margin: '0 auto' }}>
            {username + '的个人信息'}
          </Typography.Text>
        }
        extra={
          <Button
            type="primary"
            onClick={() => {
              setModifiedModalStatus(true);
            }}
          >
            修改信息
          </Button>
        }
        bordered
      >
        {renderItem.map((item, key) => (
          <Descriptions.Item
            label={item.label}
            key={item.label}
            span={item.span}
          >
            {item.content}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </div>
  );
};

export default AboutPage;
