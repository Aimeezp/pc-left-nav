import Vue from 'vue';
import Router from 'vue-router';

import store from '../store';

const Login = () =>
  import('../views/Login');
const NotFound = () =>
  import('../views/404');
const Home = () =>
  import('../views/Home');
// const deviceManage = () =>
//   import('../views/page/DeviceManage');
const device = () =>
  import('../views/page/Device');
const project = () =>
  import('../views/page/Project');
const rights = () =>
  import('../views/page/Rights');
const users = () =>
  import('../views/page/Users');
const data = () =>
  import('../views/page/Data');
const timing = () =>
  import('../views/page/Timing');

Vue.use(Router);

const routes = [{
  path: '/',
  component: Home,
  redirect: '/login',
  children: [
    {
      path: '/rights',
      title: '权限管理',
      haveMsg: false,
      component: rights,
    },
    {
      path: '/users',
      title: '用户管理',
      haveMsg: false,
      component: users,
    },
    {
      path: '/project',
      component: project,
      title: '项目管理',
      haveMsg: true,
    },
    {
      path: '/device',
      component: device,
      title: '设备管理',
      haveMsg: false,
    },
    {
      path: '/data',
      title: '数据管理',
      haveMsg: false,
      component: data,
    },
    {
      path: '/timing',
      title: '定时任务',
      haveMsg: false,
      component: timing,
    },
    // {
    //   path: '/project/device-manage/:id/:projectName', component: deviceManage,
    // }, // 设备管理

  ],
},
{
  path: '/login',
  component: Login,
},
{
  path: '/404',
  component: NotFound,
},
{
  path: '*',
  redirect: {
    path: '/404',
  },
},
];

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }
  const position = {};
  if (to.hash) {
    position.selector = to.hash;
  } else {
    position.x = 0;
    position.y = 0;
  }
  return position;
};

const router = new Router({
  routes,
  scrollBehavior,
});

const whiteList = ['/login']; // 白名单
router.beforeEach((to, from, next) => {
  const {
    token,
  } = store.getters;
  if (!token) {
    if (whiteList.indexOf(to.path) >= 0) { // 是否在白名单内,不在的话直接跳转登录页
      next();
    } else {
      next({
        path: '/login',
      });
    }
  } else {
    next();
  }
});

export default router;
