import { getAllTag } from '@/Api';
import { Input } from 'antd';
import React from 'react';
import { FilterConfig } from 'typings';
import SelectCompoent from '@/Components/Select';

export const addArticleFormColumn: FilterConfig[] = [
  {
    key: 'author',
    label: '作者',
    options: {
      rules: [{ required: true, message: '请输入作者邮箱' }],
    },
    widget: <Input allowClear disabled />,
    span: 6,
  },
  {
    key: 'articleTitle',
    label: '标题',
    options: {
      rules: [{ required: true, message: '请输入标题' }],
    },
    widget: <Input allowClear />,
    span: 6,
  },
  {
    key: 'tags',
    label: '标签',
    widget: <SelectCompoent allowClear Api={getAllTag} mode="multiple" />,
    span: 6,
    options: {
      rules: [{ required: true, message: '请选择标签' }],
    },
  },
  {
    key: 'shortDesc',
    label: '概要',
    widget: <Input.TextArea />,
    options: {
      rules: [{ required: true, message: '请输入概要' }],
    },
    span: 22,
  },
  {
    key: 'mainText',
    label: '内容',
    widget: <Input.TextArea />,
    options: {
      rules: [{ required: true, message: '请输入内容' }],
    },
    span: 22,
  },
];
