import * as React from 'react';
import { Input, Cascader } from 'antd';
import { FilterConfig } from 'typings';
import { getItem } from '@/constant/city';

const locationOption = getItem();
interface CascaderOptionsProps {
  label: string;
  value: string;
  children?: CascaderOptionsProps[];
}

export const cascaderOptions: CascaderOptionsProps[] = [
  {
    label: '安全学院',
    value: '1',
    children: [
      {
        label: '安全工程',
        value: '1',
      },
      {
        label: '安全工程卓越',
        value: '2',
      },
      {
        label: '消防工程',
        value: '3',
      },
      {
        label: '应急急救与管理',
        value: '4',
      },
    ],
  },
  {
    label: '材料学院',
    value: '2',
    children: [
      {
        label: '材料科学与工程',
        value: '5',
      },
      {
        label: '高分子材料与工程',
        value: '6',
      },
      {
        label: '无机非金属材料工程',
        value: '7',
      },
      {
        label: '新能源材料与器件',
        value: '8',
      },
    ],
  },
  {
    label: '测绘学院',
    value: '3',
    children: [
      {
        label: '测绘工程',
        value: '9',
      },
      {
        label: '测绘工程卓越',
        value: '10',
      },
      {
        label: '地理信息科学',
        value: '11',
      },
      {
        label: '遥感科学与技术',
        value: '12',
      },
      {
        label: '自然地理与资源环境',
        value: '13',
      },
    ],
  },
  {
    label: '创新创业教育学院',
    value: '4',
    children: [
      {
        label: '创新创业教育',
        value: '14',
      },
    ],
  },
  {
    label: '地环学院',
    value: '5',
    children: [
      {
        label: '地下水科学与工程',
        value: '15',
      },
      {
        label: '地质工程',
        value: '16',
      },
      {
        label: '地质工程卓越',
        value: '17',
      },
      {
        label: '环境工程',
        value: '18',
      },
      {
        label: '资源勘查工程',
        value: '19',
      },
    ],
  },
  {
    label: '电控学院',
    value: '6',
    children: [
      {
        label: '测控技术与仪器',
        value: '20',
      },
      {
        label: '电气工程及其自动化',
        value: '21',
      },
      {
        label: '电气工程及其自动化合作办学',
        value: '22',
      },
      {
        label: '微电子科学与工程',
        value: '23',
      },
      {
        label: '自动化',
        value: '24',
      },
    ],
  },
  {
    label: '管理学院',
    value: '7',
    children: [
      {
        label: '电子商务',
        value: '25',
      },
      {
        label: '工程管理',
        value: '26',
      },
      {
        label: '工商管理',
        value: '27',
      },
      {
        label: '工商管理国际',
        value: '28',
      },
      {
        label: '会计学',
        value: '29',
      },
      {
        label: '旅游管理',
        value: '30',
      },
      {
        label: '物流管理',
        value: '31',
      },
      {
        label: '信息管理与信息系统',
        value: '32',
      },
    ],
  },
  {
    label: '国际教育学院',
    value: '8',
    children: [
      {
        label: '国际教育',
        value: '33',
      },
    ],
  },
  {
    label: '化工学院',
    value: '9',
    children: [
      {
        label: '化学工程与工艺',
        value: '34',
      },
      {
        label: '化学工程与工艺卓越',
        value: '35',
      },
      {
        label: '矿物加工工程',
        value: '36',
      },
      {
        label: '能源化学工程',
        value: '37',
      },
      {
        label: '应用化学',
        value: '38',
      },
    ],
  },
  {
    label: '机械学院',
    value: '10',
    children: [
      {
        label: '车辆工程',
        value: '39',
      },
      {
        label: '工业工程',
        value: '40',
      },
      {
        label: '机械电子工程',
        value: '41',
      },
      {
        label: '机械设计制造及其自动化',
        value: '42',
      },
      {
        label: '机械设计制造及其自动化卓越',
        value: '43',
      },
      {
        label: '智能制造工程',
        value: '44',
      },
    ],
  },
  {
    label: '计算机学院',
    value: '11',
    children: [
      {
        label: '软件工程',
        value: '45',
      },
      {
        label: '计算机科学与技术',
        value: '46',
      },
      {
        label: '网络工程',
        value: '47',
      },
      {
        label: '数据科学与大数据技术',
        value: '48',
      },
      {
        label: '信息与计算科学',
        value: '49',
      },
    ],
  },
  {
    label: '继续教育学院',
    value: '12',
    children: [
      {
        label: '少数民族预科理',
        value: '50',
      },
      {
        label: '少数民族预科文',
        value: '51',
      },
    ],
  },
  {
    label: '建工学院',
    value: '13',
    children: [
      {
        label: '城市地下空间工程',
        value: '52',
      },
      {
        label: '城乡规划',
        value: '53',
      },
      {
        label: '给排水科学与工程',
        value: '54',
      },
      {
        label: '建筑学',
        value: '55',
      },
      {
        label: '土木工程',
        value: '56',
      },
      {
        label: '土木工程合作办学',
        value: '57',
      },
      {
        label: '土木工程卓越',
        value: '58',
      },
    ],
  },
  {
    label: '理学院',
    value: '14',
    children: [
      {
        label: '工程力学',
        value: '59',
      },
      {
        label: '数学与应用数学',
        value: '60',
      },
    ],
  },
  {
    label: '马克思主义学院',
    value: '15',
    children: [
      {
        label: '马克思主义',
        value: '61',
      },
    ],
  },
  {
    label: '能源学院',
    value: '16',
    children: [
      {
        label: '采矿工程',
        value: '62',
      },
      {
        label: '采矿工程智能开采',
        value: '63',
      },
      {
        label: '采矿工程卓越',
        value: '64',
      },
      {
        label: '建筑环境与能源应用工程',
        value: '65',
      },
    ],
  },
  {
    label: '人文与外国语学院',
    value: '17',
    children: [
      {
        label: '法学',
        value: '66',
      },
      {
        label: '汉语言文学',
        value: '67',
      },
      {
        label: '汉语言文学国际',
        value: '68',
      },
      {
        label: '英语',
        value: '69',
      },
      {
        label: '政治学与行政学',
        value: '70',
      },
    ],
  },
  {
    label: '通信学院',
    value: '18',
    children: [
      {
        label: '通信工程',
        value: '71',
      },
      {
        label: '物联网工程',
        value: '72',
      },
      {
        label: '电子信息工程',
        value: '73',
      },
      {
        label: '电子科学与技术',
        value: '74',
      },
      {
        label: '电子信息科学与技术',
        value: '75',
      },
      {
        label: '智能科学与技术',
        value: '76',
      },
    ],
  },
  {
    label: '研究生学院',
    value: '19',
    children: [
      {
        label: '研究生',
        value: '77',
      },
    ],
  },
  {
    label: '艺术学院',
    value: '20',
    children: [
      {
        label: '产品设计',
        value: '78',
      },
      {
        label: '动画',
        value: '79',
      },
      {
        label: '工业设计',
        value: '80',
      },
      {
        label: '环境设计',
        value: '81',
      },
      {
        label: '视觉传达设计',
        value: '82',
      },
      {
        label: '艺术设计',
        value: '83',
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
      rules: [{ required: true, message: '请选择当前所在地' }],
    },
    span: 10,
    widget: <Cascader allowClear options={locationOption} placeholder="" />,
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
