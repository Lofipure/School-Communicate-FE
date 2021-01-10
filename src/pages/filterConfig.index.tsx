import * as React from 'react';
import { Input } from 'antd';

const filterConfig: FilterConfig[] = [
  {
    key: 'email',
    label: '邮箱',
    options: {
      rules: [
        { required: true, message: '请输入邮箱' },
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
    label: '密码',
    options: {
      rules: [{ required: true, message: '请输入密码' }],
    },
    span: 20,
    widget: <Input.Password allowClear autoComplete="" />,
  },
];

export default filterConfig;
