import { post } from '../apiFun';


export const getDeviceList = params => post('deviceList', params);// 设备列表

export const getProjectList = params => post('projectList', params);// 项目列表

export const getProjectDeviceList = params => post('projectDeviceList', params);// 项目设备列表

