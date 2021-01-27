import * as React from 'react';
import { SmileOutlined, FrownOutlined, MehOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import './index.less';
interface commentStatusProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}
export const commentStatusFilter: commentStatusProps[] = [
  {
    icon: (
      <SmileOutlined className="comment-icon" style={{ color: '#72c040' }} />
    ),
    label: '我觉得很赞',
    value: '1',
  },
  {
    icon: <MehOutlined className="comment-icon" style={{ color: 'orange' }} />,
    label: '我觉得还行',
    value: '2',
  },
  {
    icon: <FrownOutlined className="comment-icon" style={{ color: 'red' }} />,
    label: '我觉得差劲',
    value: '3',
  },
];

export const SelectStatusComponent = (props: any) => {
  const { onChange } = props;
  const handleOnChange = (value: string, option: any) => {
    onChange?.(value, option);
  };
  return (
    <Select placeholder="说说你的看法" onChange={handleOnChange}>
      {commentStatusFilter.map((item: commentStatusProps, index: number) => (
        <Select.Option key={index} value={item.value}>
          {item.icon}
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
};
