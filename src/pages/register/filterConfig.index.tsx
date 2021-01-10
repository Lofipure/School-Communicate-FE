import * as React from 'react';
import { Input, Cascader } from 'antd';

interface CascaderOptionsProps {
  label: string;
  value: string;
  children?: CascaderOptionsProps[];
}

const cascaderOptions: CascaderOptionsProps[] = [
  {
    label: '通信学院',
    value: '1',
    children: [
      {
        label: '通信工程',
        value: '1',
      },
      {
        label: '物联网工程',
        value: '2',
      },
      {
        label: '电子信息工程',
        value: '3',
      },
      {
        label: '电子科学与技术',
        value: '4',
      },
      {
        label: '电子信息科学与技术',
        value: '5',
      },
    ],
  },
  {
    label: '计算机学院',
    value: '2',
    children: [
      {
        label: '软件工程',
        value: '1',
      },
      {
        label: '计算机科学与技术',
        value: '2',
      },
    ],
  },
];

const filterConfig: FilterConfig[] = [
  {
    key: 'email',
    label: '邮箱',
    options: {
      rules: [
        { required: true, message: '请输入邮箱' },
        {
          pattern: /^([a-zA-Z0-9\_\-\.])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
          message: '请检查格式',
        },
      ],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'studentID',
    label: '学号',
    options: {
      rules: [{ required: true, message: '请输入学号' }],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'name',
    label: '姓名',
    options: {
      rules: [{ required: true, message: '请输入姓名' }],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'telephone',
    label: '电话号码',
    options: {
      rules: [
        { required: true, message: '请输入电话号码' },
        { pattern: /^1[3-9]\d{9}$/, message: '请检查格式' },
      ],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'grade',
    label: '年级',
    options: {
      rules: [{ required: true, message: '请输入年级' }],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'collegeAndMajor',
    label: '学院 / 专业',
    span: 10,
    widget: <Cascader placeholder="" options={cascaderOptions} allowClear />,
    options: {
      rules: [{ required: true, message: '请选择学院 / 专业' }],
    },
  },
  {
    key: 'location',
    label: '当前所在地',
    options: {
      rules: [{ required: true, message: '请输入当前所在地' }],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'password',
    label: '密码',
    options: {
      rules: [{ required: true, message: '请输入密码' }],
    },
    span: 10,
    widget: <Input.Password allowClear />,
  },
];

export default filterConfig;
