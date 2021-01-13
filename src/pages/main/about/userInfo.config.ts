import { UserInfo } from 'typings';
import { Major, College } from '@/constant/enum';
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
