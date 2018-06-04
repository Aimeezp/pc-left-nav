import Mock from 'mockjs';

const record = [];
const phone = [135, 136, 137, 138, 139, 147, 150, 151, 152, 157, 158, 159, 187, 188,
  130, 131, 132, 155, 156, 185, 186, 133, 153, 180, 189];
const deviceStatusArr = ['online', 'offline', 'unknown'];
const installStatusArr = ['已安装', '未安装'];
const useStatusArr = ['使用', '未知', '停用'];
for (let i = 0; i < 300; i += 1) {
  const line = {
    deviceNumber: parseInt((Math.random() * (10 ** 10)), 10),
    netPort: `-${parseInt((Math.random() * (10 ** 7)), 10)}`,
    deviceStatus: deviceStatusArr[parseInt((Math.random() * 3), 10)],
    installStatus: installStatusArr[parseInt((Math.random() * 2), 10)],
    useStatus: useStatusArr[parseInt((Math.random() * 3), 10)],
    address: Mock.Random.county(true),
    deviceType: `H${parseInt((Math.random() * (10 ** 3)), 10)}`,
    projectName: '测试项目',
    userName: Mock.Random.cname(),
    phone: `${phone[parseInt((Math.random() * 24), 10)]}${parseInt((Math.random() * (10 ** 8)), 10)}`,
  };
  record.push(Mock.mock(line));
}

export default record;
