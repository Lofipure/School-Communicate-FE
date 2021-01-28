import MapTotal from './components/MapTotal';
import GoodTop from './components/GoodTop';
import React from 'react';
import { HeatMapOutlined, BookOutlined } from '@ant-design/icons';

export const tabConfig = [
  {
    tab: '校友分布',
    children: <MapTotal />,
    icon: <HeatMapOutlined />,
  },
  {
    tab: '阅读榜',
    children: <GoodTop />,
    icon: <BookOutlined />,
  },
];
