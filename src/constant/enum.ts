export enum CollegeEnums {
  'communicateCollege' = 1,
  'computerCollege',
}

export enum MajorEnums {
  'commuicateEngine' = 1,
  'wulianwang',
  'dianxin',
  'dianke',
  'dianxinke',
  'ruangong',
  'jike',
}

export const College: Record<number, string> = {
  [CollegeEnums.communicateCollege]: '通信学院',
  [CollegeEnums.computerCollege]: '计算机学院',
};

export const Major: Record<number, string> = {
  [MajorEnums.commuicateEngine]: '通信工程',
  [MajorEnums.wulianwang]: '物联网工程',
  [MajorEnums.dianxin]: '电子信息工程',
  [MajorEnums.dianke]: '电子科学与技术',
  [MajorEnums.dianxinke]: '电子信息科学与技术',
  [MajorEnums.ruangong]: '软件工程',
  [MajorEnums.jike]: '计算机科学与技术',
};
