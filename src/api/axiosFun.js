import axios from 'axios';
import qs from 'qs';
import store from '../store';

export const postRequest = (url, params) => axios({
  method: 'post',
  url,
  data: qs.stringify(params),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: store.getters.token ? `Bearer ${store.getters.token}` : '',
  },
});
export const uploadFileRequest = (url, params) => axios({
  method: 'post',
  url,
  data: params,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});
export const putRequest = (url, params) => axios({
  method: 'put',
  url,
  data: qs.stringify(params),
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
export const deleteRequest = url => axios({
  method: 'delete',
  url,
});
export const getRequest = (url, params) => axios.get(url, {
  params,
});
