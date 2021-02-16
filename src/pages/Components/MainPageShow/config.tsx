import React from 'react';
import wangAvatar from '@/image/wangziheng.png';
import liAvatar from '@/image/lizhefan.png';
import liuAvatar from '@/image/liuxinyao.png';
import { BulbOutlined } from '@ant-design/icons';
import { AuthorShowProps } from '../AuthorShow';
export const authorList: Array<AuthorShowProps> = [
  {
    name: '王子恒',
    tags: [
      {
        icon: <BulbOutlined />,
        text: '前端开发',
      },
      {
        icon: <BulbOutlined />,
        text: '后端开发',
      },
    ],
    avatar: wangAvatar,
  },
  {
    name: '李哲凡',
    tags: [
      {
        icon: <BulbOutlined />,
        text: 'UI设计',
      },
      {
        icon: <BulbOutlined />,
        text: '需求分析',
      },
    ],
    avatar: liAvatar,
  },
  {
    name: '刘新尧',
    tags: [
      {
        icon: <BulbOutlined />,
        text: '数据分析',
      },
      {
        icon: <BulbOutlined />,
        text: '数据处理',
      },
    ],
    avatar: liuAvatar,
  },
];
