import qs from 'qs';
import mock from './adapter';
import device from '../data/smoke/device';
import project from '../data/smoke/project';
import projectDevice from '../data/smoke/projectDevice';


// 获取设备记录
mock.onPost('/device/devicelist').reply((config) => {
  const { currentPage } = qs.parse(config.data);
  const pageSize = 20;
  const total = device.length;
  const deviceList = device.filter((u, index) => index < pageSize * currentPage
    && index >= pageSize * (currentPage - 1));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, {
        status: 1,
        data: {
          list: deviceList,
          total,
        },
      }]);
    }, 1000);
  });
});

// 获取项目管理记录
mock.onPost('/project/projectlist').reply((config) => {
  const { currentPage } = qs.parse(config.data);
  const pageSize = 20;
  const total = project.length;
  const projectList = project.filter((u, index) => index < pageSize * currentPage
    && index >= pageSize * (currentPage - 1));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, {
        status: 1,
        data: {
          list: projectList,
          total,
        },
      }]);
    }, 1000);
  });
});

// 获取项目设备列表
mock.onPost('/project-device-list').reply((config) => {
  const { currentPage } = qs.parse(config.data);
  const pageSize = 20;
  const total = projectDevice.length;
  const projectDeviceList = projectDevice.filter((u, index) => index < pageSize * currentPage
    && index >= pageSize * (currentPage - 1));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([200, {
        status: 1,
        data: {
          list: projectDeviceList,
          total,
        },
      }]);
    }, 1000);
  });
});
