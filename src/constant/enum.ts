export enum CollegeEnums {
  'safetyCollege' = 1,
  'materialsCollege',
  'mappingCollege',
  'innovationAndEntrepreneurshipEducationCollege',
  'earthRingCollege',
  'electronicControlCollege',
  'administrationCollege',
  'internationalEducationvCollege',
  'chemicalIndustryCollege',
  'mechanicsCollege',
  'computerCollege',
  'continuingEducationCollege',
  'constructionProjectCollege',
  'scienceCollege',
  'marxismCollege',
  'energyCollege',
  'humanitiesAndForeignLanguagesCollege',
  'communicateCollege',
  'graduateStudentCollege',
  'artCollege',
}

export enum MajorEnums {
  'anquangongcheng' = 1,
  'anquangongchengzhuoyue', //2
  'xiaofanggongcheng', //3
  'yingjijishuyuguanli', //4
  'cailiaokexueyugongcheng', //5
  'gaofenzicailiaoyugongcheng', //6
  'wujifeijinshugongcheng', //7
  'xinnengyuancailiaoyuqijian', //8
  'cehuigongcheng', //9
  'cehuigongchengzhuoyue', //10
  'dilixinxikexue', //11
  'yaogankexueyujishu', //12
  'zirandiliyuziyuanhuanjing', //13
  'chuangxinchuangyejiaoyu', //14
  'dixiashuikexueyugongcheng', //15
  'dizhigongcheng', //16
  'dizhigongchengzhuoyue', //17
  'huanjinggongcheng', //18
  'ziyuankanchagongcheng', //19
  'cekongjishuyuyiqi', //20
  'dianqigongchengjiqizidonghua', //21
  'dianqigongchengjiqizigonghuahezuobanxue', //22
  'weidianzikexueyugongcheng', //23
  'zidonghua', //24
  'dianzishangwu', //25
  'gongchengguanli', //26
  'gongshangguanli', //27
  'gongshangguanliguoji', //28
  'kuaijixue', //29
  'lvyouguanli', //30
  'wuliuguanli', //31
  'xinxiguanliyuxinxixitong', //32
  'guojijiaoyu', //33
  'huaxuegongchengyugongyi', //34
  'huaxuegongchengyugongyizhuoyue', //35
  'kuangwujiagonggongcheng', //36
  'nengyuanhuaxuegongcheng', //37
  'yingyonghuaxue', //38
  'chelianggongcheng', //39
  'gongyegongcheng', //40
  'jixiedianzigongcheng', //41
  'jixieshejizhizaojiqizidonghua', //42
  'jixieshejizhizaojiqizidonghuazhuoyue', //43
  'zhinengzhizaogongcheng', //44
  'ruanjiangongcheng', //45
  'jisuanjikexueyujishu', //46
  'wangluogongcheng', //47
  'shujvkexueyudashujvjishu', //48
  'xinxiyujisuankexue', //49
  'shaoshuminzuyukeli', //50
  'shaoshuminzuyukewen', //51
  'chengshidixiakongjiangongcheng', //52
  'chengxiangguihua', //53
  'jipaishuikexueyugongcheng', //54
  'jianzhuxue', //55
  'tumugongcheng', //56
  'tumugongchenghezuobanxue', //57
  'tumugongchengzhuoyue', //58
  'gongchenglixue', //59
  'shuxueyuyingyongshuxue', //60
  'makesizhuyi', //61
  'caikuanggongcheng', //62
  'caikuanggongchengzhinengkaicai', //63
  'caikuanggongchengzhuoyue', //64
  'jianzhuhuanjingyunengyuanyingyonggongcheng', //65
  'faxue', //66
  'hanyuyanwenxue', //67
  'hanyuyanwenxueguoji', //68
  'yingyu', //69
  'zhengzhixueyuxingzhengxue', //70
  'tongxingongcheng', //71
  'wulianwanggongcheng', //72
  'dianzixinxigongcheng', //73
  'dianzikexueyujishu', //74
  'dianzixinxikexueyujishu', //75
  'zhinengkexueyujishu', //76
  'yanjiusheng', //77
  'chanpinsheji', //78
  'donghua', //79
  'gongyesheji', //80
  'huanjingsheji', //81
  'shijuechuandasheji', //82
  'yishusheji', //83
}
export const College: Record<number, string> = {
  [CollegeEnums.safetyCollege]: '安全学院',
  [CollegeEnums.materialsCollege]: '材料学院',
  [CollegeEnums.mappingCollege]: '测绘学院',
  [CollegeEnums.innovationAndEntrepreneurshipEducationCollege]:
    '创新创业教育学院',
  [CollegeEnums.earthRingCollege]: '地环学院',
  [CollegeEnums.electronicControlCollege]: '电控学院',
  [CollegeEnums.administrationCollege]: '管理学院',
  [CollegeEnums.internationalEducationvCollege]: '国际教育学院',
  [CollegeEnums.chemicalIndustryCollege]: '化工学院',
  [CollegeEnums.mechanicsCollege]: '机械学院',
  [CollegeEnums.computerCollege]: '计算机学院',
  [CollegeEnums.continuingEducationCollege]: '继续教育学院',
  [CollegeEnums.constructionProjectCollege]: '建工学院',
  [CollegeEnums.scienceCollege]: '理学院',
  [CollegeEnums.marxismCollege]: '马克思主义学院',
  [CollegeEnums.energyCollege]: '能源学院',
  [CollegeEnums.humanitiesAndForeignLanguagesCollege]: '人文与外国语学院',
  [CollegeEnums.communicateCollege]: '通信学院',
  [CollegeEnums.graduateStudentCollege]: '研究生学院',
  [CollegeEnums.artCollege]: '艺术学院',
};

