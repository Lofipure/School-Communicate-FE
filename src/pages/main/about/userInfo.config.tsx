import { FilterConfig, UserInfo } from 'typings';
import { Major, College } from '@/constant/enum';
import { Input, Cascader } from 'antd';
import React from 'react';
import { cascaderOptions } from '@/pages/register/filterConfig.index';
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
