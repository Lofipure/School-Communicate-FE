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
    span: 20,
    widget: <Input allowClear />,
  },
  {
    key: 'password',
    label: 'Password',
    options: {
      rules: [{ required: true, message: 'Password is required' }],
    },
    span: 20,
    widget: <Input.Password allowClear autoComplete="" />,
  },
];

export default filterConfig;
