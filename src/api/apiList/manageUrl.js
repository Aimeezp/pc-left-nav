// import ip from '../../assets/js/baseIp';
//
// const base = `http://${ip}:8082/smoke-sensor`;

const base = '';

export default {
  deviceList: `${base}/device/devicelist`, // 获取设备记录
  projectList: `${base}/project/projectlist`, // 项目管理
  projectDeviceList: `${base}/project-device-list`, // 项目设备管理
};