export const Major: Record<number, string> = {
  [MajorEnums.anquangongcheng]: '安全工程',
  [MajorEnums.anquangongchengzhuoyue]: '安全工程卓越',
  [MajorEnums.xiaofanggongcheng]: '消防工程',
  [MajorEnums.yingjijishuyuguanli]: '应急急救与管理',
  [MajorEnums.cailiaokexueyugongcheng]: '材料科学与工程',
  [MajorEnums.gaofenzicailiaoyugongcheng]: '高分子材料与工程',
  [MajorEnums.wujifeijinshugongcheng]: '无机非金属材料工程',
  [MajorEnums.xinnengyuancailiaoyuqijian]: '新能源材料与器件',
  [MajorEnums.cehuigongcheng]: '测绘工程',
  [MajorEnums.cehuigongchengzhuoyue]: '测绘工程卓越',
  [MajorEnums.dilixinxikexue]: '地理信息科学',
  [MajorEnums.yaogankexueyujishu]: '遥感科学与技术',
  [MajorEnums.zirandiliyuziyuanhuanjing]: '自然地理与资源环境',
  [MajorEnums.chuangxinchuangyejiaoyu]: '创新创业教育',
  [MajorEnums.dixiashuikexueyugongcheng]: '地下水科学与工程',
  [MajorEnums.dizhigongcheng]: '地质工程',
  [MajorEnums.dizhigongchengzhuoyue]: '地质工程卓越',
  [MajorEnums.huanjinggongcheng]: '环境工程',
  [MajorEnums.ziyuankanchagongcheng]: '资源勘查工程',
  [MajorEnums.cekongjishuyuyiqi]: '测控技术与仪器',
  [MajorEnums.dianqigongchengjiqizidonghua]: '电气工程及其自动化',
  [MajorEnums.dianqigongchengjiqizigonghuahezuobanxue]:
    '电气工程及其自动化合作办学',
  [MajorEnums.weidianzikexueyugongcheng]: '微电子科学与工程',
  [MajorEnums.zidonghua]: '自动化',
  [MajorEnums.dianzishangwu]: '电子商务',
  [MajorEnums.gongchengguanli]: '工程管理',
  [MajorEnums.gongshangguanli]: '工商管理',
  [MajorEnums.gongshangguanliguoji]: '工商管理国际',
  [MajorEnums.kuaijixue]: '会计学',
  [MajorEnums.lvyouguanli]: '旅游管理',
  [MajorEnums.wuliuguanli]: '物流管理',
  [MajorEnums.xinxiguanliyuxinxixitong]: '信息管理与信息系统',
  [MajorEnums.guojijiaoyu]: '国际教育',
  [MajorEnums.huaxuegongchengyugongyi]: '化学工程与工艺',
  [MajorEnums.huaxuegongchengyugongyizhuoyue]: '化学工程与工艺卓越',
  [MajorEnums.kuangwujiagonggongcheng]: '矿物加工工程',
  [MajorEnums.nengyuanhuaxuegongcheng]: '能源化学工程',
  [MajorEnums.yingyonghuaxue]: '应用化学',
  [MajorEnums.chelianggongcheng]: '车辆工程',
  [MajorEnums.gongyegongcheng]: '工业工程',
  [MajorEnums.jixiedianzigongcheng]: '机械电子工程',
  [MajorEnums.jixieshejizhizaojiqizidonghua]: '机械设计制造及其自动化',
  [MajorEnums.jixieshejizhizaojiqizidonghuazhuoyue]:
    '机械设计制造及其自动化卓越',
  [MajorEnums.zhinengzhizaogongcheng]: '智能制造工程',
  [MajorEnums.ruanjiangongcheng]: '软件工程',
  [MajorEnums.jisuanjikexueyujishu]: '计算机科学与技术',
  [MajorEnums.wangluogongcheng]: '网络工程',
  [MajorEnums.shujvkexueyudashujvjishu]: '数据科学与大数据技术',
  [MajorEnums.xinxiyujisuankexue]: '信息与计算科学',
  [MajorEnums.shaoshuminzuyukeli]: '少数民族预科理',
  [MajorEnums.shaoshuminzuyukewen]: '少数民族预科文',
  [MajorEnums.chengshidixiakongjiangongcheng]: '城市地下空间工程',
  [MajorEnums.chengxiangguihua]: '城乡规划',
  [MajorEnums.jipaishuikexueyugongcheng]: '给排水科学与工程',
  [MajorEnums.jianzhuxue]: '建筑学',
  [MajorEnums.tumugongcheng]: '土木工程',
  [MajorEnums.tumugongchenghezuobanxue]: '土木工程合作办学',
  [MajorEnums.tumugongchengzhuoyue]: '土木工程卓越',
  [MajorEnums.gongchenglixue]: '工程力学',
  [MajorEnums.shuxueyuyingyongshuxue]: '数学与应用数学',
  [MajorEnums.makesizhuyi]: '马克思主义',
  [MajorEnums.caikuanggongcheng]: '采矿工程',
  [MajorEnums.caikuanggongchengzhinengkaicai]: '采矿工程智能开采',
  [MajorEnums.caikuanggongchengzhuoyue]: '采矿工程卓越',
  [MajorEnums.jianzhuhuanjingyunengyuanyingyonggongcheng]:
    '建筑环境与能源应用工程',
  [MajorEnums.faxue]: '法学',
  [MajorEnums.hanyuyanwenxue]: '汉语言文学',
  [MajorEnums.hanyuyanwenxueguoji]: '汉语言文学国际',
  [MajorEnums.yingyu]: '英语',
  [MajorEnums.zhengzhixueyuxingzhengxue]: '政治学与行政学',
  [MajorEnums.tongxingongcheng]: '通信工程',
  [MajorEnums.wulianwanggongcheng]: '物联网工程',
  [MajorEnums.dianzixinxigongcheng]: '电子信息工程',
  [MajorEnums.dianzikexueyujishu]: '电子科学与技术',
  [MajorEnums.dianzixinxikexueyujishu]: '电子信息科学与技术',
  [MajorEnums.zhinengkexueyujishu]: '智能科学与技术',
  [MajorEnums.yanjiusheng]: '研究生',
  [MajorEnums.chanpinsheji]: '产品设计',
  [MajorEnums.donghua]: '动画',
  [MajorEnums.gongyesheji]: '工业设计',
  [MajorEnums.huanjingsheji]: '环境设计',
  [MajorEnums.shijuechuandasheji]: '视觉传达设计',
  [MajorEnums.yishusheji]: '艺术设计',
};
