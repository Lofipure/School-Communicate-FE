import * as React from 'react';
import { removeTag } from '@/Api';
import { Button, Popconfirm, message, Row } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

interface TagOpeaGroup {
  tId: string;
}

const TagOpeaGroup = (props: TagOpeaGroup) => {
  const { tId } = props;
  const handleClick = () => {
    axios({
      method: removeTag.method,
      url: removeTag.url + `?tId=${tId}`,
    }).then((res) => {
      if (res.data) {
        message.success('删除成功');
        location.reload();
      }
    });
  };
  return (
    <Popconfirm
      placement="topLeft"
      title="确定要删除吗，这个操作将导致该标签所有文章被删除"
      okText="确定"
      cancelText="我再想想"
      onConfirm={handleClick}
    >
      <Button icon={<DeleteOutlined />} type="primary">
        删除
      </Button>
    </Popconfirm>
  );
};

export default TagOpeaGroup;
