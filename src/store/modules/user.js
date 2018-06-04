import { Cookie } from '../../utils/storage';

const userName = 'userName';
const token = 'token';

const user = {
  state: {
    name: Cookie.get(userName),
    token: Cookie.get(token),
    online: false, // websocket是否在线
  },
  mutations: {
    SET_USERINFO(state, info) {
      state.name = info.userName;
      state.token = info.token;
      Cookie.set(info);
    },
    CLEARINFO(state) {
      state.name = '';
      state.token = '';
      Cookie.remove({ userName: '' });
      Cookie.remove({ token: '' });
    },
    SET_STATUS(state, status) {
      state.online = status;
    },
  },
};

export default user;
