import Mock from 'mockjs';

const record = [];
const statusArr = ['不通知', '语音', '短信'];
const equipType = ['设备1', '设备2'];
const dmpGrounp = ['设备3', '设备4'];
for (let i = 0; i < 300; i += 1) {
  const line = {
    projectId: parseInt((Math.random() * (10 ** 3)), 10),
    projectName: '测试项目',
    address: Mock.Random.county(true),
    unit: 'XXX',
    name: 'XXX',
    equipType: equipType[parseInt((Math.random() * 2), 10)],
    projectUser: '用户',
    dmpGrounp: dmpGrounp[parseInt((Math.random() * 2), 10)],
    unusual: statusArr[parseInt((Math.random() * 3), 10)],
    warning: statusArr[parseInt((Math.random() * 3), 10)],
    hasDevice: parseInt((Math.random() * 2), 10),
  };
  record.push(Mock.mock(line));
}

export default record;
