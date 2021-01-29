import MapTotal from './components/MapTotal';
import GoodTop from './components/GoodTop';
import React from 'react';
import { HeatMapOutlined, BookOutlined } from '@ant-design/icons';

export const tabConfig = [
  {
    tab: '点赞榜',
    children: <GoodTop />,
    icon: <BookOutlined />,
  },
  {
    tab: '校友分布',
    children: <MapTotal />,
    icon: <HeatMapOutlined />,
  },
];
