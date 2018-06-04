// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import App from './App';
import router from './router';
import store from './store';
import './api';
import './mock';

Vue.use(ElementUI);

Vue.config.productionTip = false;

NProgress.configure({ showSpinner: false });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
