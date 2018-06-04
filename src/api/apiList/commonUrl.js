import ip from '../../assets/js/baseIp';

const base = `http://${ip}:8080/unicom-iot`;

export default {
  login: `${base}/auth/token`, // 登陆
  changePassword: `${base}/auth/password`, // 修改密码
};
