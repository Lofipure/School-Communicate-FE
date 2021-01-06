import * as React from 'react';
import { Input } from 'antd';

const filterConfig: FilterConfig[] = [
  {
    key: 'email',
    label: 'Email',
    options: {
      rules: [
        { required: true, message: 'Email is required' },
        {
          pattern: /^([a-zA-Z0-9\_\-\.])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
          message: 'Check email pattern',
        },
      ],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'studentID',
    label: 'StudentID',
    options: {
      rules: [{ required: true, message: 'StudentID is required' }],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'name',
    label: 'Name',
    options: {
      rules: [{ required: true, message: 'Name is required' }],
    },
    span: 10,
    widget: <Input allowClear />,
  },
  {
    key: 'telephone',
    label: 'Tel',
    options: {
      rules: [
        { required: true, message: 'Telephone is required' },
        { pattern: /^1[3-9]\d{9}$/, message: 'Check telephone pattern' },
      ],
    },
    span: 10,
    widget: <Input allowClear />,
  },
];

export default filterConfig;
