import np from 'nprogress';
import 'nprogress/nprogress.css';
import { Message, MessageBox } from 'element-ui';
import { postRequest, getRequest } from './axiosFun';
import router from '../router';
import store from '../store';

import urlList from './apiList';

np.configure({ showSpinner: false });

const getUrl = key => ({}.hasOwnProperty.call(urlList, key) ? urlList[key] : '');

const common = (key, fun) => {
  try {
    np.start();
    const path = getUrl(key);
    if (path) {
      return new Promise((resolve, reject) => {
        fun(path).then((r) => {
          resolve(r);
          const { message, status } = r.data;
          if (Number(status) !== 1) {
            Message({
              message,
              type: 'error',
              duration: 1000,
            });
          }
        }, (e) => {
          reject(e);
          // 登录过期跳转到登录页面
          if (e.response && Number(e.response.status) === 403) {
            MessageBox.alert('登录已过期，请重新登录！', {
              confirmButtonText: '确定',
              callback: () => {
                store.commit('CLEARINFO');
                router.push({ path: '/introduce' });
              },
            });
          }
        });
      });
    }
    return Promise.reject(new Error('Url is undefined'));
  } finally {
    np.done();
  }
};


export const post = (key, params) => common(key, path => postRequest(path, params));
export const get = (key, params) => common(key, path => getRequest(path, params));
