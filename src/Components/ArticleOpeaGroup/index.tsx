import * as React from 'react';
import { removeArticle } from '@/Api';
import { Button, message, Popconfirm, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

interface OpeaGroupProps {
  aId: string;
  articleTitle: string;
}

const OpeaGroup = (props: OpeaGroupProps) => {
  const { aId, articleTitle } = props;
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleOnDelete = () => {
    setLoading(true);
    axios({
      method: removeArticle.method,
      url: removeArticle.url + `?aId=${aId}`,
    }).then((res) => {
      if (res.data) {
        message.success('删除成功');
        setLoading(false);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    });
  };
  return (
    <Row justify="space-around">
      {/* <Button
        icon={<EditOutlined />}
        onClick={() => {
          message.warn('该功能暂不支持，敬请期待。');
        }}
      >
        编辑
      </Button> */}
      <Popconfirm
        title={`确定要删除吗？`}
        placement="topRight"
        okText="确定"
        cancelText="我再想想"
        onConfirm={handleOnDelete}
      >
        <Button
          icon={<DeleteOutlined />}
          loading={loading}
          type="primary"
          danger
        >
          <span className="mobile-hidden">删除</span>
        </Button>
      </Popconfirm>
    </Row>
  );
};

export default OpeaGroup;
