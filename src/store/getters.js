const getters = {
  userName: state => state.user.name,
  token: state => state.user.token,
  online: state => ({ name: state.user.online ? '在线' : '离线', icon: state.user.online ? 'online' : 'offline' }),
  headName: state => state.head.headName,
};
export default getters;
