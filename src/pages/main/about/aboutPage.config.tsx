import { FilterConfig, UserInfo } from 'typings';
import { Major, College } from '@/constant/enum';
import { Input, Cascader, Tag } from 'antd';
import React from 'react';
import { cascaderOptions } from '@/pages/register/filterConfig.index';
import { ColumnsType } from 'antd/lib/table';
import { PLACEHOLDER } from '@/constant';
export interface DescriptionItemProps {
  content: string;
  span?: number;
  label: string;
}

export const getUserInfo = (
  userInfoObject: UserInfo,
): DescriptionItemProps[] => [
  {
    content: userInfoObject.name,
    label: '姓名',
  },
  {
    content: userInfoObject.studentID,
    label: '学号',
  },
  {
    content: userInfoObject.grade + '级',
    label: '年级',
  },
  {
    content: userInfoObject.telephone,
    label: '电话',
  },
  {
    content: College[userInfoObject.college],
    label: '学院',
  },
  {
    content: Major[userInfoObject.major],
    label: '专业',
  },

  {
    content: userInfoObject.location,
    label: '当前所在地',
  },
  {
    content: userInfoObject.email,
    label: '邮箱',
    span: 2,
  },
];

export const modifiedFilterConfig: FilterConfig[] = [
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
    span: 18,
    widget: <Input allowClear disabled />,
  },
  {
    key: 'studentID',
    label: '学号',
    options: {
      rules: [{ required: true, message: '请输入学号' }],
    },
    span: 18,
    widget: <Input allowClear disabled />,
  },
  {
    key: 'name',
    label: '姓名',
    options: {
      rules: [{ required: true, message: '请输入姓名' }],
    },
    span: 18,
    widget: <Input allowClear disabled />,
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
    span: 18,
    widget: <Input allowClear />,
  },
  {
    key: 'collegeAndMajor',
    label: '学院 / 专业',
    span: 18,
    widget: <Cascader options={cascaderOptions} allowClear placeholder="" />,
    options: {
      rules: [{ required: true, message: '请选择学院 / 专业' }],
    },
  },
  {
    key: 'grade',
    label: '年级',
    options: {
      rules: [{ required: true, message: '请输入年级' }],
    },
    span: 18,
    widget: <Input allowClear />,
  },
  {
    key: 'location',
    label: '当前所在地',
    options: {
      rules: [{ required: true, message: '请输入当前所在地' }],
    },
    span: 18,
    widget: <Input allowClear />,
  },
];

export const tagTableColumn: ColumnsType<any> = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    render: (item, index) => index + 1,
  },
  {
    title: '名称',
    dataIndex: 'tName',
    key: 'tName',
    render: (item, index) => item,
  },
  {
    title: '简介',
    dataIndex: 'tagDesc',
    key: 'tagDesc',
    render: (item, index) => item,
  },
  {
    title: '现有文章数',
    dataIndex: 'articleNumber',
    key: 'articleNumber',
    render: (item, index) => item,
  },
];

export const articleTableColumn: ColumnsType<any> = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    render: (item, index) => index + 1,
  },
  {
    title: '文章名称',
    dataIndex: 'articleName',
    key: 'articleName',
    render: (item, index) => item,
  },
  {
    title: '发表日期',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: (item, index) => item,
  },
  {
    title: '标签',
    dataIndex: 'articleTags',
    key: 'articleTags',
    render: (item) => (
      <React.Fragment>
        {item.map((ele: string) => (
          <Tag>{ele}</Tag>
        ))}
      </React.Fragment>
    ),
  },
];

export const addTagFormColumn: FilterConfig[] = [
  {
    key: 'tName',
    label: '标签名称',
    options: {
      rules: [{ required: true, message: '请输入标签名' }],
    },
    widget: <Input allowClear />,
    span: 20,
  },
  {
    key: 'tagDesc',
    label: '标签简介',
    options: {
      rules: [{ required: true, message: '请输入简介' }],
    },
    widget: <Input.TextArea />,
    span: 20,
  },
];

export const addArticleFormColumn: FilterConfig[] = [
  {
    key: 'author',
    label: '作者',
    options: {
      rules: [{ required: true, message: '请输入姓名' }],
    },
    widget: <Input allowClear />,
    span: 10,
  },
  {
    key: 'articleTitle',
    label: '标题',
    options: {
      rules: [{ required: true, message: '请输入标题' }],
    },
    widget: <Input allowClear />,
    span: 10,
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